var express = require("express");
var bodyParser = require("body-parser");
// var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');


var itemCtrl = require('./controllers/itemCtrl.js')
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

app.post('/item',itemCtrl.create);
app.get('/item',itemCtrl.read);
app.put('/item/:id',itemCtrl.update);
app.delete('/item/:id',itemCtrl.delete);



mongoose.connect(
  "mongodb://localhost: 27017/communityDb");
  //process.env.MONGOLAB_URI);
mongoose.connection.once('open', function(){
    console.log("connected to mongo on 27017");
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port 80 OR 3000');
});
