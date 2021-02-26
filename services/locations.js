const model = require("../models/locations-model");

exports.createLocation = async (id, name) => {
  const r = await model.createLocation(id, name);
  return r;
};

exports.deleteLocation = async (id) => {
  const r = await model.deleteLocation(id);
  return r;
};

exports.getLocations = async () => {
  const r = await model.getLocations();
  return r;
};

exports.updateLocation = async (id, name) => {
  const r = await model.updateLocation(id, name);
  return r;
};
