const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://chatadmin:chatadmin@ds145039.mlab.com:45039/chatdb');


var userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim :true
    },
    lastName:{
        type: String,
        required: true,
        trim :true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default : null
    },
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = { User };
