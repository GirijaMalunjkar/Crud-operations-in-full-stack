// Import Files
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//Middleware Cors and Body-parser
app.use(cors());
app.use(bodyparser.json());

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Port
const port = 3000;

app.listen(port, () => { 
    console.log('Server Start At Port :' +port)
});

//Route
const route = require('./routes/route');

app.use('/api',route)

//Testing server 
app.get('/',(req,res) => {
    res.send('Zingalbell');
});

//Connect to the mongoDB
mongoose.connect('mongodb://0.0.0.0:27017/contactList');

//On Connect
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @27017');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error in DB Connection : '+err);
    }
});