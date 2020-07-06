//configure doenv
require('dotenv').config();
//require express and setup an express app instance
const Express = require('express');
//require and set view engine use ejs
const ejsLayouts = require('express-ejs-layouts');
//require all middleware for app/authentication
//helmet, morgan, passport, and custom middleware, express-sessions, sequelize sessions, flash
const helmet = require('helmet');
const session = require('express-session');
const flash = require('flash');
const passport = require('./config/ppConfig');
const db = require('./models');
const methodOverride = require('method-override');

//add a link to our customer middleware for isLoggedIn
const SequelizeStore = require('connect-session-sequelize')(session.Store);


//set app to use false urlencoding
// set app to public directory for use
// set app ejslayouts for render

const app = Express();
app.use(Express.urlencoded({extended: false}));
app.use(Express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(require('morgan')('dev'));
app.use(helmet());
app.use(methodOverride('_method'));


const sessionStore = new SequelizeStore({
    db: db.sequelize,
    expiration: 1000 * 60 * 30 // 1000 milliseconds * 60 seconds * 30 minutes = 30 minutes
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true
}));

sessionStore.sync();

//TODO: initialize and link flash message and passport and session
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req,res,next){
    res.locals.alert = req.flash();
    res.locals.currentUser = req.user;
    next();
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/profile', function(req,res){  //2nd argument isLoggedIn?********
    res.render('profile', {test: "another test"});
})

//include outside controllers
app.use('/auth', require('./controllers/auth')); // use the auth.js file in the auth folder when dealing with auth routes)
app.use('/shareholders', require('./controllers/shareholders'));
app.use('/dues', require('./controllers/dues'));
app.use('/transactions', require('./controllers/transactions'));

app.listen(process.env.PORT || 3000, function() {
    console.log(`Listening to port ${process.env.PORT}`);
})