const jwt = require("jsonwebtoken");
const jconf = require("./config").jwt;

module.exports = async (payload) => {
  const token = await jwt.sign(payload, jconf.secret, {
    expiresIn: jconf.expTime,
  });
  return token;
};
