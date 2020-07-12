const express = require('express');
const db = require('../models');
const { route } = require('./auth');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const flash = require('connect-flash');

function catchError(req, err){
    console.log(`🔴🔴🔴🔴Error: ${JSON.stringify(err)}`);
    req.flash('error', err.message);
}

router.get('/new', isLoggedIn, (req,res) => {
    db.shareholder.findAll({    // need shareholder id and name for <select> input field
        attributes: ['id', 'name']
    })
    .then(shareholderList => {
        res.render('./transactions/newTransaction', {shareholderList});
    })
    .catch(err => {
        catchError(req, err);
        res.redirect('back');
    })
})

router.get("/edit/:id", isLoggedIn, (req,res) => {
    db.transaction.findByPk(req.params.id)
    .then(transaction => {
        db.shareholder.findAll({
            attributes: ['id', 'name'],
            order: [['name', 'ASC']]
        })
        .then(shareholdersList => {
            res.render('./transactions/editTransaction', {transaction, shareholdersList});
        })
        .catch(err => {
            catchError(req, err);
            res.redirect('back');
        })
    })
    .catch(err => {
        catchError(req, err);
        res.redirect('back');
    })
})

router.put("/edit/:id", isLoggedIn, (req, res) => {
    // see Create route for reasoning behind reformatting req.body.date
    let dateForDb = `${req.body.date.substring(5, 7)}/${req.body.date.substring(8, 10)}/${req.body.date.substring(0, 4)}`;
    db.transaction.update({
        date: dateForDb,
        category: req.body.category,
        checkNumber: req.body.checkNumber,
        amount: req.body.amount,
        notes: req.body.notes,
        shareholderId: req.body.shareholder
    }, { where: {id: req.params.id}
    })
    .then(updateResult => {
        req.flash('success', "Transaction updated");
        res.redirect(`/shareholders/${req.body.shareholder}?years=2`);
    })
    .catch(err => {
        catchError(req, err);
        res.redirect('/back');
    }) 
})

router.delete("/delete/:id", isLoggedIn, (req, res) => {
    db.transaction.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(destroyResult => {
        req.flash('success', "Transaction deleted");
        res.redirect(`back`);
    }).catch(err => {
        catchError(req, err);
        res.redirect('back');
    })
})

router.post('/', (req,res) => {
    // req.body arrives with date in the format "YYYY-MM-DD".
    // Javascript, when it converts that to a Date object, interprets that as midnight on that date in the GMT time zone.
    // That stinks, because midnight on 2020-04-20 GMT is 2020-04-19 PST, and gets saved in the db as that date, and afterwards shows up in views as that date (the 19th instead of the 20th)
    // Luckily, Javscript interprets strings in the format "MM/DD/YYYY" differently.  Yes, really.
    // "04/20/2020" gets interpreted as 04/20 PST instead of GMT.  Submitting dates to the db in that format prevents magically losing a day when they're displayed later on.
    // So rather than worry about converting time zones everywhere I might ever query the db, I'm standardizing them on input:  here, the update method, and the seed file.
    // THIS IS STILL PROBLEMATIC.  Users east of Greenwich or west of the Pacific Coast will still see the wrong dates.
    // When refactoring, I should consider changing the date db column DataType to string & re-migrating, to represent the idea of a date instead of representing some specific moment in time.
    let dateForDb = `${req.body.date.substring(5, 7)}/${req.body.date.substring(8, 10)}/${req.body.date.substring(0, 4)}`;
    db.transaction.create({
        amount: req.body.amount,
        date: dateForDb,
        category: req.body.category,
        checkNumber: req.body.checkNumber || null,
        notes: req.body.notes,
        shareholderId: req.body.shareholder
    })
    .then(createResponse => {
        req.flash('success', "Transaction created");
        res.redirect(`/shareholders/${req.body.shareholder}?years=2`);
    }).catch(err => {
        catchError(req, err);
        res.redirect('/transactions/new');
    })
})

module.exports = router;

