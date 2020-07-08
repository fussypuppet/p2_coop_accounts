// write a function we are going to use as middleware
module.exports = function(req,res,next){
    console.log(`🔳🔳🔳🔳🔳🔳🔳 isLoggedIn user object: ${JSON.stringify(req.user)}`);
    console.log(`req path: ${JSON.stringify(req.path)}, req route: ${JSON.stringify(req.route)}, req baseUrl: ${JSON.stringify(req.baseUrl)}`);
    if (!req.user){
        req.flash('error', "you must be logged in to view this page");
        res.redirect('/auth/login');
    } else {
        if (!req.user.isAdministrator && ((req.baseUrl + req.path) != (`/shareholders/${req.user.shareholderId}`))){
            req.flash('error', "you are not authorized to view that page");
            res.redirect(`/shareholders/${req.user.shareholderId}`);
        }
        next();
    }
}

// check and see if we have a user variable set
// if so, allow app to carry on
// if not, will let user know they have to be logged in to access
// redirect user back to /auth/login
