const express = require('express');
const db = require('../models');
const router = express.Router();
const { sequelize } = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');


// UTILITY FUNCTIONS

function catchError(req, err){
    console.log(`🔴🔴🔴🔴Error: ${JSON.stringify(err)}`);
    req.flash('error', err.message);
}

function fillDuesGaps(inputDuesList){
    //receives a list of dues db entries of a single unit size in ascending order of start date.  The entries list their effective start date and exclusive end date(if any).  The dates are in the date format returned by sequelize.
    //outputs a list of month-by-month dues amounts formatted as transactions [{amount: <-XXX>, category: "dues charge", checkNumber: "", date: <date object for the first of the relevant month>}].   There will be an entry for every month in the span covered by the input.
    let outputDuesList = [];
    inputDuesList.forEach(dbDuesEntry => {
        // if this entry has no end date, make it end next month (so it matches exclusive end dates elsewhere in the list).  The rest of this function can then treat all dbDuesEntries as equally shaped
        if (!dbDuesEntry.endDate){
            let today = new Date();
            let thisEndDate = new Date(today.getFullYear(), (today.getMonth() + 1)); // thisEndDate is now the first moment of next month
            dbDuesEntry.endDate = thisEndDate;
        }
        let potentialOutputDate = new Date(dbDuesEntry.startDate);
        while (potentialOutputDate < dbDuesEntry.endDate){  // starting with the dues start date, if the start date is before the end date, add it to the output, then add a month to the start date and loop
            outputDuesList.push({amount: -(dbDuesEntry.amount), date: potentialOutputDate, category: "dues charge", checkNumber: ""});
            potentialOutputDate = new Date(potentialOutputDate.getFullYear(), (potentialOutputDate.getMonth() + 1));
        }
    })
    return outputDuesList;
}

function cropTransactionsByDate(inputTransactionList, cutoffDate){
    //receives a list of transactions in ascending order and removes all that are older than a cutoff date 
    let outputTransactionList = [];
    for (i=0; i<inputTransactionList.length; i++){
        if (inputTransactionList[i].date >= cutoffDate){   // if this the first transaction that is on the want-to-keep side of the cutoff, all entries before it should be sliced out
            outputTransactionList = inputTransactionList.slice(i); // since shareholders index will be running this multiple times on a given input list, we want to leave the input transaction list alone and return a fresh list
            break;
        }        
    }
    return outputTransactionList
}

function formatCurrency(inputInteger){ // accepts an integer and return a currency-formatted string with $ and commas
    function putCommas(inputString, outputString){ 
        // accepts a string of a positive number, and an incomplete output string from previous recursions and returns a full output string
        if (outputString.charAt(outputString.length-1) != "$"){ outputString += ",";} // If the output string ends in numbers, add a comma
        let digitsToCrop = inputString.length%3 ? inputString.length%3 : 3; // figure out how many digits to crop off the front of the input string
        outputString += inputString.slice(0, digitsToCrop);  // add those digits to the growing output string
        inputString = inputString.slice(digitsToCrop);  // remove them from the input string
        if (inputString){
            return putCommas(inputString, outputString);  // if the input string has digits left, recurse.  Otherwise return output string.
        } else {
            return outputString;
        }
    }
    let outputString = "";
    if (inputInteger < 0){ 
        outputString += "-"; 
        inputInteger = -inputInteger;
    }
    outputString += "$";
    return putCommas(String(inputInteger), outputString);
}


// RESTFUL ROUTES


