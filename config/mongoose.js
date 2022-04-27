//require library
const mongoose = require('mongoose');

//connext to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//acquire the connection to check it is succesful or not
const db=mongoose.connection;

//if there is error handle error
db.on('error',console.error.bind(console,"connextion error"));

//if succes then hurray running
db.once('open', function(){
    console.log("bsdk connected")
})