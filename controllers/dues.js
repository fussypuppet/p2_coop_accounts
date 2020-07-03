const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/new', (req,res) => {
    res.render('./partials/newDues');
})

module.exports = router;