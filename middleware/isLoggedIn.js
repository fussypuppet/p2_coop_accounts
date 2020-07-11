
module.exports = function(req,res,next){
    if (!req.user){ // check to make sure user is logged in.  If not, redirect to login page
        req.flash('error', "you must be logged in to view this page");
        res.redirect('/auth/login');
       // if user is logged in, make sure they're authorized to view that page.  If not, redirect to their own account page
    } else if (!req.user.isAdministrator){
        if (((req.baseUrl + req.path) != (`/shareholders/${req.user.shareholderId}`)) && (req.baseUrl != "/auth")){  // auth routes do not call isLoggedIn, but this middleware is sometimes activated when redirected there
            req.flash('error', "you are not authorized to view that page");
            res.redirect(`/shareholders/${req.user.shareholderId}`);
        } else {
            next();
        }
    } else {
        next();
    }
}
