const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');

app.get("/api", (req, res) => {
    res.json( {"hello": ["hi1", "hi2"]} );
});

app.listen(5000, () => {console.log("server running on 5000")});