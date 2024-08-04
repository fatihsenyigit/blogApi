"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// catch error from async
require("express-async-errors");

// const dbConnection = require('./src/dbConnection')
// dbConnection()
require("./src/dbConnection")();

// cookie and session
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY || "wertyu",
    maxAge: 100 * 60,
  }),
);

// middleware to check userId and passoword
app.use(require('./src/middlewares/userControl'))
// middleware for queryhandler
app.use(require('./src/middlewares/queryHandler'))

app.all("/", (req, res) => {
  res.send({
    session: req.session,
    message: "welcome to blog api",
  });
});

//routes
app.use("/blog", require("./src/routes/blogRouter"));
app.use("/user", require("./src/routes/userRouter"));
app.use("/auth", require("./src/routes/authRouter"));

//catch error
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("running: http://27.0.0.1:" + PORT));

// sync - once run
// require('./sync')()
