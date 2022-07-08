const User = require("../users/user");
const jwt = require("jsonwebtoken");

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = {
  loginService,
  generateToken,
};
