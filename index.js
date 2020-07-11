require('dotenv').config();
const Express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const helmet = require('helmet');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const db = require('./models');
const methodOverride = require('method-override');


const isLoggedIn = require('./middleware/isLoggedIn');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


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

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req,res,next){
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
})

app.get('/', (req, res) => {
    res.redirect('/auth/login');
})


//include outside controllers
app.use('/auth', require('./controllers/auth'));
app.use('/shareholders', require('./controllers/shareholders'));
app.use('/dues', require('./controllers/dues'));
app.use('/transactions', require('./controllers/transactions'));

app.listen(process.env.PORT || 3000, function() {
    console.log(`Listening to port ${process.env.PORT}`);
})