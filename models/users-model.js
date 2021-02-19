const db = require("../db");

exports.createUser = async (username, password, locations, role = "user") => {
  const r = await db.users.insert({
    username,
    password,
    locations,
    role,
  });
  return r;
};

exports.deleteUser = async (username) => {
  // const r = await db.users.remove
};

exports.updateUser = async (username, password, locations, role) => {};

exports.getOneUser = async (username) => {};

exports.getAllUsers = async () => {
  const r = await db.users.find();
};
