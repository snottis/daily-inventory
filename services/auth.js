const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const { getOneUser } = require("../models/users-model");
const { AuthenticationError } = require("../utils/errors");

exports.login = async (username, password) => {
  const user = await getOneUser(username);
  if (!password || !user.password) {
    throw new AuthenticationError("Invalid username or password");
  } else {
    console.log(user);
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt({
        username: user.username,
        locations: user.locations,
        role: user.role,
      });
      return token;
    }
    throw new AuthenticationError("Invalid username or password");
  }
};
