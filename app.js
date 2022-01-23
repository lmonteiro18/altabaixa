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


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
