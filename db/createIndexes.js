const client = require(".");

module.exports = async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("users").createIndex({ username: 1 }, { unique: true });
};
