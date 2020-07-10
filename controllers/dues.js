const express = require('express');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const flash = require('connect-flash');

function catchError(err){
    console.log(`Error: ${JSON.stringify(err)}`);
    //req.flash('error', err.message);
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
                db.dues.update(
                    {endDate: req.body.effectiveDate}, // don't worry, this is NOT primarily an update route.  Just need to update some before creating others
                    {where: {endDate: null}}
                )
                .then(function(updateResponse){
                    //now to add new dues amounts    
                    //user will input up to three dollar amounts (for small, medium, and/or large units)
                    //so need to use a bulk create command.
                    //and should assemble the dues amounts into a list with no null values to pass to the bulkCreate
                    function formatForCreate(thisAmount, thisDate, thisSize){
                        return {
                            amount: thisAmount,
                            size: thisSize,
                            startDate: thisDate
                        };
                    }
                    var newDuesList = [];
                    if (req.body.smallDues) newDuesList.push(formatForCreate(req.body.smallDues, req.body.effectiveDate, "small"));
                    if (req.body.mediumDues) newDuesList.push(formatForCreate(req.body.mediumDues, req.body.effectiveDate, "medium"));
                    if (req.body.largeDues) newDuesList.push(formatForCreate(req.body.largeDues, req.body.effectiveDate, "large"));
                    db.dues.bulkCreate(newDuesList)
                    //also need to add ending date to previous dues amounts (i.e. any that are null in their endDate field);
                    .then(function(creationResponse){
                        req.flash('success', "Dues updated");
                        res.redirect('/shareholders');
                    })
                    .catch(function(err){
                        catchError(err);
                        res.redirect('/dues/new');
                    })
                })
                .catch(function(err){
                    catchError(err);
                    res.redirect('/dues/new');
                })
            }
        })
        .catch(function(err){
            catchError(err);
            res.redirect('/dues/new');
        })
    }
})

module.exports = router;