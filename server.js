const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require("path");
const PORT = process.env.PORT || 5000;

const api = require("./routes/api");

dotenv.config();


mongoose.connect(
    process.env.DB_CONNECTION,{
        useUnifiedTopology: true, useNewUrlParser: true 
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});


app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));



app.use("/api", api);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log("Server running on " + PORT);
})

