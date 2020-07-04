const express = require('express');
const db = require('../models');
const { route } = require('./auth');
const router = express.Router();

router.get('/new', (req,res) => {
    db.shareholder.findAll()
    .then(shareholderList => {
        res.render('./partials/newTransaction', {shareholderList: shareholderList});
    })
    .catch(error => {
        console.log(`🧿🧿🧿Error: ${error}`)
    })
})

router.post('/', (req,res) => {
    db.transaction.create({
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category,
        checkNumber: req.body.checkNumber,
        notes: req.body.notes,
        shareholderId: req.body.shareholder
    })
    .then(createResponse => {
        console.log(`🔮🔮🔮 Transaction created: ${JSON.stringify(createResponse)}`);
    }).catch(error => {
        console.log(`🩸🩸🩸Error creating transaction: ${JSON.stringify(error)}`);
    })
    res.redirect(`/shareholders/${req.body.shareholder}`);
})

module.exports = router;

