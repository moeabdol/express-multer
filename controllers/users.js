const User = require("../models/user");

const index = (req, res) => {
  res.send("testing GET /users");
};

module.exports = {
  index
};
