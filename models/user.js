//------------------------------------------------------------------
//                      code added by Mayra
//------------------------------------------------------------------
const {Schema , model} = require ('mongoose');

const UserSchema = Schema({
 

    Name:{
        type: String,
        trim: true
    },

    Email:{
        type: String,
        trim:true
    },

    Password:{
        type: String,
        trim:true
    },

});

module.exports= model('User', UserSchema );