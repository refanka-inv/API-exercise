const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

//register - encrypt
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

//login
const checkPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { hashPassword, checkPassword };