// renders a show-shareholder page with all shareholder info, a list of all charges & payments on that shareholder's account, and a url for retrieving a QuickChart API graph image
router.get('/:id', isLoggedIn, (req,res) => {
    if (req.params.id != 'style.css'){
        db.shareholder.findByPk(
            req.params.id, 
            {
                include: [db.unit, db.transaction]
            }
        )
        .then(shareholder => { // retrieve all dues applicable to that shareholder's unit, and prep them for display
            db.dues.findAll({  // since dues don't have a db-level relationship to shareholders, we need to make a separate db call instead of including them in the previous one.
                where: {
                    size: shareholder.unit.size
                },
                order: [["startDate", "ASC"]]
            })
            .then(dbDuesList => {
                shareholder.currentDues = dbDuesList[dbDuesList.length -1].amount;
                let filledDuesList = fillDuesGaps(dbDuesList);
                let croppedFilledDuesList = cropTransactionsByDate(filledDuesList, shareholder.startDate);
                let chartData = [];
                let today = new Date();
                shareholder.transactions = shareholder.transactions.concat(croppedFilledDuesList); // concatenate dues charges to dues payments
                shareholder.transactions.sort(function(a, b){ return a.date - b.date});  // collate charges & payments by ascending date
                if (req.query.years == 2){  // if the url requested that only 2 years of transactions be displayed, crop the list to that time span
                    shareholder.transactions = cropTransactionsByDate(shareholder.transactions, (today - 31536000000*2));  // 31536000000 is # of milliseconds/year
                }
                shareholder.transactions.forEach((transaction, index) => {  // add running balance to transaction list
                    if (index > 0){
                        transaction.runningBalance = shareholder.transactions[index-1].runningBalance + parseInt(transaction.amount);
                    } else {
                        transaction.runningBalance = parseInt(transaction.amount);
                    }
                    // if this transaction is the last one for the month, add it to the list of graphable points.  Graph is far more readable if we chart only one point per month.
                    if ((index === shareholder.transactions.length - 1) || (transaction.date.getMonth() != shareholder.transactions[index + 1].date.getMonth())){
                        chartData.push({date: transaction.date, runningBalance: transaction.runningBalance});
                    }
                })
                shareholder.transactions.forEach(transaction => {   // format all dollar values as currency strings for display in view
                    transaction.amount = formatCurrency(transaction.amount);
                    transaction.runningBalance = formatCurrency(transaction.runningBalance);
                })
                if (req.query.filter){  // if user used filter field, crop out all transactions that don't fit search term
                    shareholder.transactions = shareholder.transactions.filter(transaction => String(transaction.checkNumber).includes(req.query.filter));
                }
                shareholder.transactions.reverse(); // user has to scroll around less if recent transactions are listed first
                //Now construct query string to send to QuickChart API.  This will be a src attribute for an img element in the view.
                //the following map functions retrieve lists of dates and amounts from shareholder.transactions
                let theseDates = chartData.map(dataPoint => `${dataPoint.date.getMonth()+1}-${dataPoint.date.getFullYear()}`);
                //we'll construct the graph url in chunks to avoid having an extremely long line of code
                let graphImgSrc = `https://quickchart.io/chart?height=240&c=`       // piece of API url that must not have special characters urlencoded
                    let chartPiece = `{type:'line',`    //piece of API url that does need special characters encoded
                    chartPiece = chartPiece + `data:{labels:${JSON.stringify(theseDates)}` // axis labels
                    chartPiece = chartPiece + `,datasets:[{label:'Running Balance',data:${JSON.stringify(chartData.map(dataPoint => dataPoint.runningBalance))}` // chart data
                    chartPiece = chartPiece + `,borderWidth:0.5,pointRadius:0,fill:false,borderColor:'blue'}]},` // data styling
                    chartPiece = chartPiece + `options:{scales:{xAxes:[{ticks:{fontSize:8,autoSkip:true,maxTicksLimit:12}}],yAxes:[{ticks:` // data styling options
                    chartPiece = chartPiece + `{callback:${formatCurrency.toString()},fontSize:8}}]}}}`;
                    chartPiece = encodeURIComponent(chartPiece); // urlencode the string so that things like quotation marks don't confuse API parsing
                    graphImgSrc = graphImgSrc + chartPiece;
                res.render('./shareholders/showShareholder', {shareholder, graphImgSrc, years: req.query.years});
            })
        })
        .catch(err => {
            catchError(req, err);
            if (req.user.isAdministrator){
                res.redirect('/shareholders');
            } else {
                 res.redirect(`/shareholders/${req.user.id}`);
            }
        })
    } else {
        catchError("🪓🪓🪓🪓 req params was style.css again");
        res.redirect('back');
    }
});


router.get('/', isLoggedIn, (req, res) => {
    //end goal:  render a chart of shareholder names, their units, and their current balance
    //first, retrieve all shareholders and their unit numbers
    db.shareholder.findAll({
        include: [
            db.unit, 
            {model: db.transaction, attributes: ['amount']}
        ],
        order: sequelize.col('unit.number')
    })
    .then(shareholdersList => {
        //then retrieve all dues amounts and assign them to their appropriate shareholder/unit rows
        db.dues.findAll({
            order: [['startDate', 'ASC']]
        })
        .then(dbRawDues => {
            //process raw db results into lists of monthly charges formatted like transactions attached to each shareholder object
            for (thisSize of ["small", "medium", "large"]){    // to minimize code repetition, do it one size class at a time
                let rawDuesThisSize = [];
                dbRawDues.forEach(entry => { // create list of raw db dues entries for a single size of unit
                    if (entry.size === thisSize){ rawDuesThisSize.push(entry); }
                })
                let monthlyChargeList = fillDuesGaps(rawDuesThisSize);  //convert list of single-size db entries into list of monthly charges
                shareholdersList.forEach(shareholder => {
                    if (shareholder.unit.size === thisSize){  // find each shareholder of this unit size
                        let thisShareholderCharges = cropTransactionsByDate(monthlyChargeList, shareholder.startDate); // remove all charges from before that shareholder moved in
                        shareholder.transactions = shareholder.transactions.concat(thisShareholderCharges); // add charges to shareholder's list of transactions
                        shareholder.balance = 0;
                        shareholder.transactions.forEach(transaction => { // and finally sum up all shareholder transactions to get their current balance
                            shareholder.balance += parseInt(transaction.amount);
                        })
                        shareholder.balance = formatCurrency(shareholder.balance);
                    }
                })
            }
            res.render('./shareholders/index', {shareholdersList});
        })
        .catch(err => {
            catchError(req, err);
            res.redirect('back');
        })
    }).catch(err => {
        catchError(req, err);
        res.redirect('back');
    })
})


module.exports = router;
