const client = require("../db");

/**
 * Connect to database and add user
 * @param {string} username
 * @param {string} password
 * @param {number[]} locations
 * @param {string} role
 */
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

/**
 * Connect to database and delete user
 * @param {string} username
 */
exports.deleteUser = async (username) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("users").deleteOne({ username });
  return r;
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @param {number[]} locations
 * @param {string} role
 */
exports.updateUser = async (username, password, locations, role) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db
    .collection("users")
    .updateOne(
      { username },
      { $set: { password, locations, role } },
      { upsert: true }
    );
  return r;
};

exports.getOneUser = async (username, query = {}) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("users").findOne({ username });
  return r;
};

/**
 * Connect to database and get all users
 */
exports.getAllUsers = async () => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("users").find({}).toArray();
  return r;
};
