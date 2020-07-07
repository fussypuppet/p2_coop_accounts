const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const db = require('../models');
const flash = require('flash');
const passport = require('../config/ppConfig');

router.get('/register', function(req,res){
    res.render('auth/register');
})

router.post('/register', function(req,res){
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user,created]){
        //if user was created
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
        //authenticate user and start authorization process
        // else if user already exists
            //send error user that email already exists
            //redirect back to register get route
})

router.get('/login', function(req,res){
    res.render("auth/login");
})

router.get('/edit', (req, res) => {
    res.render("./partials/editUser", {thisSession: req.session});
})

router.post('/login', function(req,res,next){           // our first use of keyword "next".  This finds next instance of same route pattern and then executes it
    passport.authenticate('local', function(error, user,info) {
        //if no user is authenitcated
        if (!user){
            req.flash('error', "invalid username or password");
            return res.redirect('/auth/login');
            //save our user session no username
            //redirect user to try logging in again
        }
        if (error) {
            return next(error);
        }
        req.login(user, function(error ){
            if (error) next(error);  // ooh fancy single-line if statement!
            req.flash('success!', 'You are validated and logged in');
            req.session.save(function(){
                return res.redirect('/shareholders');
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

router.put('/:id', (req,res) => {
    console.log("in auth put");
    res.redirect('/shareholders');
})

router.get('/logout', isLoggedIn, function(req,res){
    req.logout();
    res.redirect('/');
})

module.exports = router;