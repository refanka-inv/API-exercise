const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const token = (username) => {
  console.log({ secret });
  return jwt.sign({ username }, secret);
};

module.exports = { token };
