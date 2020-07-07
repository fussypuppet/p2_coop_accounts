const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const db = require('../models');
const flash = require('connect-flash');
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
        //if no user is authenticated
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

router.put('/', function(req,res,next) {
    console.log("🟣🟣🟣🟣🟣in auth put");
    passport.authenticate('local', function(error, user, info){
        if (!user){
            console.log("🟣🟣🟣🟣🟣No User");
            return res.redirect('/auth/edit');
        } else if (error) {
            console.log("🟣🟣🟣🟣🟣🟣Authentication error in user update route");
        } else {
            console.log("🟣🟣🟣🟣🟣Authentication successful.  About to update user");
            db.user.update({
                name: req.body.name,
                password: req.body.newPassword
            }, {
                where: {
                    email: req.body.email
                }
            })
            .then(updateResult => {
                console.log("🟣🟣🟣🟣🟣User update successful.  About to redirect to login page");
                return res.redirect('/auth/logout');
            })
            .catch(error => {
                console.log("🟣🟣🟣🟣🟣User update error");
            })
        }
        console.log("🟣🟣🟣🟣🟣Passport authenticate if statement finished without redirecting anywhere");
    })(req,res,next);
    console.log("🟣🟣🟣🟣🟣 passport.authenticate finished");
})

router.put('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome to our app!',
    failureFlash: 'Invalid username or password'
}));

router.get('/logout', isLoggedIn, function(req,res){
    req.logout();
    res.redirect('/');
})

module.exports = router;