const model = require("../models/storage-model");

exports.updateStorage = async (date, location, inventory, storage) => {
  const r = await model.upsertStorage(date, location, inventory, storage);
  return r;
};

exports.getStorage = async (date, location, storage) => {
  const r = await model.getStorage(date, location, storage);
  return r;
};

exports.getRecent = async (location, storage) => {
  const r = await model.getRecent(location, storage);
  return r;
};
