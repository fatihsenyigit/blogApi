"use strict";

const mongoose = require("mongoose");

// const crypto = require("node:crypto");

// // parametres pbkdf2

// const keyCode = process.env.SECRET_KEY || 'wertyu45'; // sifreleme anahtari
// const loopCount = 10000; // dongu sayisi, kac defa sifrelesin
// const charCount = 32;
// // cikti olarak kac karakter olsun, kac karakter istiyorsak onun yarisi yazilir. buffer type dan dolayi. ramde boyle saklandigi icin
// const encType = "sha512"; // sifreleme algorithmasi

// const passwordCrypto = function (password) {
  
//   return crypto
//     .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//     .toString("hex");
// };

const passwordCrypto = require('../helpers/passwordEncrpt')



const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      // validate: (email) => {
      //   if(email.includes('@') && email.includes('.')) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
      // validate: (email)=> (email.includes('@')&& email.includes('.'))
      validate: [
        (email)=> (email.includes('@')&& email.includes('.'))
        ,
        'hatali mail addresi'
      ]
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => {
        if(password.length >= 8) {
          return passwordCrypto(password)
        } else {
          return 'wrong'
        }
      },
      validate: (password) => {
      if (password == 'wrong') {
        return false
      } else {
        return true
      }
    }
    },
    
    firstName: String,
    lastName: String,
  },
  {
    collection: "users",
    timestamps: true,
  },
);

// module.exports = mongoose.model('User', UserSchema) ==> direct

module.exports.User = mongoose.model("User", UserSchema);
