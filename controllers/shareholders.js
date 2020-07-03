const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    //end goal:  render a chart of shareholder names, their units, and their current balance
    //first, retrieve all shareholders and their unit numbers
    db.shareholder.findAll({
        include: [db.unit]
    })
    .then(shareholdersList => {
        //then retrieve all dues amounts and assign them to their appropriate shareholder/unit rows
        console.log("Retrieved shareholder & unit index. Beginning retrieval of dues");
        db.dues.findAll({
            order: [['startDate', 'ASC']]
        })
        .then(duesList => {
            //attach dues amounts to correct shareholders according by unit size, JOIN style
            let today = new Date();
            let todayMonth = today.getMonth() + 1;
            let todayYear = today.getFullYear();
            shareholdersList.forEach(thisShareholder => {
                thisShareholder.dues = [];
                duesList.forEach(thisDuesAmount => {
                    if (thisShareholder.unit.size === thisDuesAmount.size){
                        let duesSubObject = {
                            amount: thisDuesAmount.amount,
                            // parse start & end dates into months & years, since that's all that matters for counting the amount charged
                            startMonth: thisDuesAmount.startDate.getMonth() + 1, //getMonth returns a month from 0-11, but I want it to be 1-12
                            startYear: thisDuesAmount.startDate.getFullYear()
                        }                       
                        if (thisDuesAmount.endDate){
                            console.log("sample ending date should be 4/1/xxxx" + JSON.stringify(thisDuesAmount.endDate));
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


module.exports = router;
