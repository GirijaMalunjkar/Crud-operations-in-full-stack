const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const route = require('./routes/routes');
const { log } = require('console');

mongoose.connect('mongodb://0.0.0.0:27017');

mongoose.connection.on('connected',()=>{
    console.log('Conencted to Database mongodb @ 27017');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(' Not Connected:' +err);
    }
});

const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route)

app.get('/',(req,res)=>{
    res.send('GSM')
});

app.listen(port, () => {
    console.log('Server started at port:'+port);
});