
'use strict'

const crypto = require("node:crypto");

// parametres pbkdf2

const keyCode = process.env.SECRET_KEY || "wertyu45"; // sifreleme anahtari
const loopCount = 10000; // dongu sayisi, kac defa sifrelesin
const charCount = 32;
// cikti olarak kac karakter olsun, kac karakter istiyorsak onun yarisi yazilir. buffer type dan dolayi. ramde boyle saklandigi icin
const encType = "sha512"; // sifreleme algorithmasi

module.exports = function (password) {
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
};