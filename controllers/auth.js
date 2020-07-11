const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const db = require('../models');
const flash = require('connect-flash');
const passport = require('../config/ppConfig');

function catchError(req, err){
    console.log(`🔴🔴🔴🔴Error: ${JSON.stringify(err)}`);
    req.flash('error', err.message);
}

// new user route
router.get('/register', function(req,res){
// users have one shareholder, so we want the registration form to tie the user to a shareholder
// but exposing a list of shareholder names to the public seems like a breach of privacy
// so we instead have the new user select their unit number, and can find the correct shareholder from the unit's shareholderId.
    db.unit.findAll({
        attributes: ['number', 'shareholderId']
    })
    .then(units => {
        res.render('auth/register', {units});
    })
    .catch(error => {
        console.log(`Error retrieving units for user registration: ${error}`);
    })
})

router.post('/register', function(req,res){
    db.shareholder.findByPk(   // make sure shareholder doesn't already have a user account
        req.body.shareholderId,
        {
            attributes: ['userId']
        }
    ) 
    .then(shareholder => {
        if (shareholder.userId){
            req.flash('error', "This shareholder has already registered.");
            res.redirect('/auth/register');
        } else {
            db.user.findOrCreate({  // if not, create the user account,
                where: {
                    email: req.body.email
                }, defaults: {
                    name: req.body.name,
                    password: req.body.password,
                    isAdministrator: req.body.administrator,
                    shareholderId: req.body.shareholderId
                }
            }).then(function([user,created]){   // attach the new userId to the shareholder entry,
                db.shareholder.update({
                        userId: user.id
                    }, {
                        where: {
                            id: req.body.shareholderId
                        }
                    }
                )
                .then(function(updateResponse) {
                    if (created){ // if all went well, authenticate and log in.
                        console.log("user created!");
                        passport.authenticate('local', {
                            successRedirect: '/shareholders',
                            successFlash: 'Thanks for signing up!'
                        })(req,res);
                    } else {    // but if findorCreate found rather than created, send appropriate error message
                        req.flash('error', 'Error: email already exists');
                        res.redirect('/auth/register');
                    }
                }).catch(function(err){
                    catchError(req, err);
                    res.redirect('/auth/register');
                })
            })
            .catch(function(err){
                catchError(req, err);
                res.redirect('/auth/register');
            })
        }
    }).catch(function(err){
        catchError(req, err);
        res.redirect('/auth/register');
    })
})

router.get('/login', function(req,res){
    if (!req.user){
        res.render("auth/login");
    } else {
        req.flash('success', 'You are already logged in');
        res.redirect('/shareholders');
    } 
})

router.get('/edit', (req, res) => {
    res.render("./auth/editUser", {thisSession: req.session, user: req.user});
})

router.post('/login', function(req,res,next){           // our first use of keyword "next".  This finds next instance of same route pattern and then executes it
    passport.authenticate('local', function(error, user,info) {
        if (!user){
            req.flash('error', "invalid username or password");
            return res.redirect('back');
        }
        if (error) {
            return next(error);
        }
        req.login(user, function(error ){
            if (error) next(error);  // ooh fancy single-line if statement!
            req.flash('success', `Login successful. Welcome ${req.user.name}!`);
            req.session.save(function(){
                if (req.user.isAdministrator){
                    return res.redirect('/shareholders');
                } else {
                    return res.redirect(`/shareholders/${req.user.shareholderId}?years=2`);
                }
            })
        })
    })(req, res, next);
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome to our app!',
    failureFlash: 'Invalid username or password'
}));

router.delete('/', function(req,res,next) {
    db.shareholder.update({
        userId: null
    }, {
        where: {
            id: req.user.shareholderId
        }
    })
    .then(updateSuccess => {
        db.user.destroy({
            where: {id: req.user.id}
        })
        .then(deleteResult => {
            req.flash('success', "User account deleted");
            res.redirect('/auth/logout');
        })
        .catch(err => {
            catchError(req, err);
        })
    })
    .catch(err => {
        catchError(req, err);
    })
})

router.put('/', function(req,res,next) {
    passport.authenticate('local', function(err, user, info){
        if (!user){
            req.flash('error', "Incorrect password");
            return res.redirect('/auth/edit');
        } else if (err) {
            catchError(req, err);
        } else {
            db.user.update({
                name: req.body.name,
                password: req.body.newPassword
            }, {
                where: {
                    id: req.user.id
                }
            })
            .then(updateResult => {
                req.flash('success', "User information updated");
                return res.redirect(`/shareholders/${req.user.shareholderId}`);
            })
            .catch(err => {
                catchError(req, err);
            })
        }
    })(req,res,next);
})


router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
})

module.exports = router;