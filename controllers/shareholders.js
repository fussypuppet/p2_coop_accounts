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
            shareholdersList.forEach(thisShareholder => {
                thisShareholder.dues = [];
                duesList.forEach(thisDuesAmount => {
                    if (thisShareholder.unit.size === thisDuesAmount.size){
                        let duesSubObject = {
                            amount: thisDuesAmount.amount,
                            // parse start & end dates into months & years, since that's all that matters for counting the amount charged
                            startMonth: thisDuesAmount.startDate.getMonth() + 1, //getMonth returns a month from 0-11, but want to be able to print this directly into ejs file, so +1
                            startYear: thisDuesAmount.startDate.getFullYear()
                        }                       
                        if (thisDuesAmount.endDate){
                            console.log("sample ending date should be 4/1/xxxx" + JSON.stringify(thisDuesAmount.endDate));
                            duesSubObject.endMonth = thisDuesAmount.endDate.getMonth() + 1,
                            duesSubObject.endYear = thisDuesAmount.endDate.getFullYear()
                        }
                        thisShareholder.dues.push(duesSubObject);
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
