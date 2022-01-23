const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.render("index", {

  });
});

let port = 3000 || process.env.PORT;

app.listen(port, function() {
  console.log("Server is running on port " + port + ".");
});
