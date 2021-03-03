const supertest = require("supertest");
const app = require("../../../app");
const mongo = require("../../../db");
const jwt = require("../../../utils/jwt");

describe("POST /api/users", () => {
  let req;
  let admintoken;
  beforeAll(async () => {
    admintoken = jwt({
      username: "Mock",
      locations: [1, 2],
      role: "admin",
    });
    const usertoken = jwt({
      username: "Mock",
      locations: [1, 2],
      role: "user",
    });
    await mongo.connect();
    req = supertest(app.callback());
  });

  afterAll(async () => {
    await mongo.close();
  });
  it("no auth should be unauthorized", async () => {
    const res = await req.post("/api/users");
    expect(res.statusCode).toBe(401);
  });

  it("should throw validation error", async () => {
    const res = await req
      .post("/api/users")
      .set("Authorization", `Bearer ${admintoken}`);
    expect(res.statusCode).toBe(500);
  });
});
