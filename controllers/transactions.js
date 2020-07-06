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

router.get("/edit/:id", (req,res) => {
    db.transaction.findByPk(req.params.id)
    .then(transaction => {
        db.shareholder.findAll()
        .then(shareholdersList => {
            res.render('./partials/editTransaction', {transaction: transaction, shareholdersList: shareholdersList});
        })
        .catch(error => {
            console.log(`Error in edit transaction method while retrieving shareholder list: ${JSON.stringify(error)}`);
        })
    })
    .catch(error => {
        console.log(`Error in edit transaction method while retrieving transaction: ${JSON.stringify(error)}`);
    })
})

router.put("/edit/:id", (req, res) => {
    console.log("💛💛💛💛in transaction update method with date " + req.body.date)
    db.transaction.update({
        date: req.body.date,
        category: req.body.category,
        checkNumber: req.body.checkNumber,
        amount: req.body.amount,
        notes: req.body.notes,
        shareholderId: req.body.shareholder
    }, { where: {id: req.params.id}
    })
    .then(updateResult => {
        res.redirect(`/shareholders/${req.body.shareholder}`);
    })
    .catch(error => {
        console.log(`🔴🔴🔴 Error in transaction update method: ${JSON.stringify(error)}`);
    }) 
})

router.delete("/delete/:id", (req, res) => {
    db.transaction.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(destroyResult => {
        res.redirect(`/shareholders`);
    }).catch(error => {
        console.log(`🔺🔺🔺🔺 Error in delete method: ${JSON.stringify(error)}`);
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

