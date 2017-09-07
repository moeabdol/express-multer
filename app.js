const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.send("It works!");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening of port 3000");
  }
});
