const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
const path = require("path");
const PORT = 5000;

const api = require("./routes/api");

dotenv.config();

const credentials  = {
    key: fs.readFileSync("./localhost-key.pem"),
    cert: fs.readFileSync("./localhost.pem"),
  };


mongoose.connect(
    process.env.DB_CONNECT,{
        useUnifiedTopology: true, useNewUrlParser: true 
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});


app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));



app.use("/api", api);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

https
  .createServer(credentials, app)
    .listen(PORT, function () {
    console.log("running" + PORT);
  })
  

