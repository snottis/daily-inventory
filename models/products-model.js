const client = require("../db");

exports.createProduct = async (gtin, name, value, lotsize, hidden = false) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db
    .collection("products")
    .insertOne({ gtin, name, value, lotsize, hidden });
  return r;
};

exports.getProducts = async (query = {}) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("products").find(query);
  return r;
};

exports.updateProduct = async (gtin, name, value, lotsize, hidden) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db
    .collection("products")
    .updateOne(
      { gtin },
      { $set: { gtin, name, value, lotsize, hidden } },
      { upsert: true }
    );
};

exports.deleteProduct = async (gtin) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection("products").deleteOne({ gtin });
  return r;
};
