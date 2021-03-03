const app = require("./app");
const mongo = require("./db");
const createIndexing = require("./db/createIndexes");

async function start() {
  try {
    await mongo.connect();
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
    /* eslint-enable */
    return;
  } finally {
    console.log("Running mongo!");
    await createIndexing();
  }
  app.listen(process.env.NODE_PORT || 8000);
}
start();
