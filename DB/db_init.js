const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const ConnectDB = () => {
  mongoose
    .connect(process.env.DATABASE_LINK)
    .then((result) => {
      console.log("db connection established");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = ConnectDB;
