module.exports = {
    ensureAuth: function (req,res,next) { //next calls the next pice of middleware when your done doing what your doing
        if(req.isAuthenticated()) { // if this person is authenticated, go on to next middleware
            return next()
        } else {
            res.redirect('/') //if not send them back to login
        }
    },
    ensureGuest: function(req, res, next) {
        if(req.isAuthenticated()) { //if they're authenticated we want to redirect to the dashboard and not the login page at any point
            res.redirect('/dashboard')
        } else {  //if they are not, authticated, go on to the next middleware. 
            return next()
        }
    },
}
