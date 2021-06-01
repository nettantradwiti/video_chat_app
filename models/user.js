const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  session: String,
  token: String,
});

module.exports = mongoose.model("User", Schema);
