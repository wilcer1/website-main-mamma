const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const api = require("./api");

dotenv.config();


mongoose.connect(
    process.env.DB_CONNECT,{
        useUnifiedTopology: true, useNewUrlParser: true 
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});

app.use(express.json());
app.use("/api", api);

app.listen(5000,'192.168.1.222' || 'localhost', () => {console.log("server running on 5000")});  