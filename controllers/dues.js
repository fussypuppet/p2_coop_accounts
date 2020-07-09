const express = require('express');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/new', isLoggedIn, (req,res) => {
    res.render('./dues/newDues');
})

//REFACTOR LATER TO IMPLEMENT BEST PRACTICE IN PARSING STRINGS TO DATES
router.post('/', isLoggedIn, (req,res) => {
    //first, must add ending dates to the monthly dues amounts these new ones are replacing, i.e. the dues amounts that are missing endDates in the database
    //in future, might want to refactor by removing endDate as an attribute entirely, and just infer the existence of an ending date by the presence of a dues entry with a more recent start date
    //but for now, this seems like a more error-proof way.  The app will throw a fit in /shareholders if ending dates are earlier than starting ones, as it should
    //but later, I should have it check that here and handle it elegantly, instead of just letting it crash in /shareholders
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
        .catch(function(createError){
            console.log(`🩸🩸🩸 Dues create error: ${JSON.stringify(createError)}`);
        })
    })
    .catch(function(updateError){
        console.log(`🚨🚨🚨 Dues update error: ${JSON.stringify(updateError)}`);
    });
})

module.exports = router;