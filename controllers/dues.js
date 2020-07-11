const express = require('express');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const flash = require('connect-flash');

function catchError(req, err){
    console.log(`🔴🔴🔴🔴Error: ${JSON.stringify(err)}`);
    req.flash('error', err.message);
}

router.get('/new', isLoggedIn, (req,res) => {
    res.render('./dues/newDues');
})


router.post('/', isLoggedIn, (req,res) => {
    //first, must add ending dates to the monthly dues amounts these new ones are replacing, i.e. the dues amounts that are missing endDates in the database
    //in future, might want to refactor by removing endDate as an attribute entirely, and just infer the existence of an ending date by the presence of a dues entry with a more recent start date
    req.body.effectiveDate = new Date(`${req.body.effectiveDate.substring(5, 7)}/${req.body.effectiveDate.substring(8, 10)}/${req.body.effectiveDate.substring(0, 4)}`);
    if (req.body.effectiveDate.getDate() != 1){
        req.flash('error', "Error: New dues adjustments must occur on the first of a month");
        res.redirect('/dues/new');
    } else {
        db.dues.findAll({ // find the date of the last dues adjustment, and make sure the new one is more recent.
            limit: 1,
            order: [["startDate", "DESC"]] 
        })
        .then(latestDues => {
            if (req.body.effectiveDate < latestDues[0].startDate){
                req.flash('error', "Error: Date of new dues adjustment must be more recent than last adjustment")
                res.redirect('/dues/new');
            } else {
                db.dues.update( // add ending date to previous dues scheme
                    {endDate: req.body.effectiveDate},
                    {where: {endDate: null}}
                )
                .then(function(updateResponse){
                    //user will input three dollar amounts (for small, medium, and large units), so need to format input & use bulkCreate
                    function formatForCreate(thisAmount, thisDate, thisSize){
                        return {
                            amount: thisAmount,
                            size: thisSize,
                            startDate: thisDate
                        };
                    }
                    var newDuesList = [];
                    newDuesList.push(formatForCreate(req.body.smallDues, req.body.effectiveDate, "small"));
                    newDuesList.push(formatForCreate(req.body.mediumDues, req.body.effectiveDate, "medium"));
                    newDuesList.push(formatForCreate(req.body.largeDues, req.body.effectiveDate, "large"));
                    db.dues.bulkCreate(newDuesList)
                    .then(function(creationResponse){
                        req.flash('success', "Dues updated");
                        res.redirect('/shareholders');
                    })
                    .catch(function(err){
                        catchError(req, err);
                        res.redirect('/dues/new');
                    })
                })
                .catch(function(err){
                    catchError(req, err);
                    res.redirect('/dues/new');
                })
            }
        })
        .catch(function(err){
            catchError(req, err);
            res.redirect('/dues/new');
        })
    }
})

module.exports = router;