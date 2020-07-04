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

router.post('/', (req,res) => {     //********** STUB */
    res.render('./partials/newTransaction');
})

module.exports = router;

