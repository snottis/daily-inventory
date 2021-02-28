const client = require("../db");

/**
 * Update daily inventory or insert if it doesn't exist
 * @param { Date } date
 * @param { Number } location
 * @param { Object } inventory
 * @param {String} storage
 */
exports.upsertShelf = async (date, location, inventory, storage) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db
    .collection(storage)
    .updateOne(
      { date },
      { $set: { date, location, inventory } },
      { upsert: true }
    );
  return r;
};

/**
 * Get {storage} inventory of specific date and location
 * @param {Date} date
 * @param {Number} location
 * @param {String} storage
 */
exports.getShelf = async (date, location, storage) => {
  const db = client.db(process.env.DB_NAME);
  const r = await db.collection(storage).find({ date, location });
  return r;
};
