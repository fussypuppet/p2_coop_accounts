const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    db.shareholder.findAll({
        include: [db.unit]
    })
    .then(shareholdersList => {
        console.log("Sending shareholder list to ejs 💰")
        res.render('./partials/shareholders', {shareholdersList: shareholdersList, error: null});
    }).catch(error => {
        console.log("Sending error to ejs 💋")
        res.render('./partials/shareholders', {shareholdersList: null, error: error});
    })
})


module.exports = router;
