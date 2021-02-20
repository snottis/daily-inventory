const bcrypt = require("bcrypt");
const bconf = require("../utils/config").bcrypt;
const model = require("../models/users-model");

/**
 * Hash password and add user
 * @param {string} username
 * @param {string} password
 * @param {number[]} locations
 * @param {string} role
 */
exports.createUser = async (username, password, locations, role) => {
  const hashword = await bcrypt.hash(password, bconf.rounds);
  const r = await model.createUser(username, hashword, locations, role);
  return r;
};

/**
 * Get all users
 */
exports.getUsers = async () => {
  const r = await model.getAllUsers();
  return r;
};
