const { MongoClient } = require("mongodb");
const model = require("../../models/users-model");
const client = require("../../db");

describe("User model", () => {
  let db;
  let col;
  const mockAdmin = {
    username: "John",
    password: "123",
    locations: [1, 2, 3],
    role: "admin",
  };
  const mockUser = {
    username: "John",
    password: "123",
    locations: [1, 2, 3],
    role: "user",
  };

  beforeAll(async () => {
    process.env.DB_NAME = "test";
    await client.connect();
    db = client.db(process.env.DB_NAME);
    col = db.collection("users");
  });

  afterAll(async () => {
    await client.close();
  });

  beforeEach(async () => {
    await db.collection("users").deleteMany({});
  });
  describe("Create user", () => {
    it("should have role admin", async () => {
      await model.createUser(
        mockAdmin.username,
        mockAdmin.password,
        mockAdmin.locations,
        mockAdmin.role
      );

      const insertedUser = await client
        .db(process.env.DB_NAME)
        .collection("users")
        .findOne({ username: mockAdmin.username }, { projection: { _id: 0 } });
      expect(insertedUser).toEqual(mockAdmin);
    });
    it("should have role user", async () => {
      await model.createUser(
        mockUser.username,
        mockUser.password,
        mockUser.locations,
        mockUser.role
      );

      const insertedUser = await client
        .db(process.env.DB_NAME)
        .collection("users")
        .findOne({ username: mockUser.username }, { projection: { _id: 0 } });
      expect(insertedUser).toEqual(mockUser);
    });

    it("should have role user when role is not defined", async () => {
      await model.createUser(
        mockUser.username,
        mockUser.password,
        mockUser.locations
      );

      const insertedUser = await client
        .db(process.env.DB_NAME)
        .collection("users")
        .findOne({ username: mockUser.username }, { projection: { _id: 0 } });
      expect(insertedUser.role).toEqual("user");
    });
  });
  describe("Delete user", () => {
    it("should delete user", async () => {
      await col.insertOne({
        username: mockUser.username,
        password: mockUser.password,
        locations: mockUser.locations,
        role: mockUser.role,
      });
      await model.deleteUser(mockUser.username);
      const deletedUser = await col.findOne({ username: mockUser.username });
      expect(deletedUser).toEqual(null);
    });
    it("shouldnt delete user with wrong name", async () => {
      await col.insertOne({
        username: mockUser.username,
        password: mockUser.password,
        locations: mockUser.locations,
        role: mockUser.role,
      });
      await model.deleteUser("not an user");
      const deletedUser = await col.findOne({ username: mockUser.username });
      expect(deletedUser).toEqual(mockUser);
    });
  });
});
