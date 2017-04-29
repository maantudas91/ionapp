const _ = require('lodash');
const bcrypt = require('bcrypt');
const usermodel  = require("./../models/user-model");

var getUsers = (req,res) =>{
    
    usermodel.User.find({}).then(users=>{
        return res.status(200).json({ users: users, message: "users found" });
    }).catch(e=> return res.status(401).json({ error: e }););
};



module.exports = {
    getUsers
};
