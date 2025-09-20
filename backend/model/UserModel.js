const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique email
  password: { type: String, required: true }, // will be hashed
  createdAt: { type: Date, default: Date.now }
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
