
module.exports = function(req,res,next){
    if (!req.user){ // check to make sure user is logged in.  If not, redirect to login page
        req.flash('error', "you must be logged in to view this page");
        res.redirect('/auth/login');
    } else { // if user is logged in, make sure they're authorized to view that page.  If not, redirect to their own account page
        if (!req.user.isAdministrator && ((req.baseUrl + req.path) != (`/shareholders/${req.user.shareholderId}`))){
            req.flash('error', "you are not authorized to view that page");
            res.redirect(`/shareholders/${req.user.shareholderId}`);
        }
        next();
    }
}
