const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pwd:{
        type: String,
        required: true
    },
    cpwd:{
        type: String,
        required: true
    }
});
const Registration = module.exports = mongoose.model('Registration',RegistrationSchema);