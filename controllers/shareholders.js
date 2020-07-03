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
                        thisShareholder.dues.push(thisDuesAmount);
                    }
                })
            })
            console.log("Sending shareholder list to ejs 💰")
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
