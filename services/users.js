const model = require("../models/users-model");

exports.createUser = async (username, password, locations, role) => {
  const r = await model.createUser(username, password, locations, role);
  return r;
};

exports.getUsers = async () => {
  const r = await model.getAllUsers();
  return r;
};
