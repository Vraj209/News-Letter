const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function (req, res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;
    console.log(firstName, lastName, email)
})
app.listen(3000, () => {
    console.log("Server is running on 3000 port")
});

// API Key
// 0c49943c320cf0ab580967f04e36faa5-us21