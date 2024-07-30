
'use strict';

const {User} = require('../models/userModel')
const passwordCrypto = require("../helpers/passwordEncrpt");

module.exports.auth = {
    login: async (req, res) => {

        const {email, password} = req.body 

        if (email && password) {
            
            const user = await User.findOne({email})

            if (user) {
                
                if(user.password  == passwordCrypto(password)) {

                    res.send({
                        message: 'login is successfull'
                    })

                } else {
                    res.errorStatusCode = 401;
                    throw new Error("wrong password!!!:(");
                }

            } else {
                res.errorStatusCode = 401;
                throw new Error("couldt find this user");
            }

        } else {
            res.errorStatusCode = 401
            throw new Error ('email and password are required')
        }

    },

    logout: async (req, res) => {

    }
}