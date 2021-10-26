var path = require("path");
var app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/", "home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/", "contact.html"));
});

app.use("*", (req, res) => {
    res.send("Invalid request...");
});

app.listen(5000);

console.log("The NodeJS server on port 5000 is now running....");