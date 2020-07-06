const express = require('express');
const db = require('../models');
const router = express.Router();
const Chart = require('chart.js');
const { sequelize } = require('../models');

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
            outputDuesList.push({amount: -(dbDuesEntry.amount), date: potentialOutputDate, category: "dues", checkNumber: ""});
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
            console.log("transaction cutoff found at " + JSON.stringify(inputTransactionList[i]) + " and cutoff date " + cutoffDate + " and index " + i);
            outputTransactionList = inputTransactionList.slice(i); // since shareholders index will be running this multiple times on a given input, we don't want to change input in-place
            break;
        }        
    }
    return outputTransactionList
}

router.get('/:id', (req,res) => {
    console.log("💙💙💙💙💙in shareholders show route, looking for id " + req.params.id);
    //db.shareholder.findOne({
    //  where: {id: req.params.id},
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
                shareholder.transactions = shareholder.transactions.concat(croppedFilledDuesList); // concatenate dues charges to dues payments
                shareholder.transactions.sort(function(a, b){ return a.date - b.date});  // collate charges & payments by ascending date
                shareholder.transactions.forEach((transaction, index) => {  // add running balance to transaction list
                    if (index > 0){
                        transaction.runningBalance = shareholder.transactions[index-1].runningBalance + parseInt(transaction.amount);
                    } else {
                        transaction.runningBalance = parseInt(transaction.amount);
                    }
                })
                res.render('./partials/showShareholder', {shareholder});
            })
        })
        .catch(error => {
            console.log(`🧲🧲🧲 Error retrieving shareholder: ${JSON.stringify(error)}`);
        })
    } else {
        console.log("🪓🪓🪓🪓 req params was style.css again");
    }
});


router.get('/', (req, res) => {
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
                    }
                })
            }
            console.log(`Sending shareholder list to ejs 💰`);
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




/*
            //attach dues amounts to correct shareholders according by unit size, JOIN style
            let today = new Date();
            let todayMonth = today.getMonth() + 1;
            let todayYear = today.getFullYear();
            shareholdersList.forEach(thisShareholder => {
                thisShareholder.dues = [];
                duesList.forEach(thisDuesAmount => {
                    if (thisShareholder.unit.size === thisDuesAmount.size){
                        let duesSubObject = {  // a duesSubObject is a monthly dues charge coupled with its start & end dates
                            amount: thisDuesAmount.amount,
                            // parse start & end dates into months & years, since that's all that matters for counting the amount charged
                            startMonth: thisDuesAmount.startDate.getMonth() + 1, //getMonth returns a month from 0-11, but I want it to be 1-12
                            startYear: thisDuesAmount.startDate.getFullYear()
                        }                       
                        if (thisDuesAmount.endDate){
                            duesSubObject.endMonth = thisDuesAmount.endDate.getMonth() + 1,
                            duesSubObject.endYear = thisDuesAmount.endDate.getFullYear()
                        } else {
                            duesSubObject.endMonth = todayMonth +1; // yes, we added a month a few lines ago to make todayMonth be from 1-12, but ending months are EXCLUSIVE, and we want to charge for the current month later on
                            duesSubObject.endYear = todayYear;
                        }
                        thisShareholder.dues.push(duesSubObject);
                    }
                })
            })
            //now compute sum of all dues charges levied against each shareholder
            //this second shareholdersList.foreach loop looks redundant, but will make for easier refactoring later by keeping functions separate
            shareholdersList.forEach(thisShareholder => {
                thisShareholder.totalDuesCharged = 0;
                //iterate through every dues amount charged through the shareholder, adding theim to the total dues charged counter
                thisShareholder.dues.forEach(thisDuesObject => { // thisDuesObject = {amount: XX, startDate: XX, and possibly an endDate: XX}
                    if (thisDuesObject.endYear === thisDuesObject.startYear) { // if it started & ended the same year, we just subtract months
                        thisShareholder.totalDuesCharged += thisDuesObject.amount * (thisDuesObject.endMonth - thisDuesObject.startMonth); //end months are exclusive
                    } else { // if dues started & ended in different years, we need to tally months in the first & last years, and add for full years for the years in between
                        thisShareholder.totalDuesCharged += thisDuesObject.amount * (13 - thisDuesObject.startMonth); //start months are inclusive
                        thisShareholder.totalDuesCharged += thisDuesObject.amount * (thisDuesObject.endMonth - 1); //end months are exclusive
                        thisShareholder.totalDuesCharged += thisDuesObject.amount * (thisDuesObject.endYear - thisDuesObject.startYear - 1);
                    }
                })
            })
            console.log(`Sending shareholder list to ejs 💰.   Sample shareholder: ${JSON.stringify(shareholdersList[0])}`);
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
*/

module.exports = router;
