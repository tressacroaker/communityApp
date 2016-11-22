var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var mongoose = require('mongoose');

var itemCtrl = require('./controllers/itemCtrl.js')

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));




app.post('/item',itemCtrl.create);
app.get('/item',itemCtrl.read);
app.put('/item/:id',itemCtrl.update);
app.delete('/item/:id',itemCtrl.delete);



mongoose.connect("mongodb://localhost: 27017/communityDb");
mongoose.connection.once('open', function(){
    console.log("connected to mongo on 27017");
});

app.listen(8000, function(){
    console.log('listening on port 8000');
});
