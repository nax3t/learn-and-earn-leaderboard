// Require dependencies ====================================

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/users');
// const Week = require('./models/weeks');

// Require Routes ==========================================

const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const weeksRoutes = require('./routes/weeks');

const app = express();

// Connect with the database ===============================
mongoose.connect('mongodb://localhost:27017/leaderboard', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to the database!');
});

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// view engine setup =======================================

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Passport and Sessions =========================

app.use(
  session({
    secret: 'LEARN & EARN leaderboard',
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mount Routes ============================================

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/weeks', weeksRoutes);

// catch 404 and forward to error handler ==================

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler ===========================================

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  req.user
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// seed the database ========================================

// Week.create({
// 	winners: [ 
// 		{name: "Louli", place: "1st"},
// 		{name: "Devendra", place: "2nd"},
// 		{name: "Lucas", place: "3rd"}
// 	]}, () => {
// 	console.log('week created!');
// });

// Admin.create({
// 	isAdmin: true
// }, () => {
// 	console.log('admin created!')
// });

module.exports = app;
