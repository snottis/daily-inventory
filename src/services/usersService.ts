import bcrypt from 'bcrypt';

import User from '../models/User';
import * as userTypes from '../types/userTypes';
import config from '../utils/config';

const createUser = async (
  username: string,
  passwordPlain: string,
  locations: Array<string>,
  role: userTypes.Role,
): Promise<any> => {
  const password = await bcrypt.hash(passwordPlain, Number(config.CryptRounds));
  const user = new User({ username, password, locations, role });
  let savedUser = await user.save();
  //savedUser = await savedUser.populate('locations').execPopulate();
  return savedUser;
};

const deleteUser = async (id: string): Promise<any> => {
  const user = await User.findById(id);
  if (!user) return null;
  await user.remove();
  return user;
};

const updateUser = async (
  id: string,
  username: string | null,
  passwordPlain: string | null,
  locations?: Array<string> | null,
  role?: userTypes.Role | null,
): Promise<any> => {
  let password = null;
  if (passwordPlain)
    password = await bcrypt.hash(passwordPlain, config.CryptRounds);
  let update = {} as userTypes.User;
  if (password) update.password = password;
  if (username) update.username = username;
  if (locations) update.locations = locations;
  if (role) update.role = role;
  const user = await User.findByIdAndUpdate(id, update, { new: true });
  return user;
};

const getAll = async (): Promise<any> => {
  const r = await User.find({});
  return r;
};

const getOne = async (id: String): Promise<any> => {
  const r = await User.findById(id, { password: 0 });
  return r;
};

const getHash = async (username: String): Promise<any> => {
  const user = await User.findOne({ username }, { password: 1 });
  return user;
};

export default { createUser, deleteUser, updateUser, getHash, getAll, getOne };
