const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const db = require('../models');
const flash = require('connect-flash');
const passport = require('../config/ppConfig');

router.get('/register', function(req,res){
    db.unit.findAll()
    .then(units => {
        res.render('auth/register', {units});
    })
    .catch(error => {
        console.log(`Error retrieving units for user registration: ${error}`);
    })
})

router.post('/register', function(req,res){
    db.unit.findByPk(
        req.body.unit,
        {
            include: [db.shareholder]
        }
    ) // for privacy, person registering selects their unit number instead of exposing shareholder names to public.  So have to find shareholderId associated with unit here.
    .then(unit => {
        console.log(`🔶🔶🔶🔶🔶🔶🔶 ${JSON.stringify(unit)}`);
        if (unit.shareholder.userId){
            req.flash('error', "This shareholder has already registered.");
            res.redirect('/auth/register');
        } else {
            db.user.findOrCreate({
                where: {
                    email: req.body.email
                }, defaults: {
                    name: req.body.name,
                    password: req.body.password,
                    isAdministrator: req.body.administrator,
                    shareholderId: unit.shareholderId
                }
            }).then(function([user,created]){
                db.shareholder.update({
                        userId: user.id
                    }, {
                        where: {
                            id: unit.shareholderId
                        }
                    }
                )
                .then(function(updateResponse) {
                    //if user was created
                    //authenticate user and start authorization process
                    //else if user already exists
                    //send error user that email already exists
                    //redirect back to register get route
                    if (created){
                        console.log("user created!");
                        passport.authenticate('local', {
                            successRedirect: '/shareholders',
                            successFlash: 'Thanks for signing up!'
                        })(req,res);
                    } else {
                        console.log("User email already exists");
                        req.flash('error', 'Error: email already exists');
                        res.redirect('/auth/register');
                    }
                }).catch(function(err){
                    console.log(`Error found Message: ${err.message}.  Please review ${err}`);
                    req.flash('error', err.message)
                    res.redirect('/auth/register');
                })
            })
            .catch(function(err){
                req.flash('error', err.message);
                res.redirect('/auth/register');
            })
        }
    }).catch(function(err){
        console.log(`Error finding unit of registering user: ${err}`);
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
                    return res.redirect(`/shareholders/${req.user.shareholderId}`);
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

router.put('/', function(req,res,next) {
    passport.authenticate('local', function(error, user, info){
        if (!user){
            return res.redirect('/auth/edit');
        } else if (error) {
            console.log("🟣🟣🟣🟣🟣🟣Authentication error in user update route");
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
                return res.redirect('/auth/logout');
            })
            .catch(error => {
                console.log("🟣🟣🟣🟣🟣User update error");
            })
        }
    })(req,res,next);
})

router.put('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome to our app!',
    failureFlash: 'Invalid username or password'
}));

router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
})

module.exports = router;