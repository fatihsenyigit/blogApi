
'use strict'

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: true,
    },
    firstName: String,
    lastName: String


},{
    collection :'users',
    timestamps: true
})

// module.exports = mongoose.model('User', UserSchema) ==> direct

module.exports.User = mongoose.model("User", UserSchema);