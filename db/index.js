const { MongoClient } = require("mongodb");

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:
${process.env.DB_PORT}/${process.env.DB_NAME}`;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = client;
