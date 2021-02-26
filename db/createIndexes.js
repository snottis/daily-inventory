const client = require(".");

/**
 * Create indexes to MongoDB collections
 */
module.exports = async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("users").createIndex({ username: 1 }, { unique: true });
  await db.collection("products").createIndex({ gtin: 1 }, { unique: true });
};
