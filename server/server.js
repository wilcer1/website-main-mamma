const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json( {"hello": ["hi1", "hi2"]} );
});

app.listen(5000, () => {console.log("server running on 5000")});