const express = require("express");
const app = express();



app.use(express.json());
app.use('/static', express.static('public'))

app.listen(5000, () => {console.log("server running on 5000")});  