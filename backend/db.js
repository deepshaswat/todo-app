/*
 */
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:password1234@cluster0.0z7uh2p.mongodb.net/user_app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
