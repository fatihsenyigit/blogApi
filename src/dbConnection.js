
" use strict";

// mongoose npm i mongoose

const mongoose = require('mongoose');

const dbConnection = () => {

    mongoose
      .connect(process.env.MONGODB || "mongodb://localhost:27017/blogAPI")
      .then(() => console.log("** db connected **"))
      .catch(() => console.log("** db not connected **"));

}

module.exports = dbConnection