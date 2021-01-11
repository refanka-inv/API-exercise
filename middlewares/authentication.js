const { verifiedToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  const access_token = req.headers.access_token;
  console.log({ access_token });
  console.log("masuk middleware");

  verifiedToken(access_token);
};

module.exports = { authentication };
