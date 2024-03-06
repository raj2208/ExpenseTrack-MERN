const mongoose = require("mongoose");

//schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true } //when you create the record...it's date also gets captured
);

//export
const userModel = mongoose.model("users", userSchema); //users is the table name for userSchema
module.exports = userModel; //userModel is just a model variable
