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
        catchError(error);
        res.redirect('/auth/login');
    })
})

// create user route
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

router.post('/login', function(req,res){
    passport.authenticate('local', function(error, user,info) {
        if (!user){
            req.flash('error', "invalid username or password");
            return res.redirect('auth/login');
        }
        if (error) {
            catchError(error);
            return res.redirect('/auth/login');
        }
        req.login(user, function(error ){
            if (error) {
                catchError(error);
                return res.redirect('/auth/login');
            }
            req.flash('success', `Login successful. Welcome ${req.user.name}!`);
            req.session.save(function(){
                if (req.user.isAdministrator){
                    return res.redirect('/shareholders');
                } else {
                    return res.redirect(`/shareholders/${req.user.shareholderId}?years=2`);
                }
            })
        })
    })(req, res);
})

// I haven't used user IDs as url parameters for edit, update, & delete CRUD routes for privacy & because all the info we need is in req.user
router.get('/edit', (req, res) => {
    res.render("./auth/editUser", {user: req.user});
})

router.delete('/', function(req,res) {
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
            req.flash('success', "User account deleted");  // this message doesn't survive the redirect to logout.  It would be neat to find a way to display it.
            res.redirect('/auth/logout');
        })
        .catch(err => {
            catchError(req, err);
            res.redirect('/auth/edit');
        })
    })
    .catch(err => {
        catchError(req, err);
        res.redirect('/auth/edit');
    })
})

router.put('/', function(req,res) {
    passport.authenticate('local', function(err, user, info){
        if (!user){
            req.flash('error', "Incorrect password");
            return res.redirect('/auth/edit');
        } else if (err) {
            catchError(req, err);
            return res.redirect('/auth/edit');
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
                return res.redirect('/auth/edit');
            })
        }
    })(req,res);
})

router.get('/logout', function(req,res){
    req.flash('success', 'You have been logged out');
    req.logout();
    res.redirect('/auth/login');
})

module.exports = router;