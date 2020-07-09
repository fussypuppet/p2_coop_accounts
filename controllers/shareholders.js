const express = require('express');
const db = require('../models');
const router = express.Router();
const { sequelize } = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

function fillDuesGaps(inputDuesList){
    //receives a list of dues db entries of a single unit size in ascending order of start date.  The entries list their effective start date and exclusive end date(if any).  The dates are in the date format returned by sequelize.
    //outputs a list of month-by-month dues amounts formatted as transactions [{amount: <-XXX>, category: "dues", checkNumber: "", date: <date object for the first of the relevant month>}].   There will be an entry for every month in the span covered by the input.
    let outputDuesList = [];
    inputDuesList.forEach(dbDuesEntry => {
        // if this entry has no end date, make it end next month (so it matches exclusive end dates elsewhere in the list).  The rest of this function can then treat all dbDuesEntries as equally shaped
        if (!dbDuesEntry.endDate){
            let today = new Date();
            let thisEndDate = new Date(today.getFullYear(), (today.getMonth() + 1)); // thisEndDate is now the first moment of next month
            dbDuesEntry.endDate = thisEndDate;
        }
        let potentialOutputDate = new Date(dbDuesEntry.startDate);
        while (potentialOutputDate < dbDuesEntry.endDate){  // starting with the start date, if the date is before the end date, add it to the output, then add a month and check again etc
            outputDuesList.push({amount: -(dbDuesEntry.amount), date: potentialOutputDate, category: "dues charge", checkNumber: ""});
            potentialOutputDate = new Date(potentialOutputDate.getFullYear(), (potentialOutputDate.getMonth() + 1));
        }
    })
    return outputDuesList;
}

function cropTransactionsByDate(inputTransactionList, cutoffDate){
    //receives a list of transactions in ascending order and removes all that are older than a cutoff date 
    let outputTransactionList = [];
    for (i=0; i< inputTransactionList.length; i++){
        if (inputTransactionList[i].date >= cutoffDate){   // if this the first transaction that is on the good side of the cutoff, all entries before it should be sliced out
            outputTransactionList = inputTransactionList.slice(i); // since shareholders index will be running this multiple times on a given input, we don't want to change input in-place
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

router.get('/:id', isLoggedIn, (req,res) => {
    if (req.params.id != 'style.css'){
        db.shareholder.findByPk(
            req.params.id, 
            {
                include: [db.unit, db.transaction]
            }
        )
        .then(shareholder => {
            db.dues.findAll({
                where: {
                    size: shareholder.unit.size
                },
                order: [["startDate", "ASC"]]
            })
            .then(dbDuesList => {
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
                shareholder.transactions.reverse(); // user has to scroll around less if recent transactions are listed first
                //Now construct query string to send to QuickChart API.  This will be a src attribute for an img html element in the view.
                //Map functions retrieve lists of dates and amounts from shareholder.transactions
                let theseDates = chartData.map(dataPoint => `${dataPoint.date.getMonth()+1}-${dataPoint.date.getFullYear()}`);
                //we'll construct the map in chunks to avoid having an extremely long line of code
                let graphImgSrc = `https://quickchart.io/chart?height=250&c={type:%27line%27,data:{labels:${JSON.stringify(theseDates)}` // axis labels
                graphImgSrc = graphImgSrc + `,datasets:[{label:%27Running%20Balance%27,data:${JSON.stringify(chartData.map(dataPoint => dataPoint.runningBalance))}` // chart data
                graphImgSrc = graphImgSrc + `,borderWidth:0.5,pointRadius:0,fill:false,borderColor:%27blue%27}]}}`; // chart styling options
                res.render('./partials/showShareholder', {shareholder, graphImgSrc, years: req.query.years});
            })
        })
        .catch(error => {
            console.log(`🧲🧲🧲 Error retrieving shareholder: ${JSON.stringify(error)}`);
        })
    } else {
        console.log("🪓🪓🪓🪓 req params was style.css again");
    }
});


router.get('/', isLoggedIn, (req, res) => {
    //end goal:  render a chart of shareholder names, their units, and their current balance
    //first, retrieve all shareholders and their unit numbers
    db.shareholder.findAll({
        include: [db.unit, db.transaction],
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
            res.render('./partials/shareholders', {shareholdersList: shareholdersList, error: null});
        })
        .catch(duesError => {
            console.log(`💋💋💋 Error retrieving dues: ${duesError}`);
        })
    }).catch(error => {
        console.log("Sending shareholder findAll error to ejs 💋")
        res.render('./partials/shareholders', {shareholdersList: null, error: error});
    })
})


module.exports = router;
