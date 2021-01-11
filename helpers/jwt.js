const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const generateToken = (username) => {
  return jwt.sign({ username }, secret);
};

const verifiedToken = (token) => {
  jwt.verify(token, secret);
};

module.exports = { generateToken, verifiedToken };
