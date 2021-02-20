const client = require("../db");

exports.createUser = async (username, password, locations, role = "user") => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("users").insertOne({
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

exports.getOneUser = async (username, query = {}) => {};

exports.getAllUsers = async () => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("users").find({}).toArray();
  return r;
};
