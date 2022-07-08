const authService = require("./auth.service");

const loginController = (req, res) => {
  res.send({message: "login ok"});
};

module.exports = {
  loginController,
};
