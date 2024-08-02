
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

                    
                    req.session._id = user._id
                    req.session.password = user.password

                    // cookie

                    if(req.body?.remindMe == true) {
                        req.session.remindMe = true
                        req.sessionOptions.maxAge = 1000 * 10 
                    }
                    
                    res.status(200).send({
                        error: false,
                        message: 'login: ok',
                        user
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

        // cookie/session delete

        req.session = null

        res.status(200).send({
            error:false,
            message:'logout: ok'
        })

    }
}