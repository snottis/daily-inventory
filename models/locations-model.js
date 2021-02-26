const client = require("../db");

exports.createLocation = async (id, name) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("locations").insertOne(id, name);
  return r;
};

exports.deleteLocation = async (id) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("locations").deleteOne({ id });
  return r;
};

exports.getLocations = async () => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("locations").find({});
  return r;
};

exports.updateLocation = async (id, name) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db
    .collection("locations")
    .updateOne({ id }, { $set: { id, name } }, { upsert: true });
  return r;
};
