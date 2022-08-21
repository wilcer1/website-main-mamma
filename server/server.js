const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const api = require("./api");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to db');
});

app.use("/api", api);

app.listen(5000, () => {console.log("server running on 5000")});  