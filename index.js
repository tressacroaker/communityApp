var express = require("express");
var bodyParser = require("body-parser");
// var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');

var matchedCtrl = require('./controllers/matchedCtrl.js');
var fundraiserCtrl = require('./controllers/fundraiserCtrl.js');
var projectCtrl = require('./controllers/projectCtrl.js');
var userCtrl = require('./controllers/userCtrl');
var config = require('./config/config');

var app = express();

require('./config/passport.js')(passport);

//Passport and Bodyparser
app.use(session(config));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

//Post and Get
// app.post('/login', passport.authenticate('local-signup'), userCtrl.login);
app.post('/login', passport.authenticate('local',{
  successRedirect: '/home',
  failureRedirect: '/failedLogin',
  failureFlash: true
}));
app.get('/logout', userCtrl.logout);
app.get('/current', userCtrl.getMe);

app.post('/project',projectCtrl.create);
app.get('/project',projectCtrl.read);
app.put('/project/:id',projectCtrl.update);
app.delete('/project/:id',projectCtrl.delete);

app.post('/fundraiser',fundraiserCtrl.create);
app.get('/fundraiser',fundraiserCtrl.read);
app.put('/fundraiser/:id',fundraiserCtrl.update);
app.delete('/fundraiser/:id',fundraiserCtrl.delete);

app.post('/matched',matchedCtrl.create);
app.get('/matched',matchedCtrl.read);
app.put('/matched/:id',matchedCtrl.update);
app.delete('/matched/:id',matchedCtrl.delete);



mongoose.connect(
  "mongodb://localhost: 27017/communityDb");
  //process.env.MONGOLAB_URI);
mongoose.connection.once('open', function(){
    console.log("connected to mongo on 27017");
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port 80 OR 3000');
});
