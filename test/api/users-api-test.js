import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { sam, samCredentials, testUsers, admin, adminCredentials } from "../fixtures.js";
import { db } from "../../src/models/db.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    placemarkService.clearAuth();
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(samCredentials);
    await placemarkService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await placemarkService.createUser(testUsers[i]);
    }
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(samCredentials);
  });
  
  teardown(async () => {});

  test("Create a new User", async () => {
    const newUser = await placemarkService.createUser(sam);
    assertSubset(sam, newUser);
    assert.isDefined(newUser._id);
  });

  test("Delete All Users", async () => {
    let returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 6);
    await placemarkService.deleteAllUsers();
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(samCredentials);
    returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("Get a User by ID", async () => {
    const returnedUser = await placemarkService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("Get a User by ID - ID not existed", async () => {
    try {
      const returnedUser = await placemarkService.getUser("2048");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("Get a User - deleted user", async () => {
    await placemarkService.deleteAllUsers();
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(samCredentials);
    try {
      const returnedUser = await placemarkService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
  test("Check Admin Account", async () => {
    // Check Later
    const newUser = await placemarkService.createUser(admin);
    const returnedUser = await placemarkService.getUser(newUser._id);
    assert(returnedUser.role === "admin");

    const response = await placemarkService.authenticate(adminCredentials);
    assert.equal(response.isAdmin, true);
  });

  test("Check User Account", async () => {
    // Check Later

    const newUser2 = await placemarkService.createUser(sam);
    const returnedUser2 = await placemarkService.getUser(newUser2._id);
    assert(returnedUser2.role === "user");

    const response2 = await placemarkService.authenticate(samCredentials);
    assert.equal(response2.isAdmin, false);
  });

  test("Delete One User", async () => {
    const returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 6);

    await placemarkService.deleteOneUser(users[0]._id);

    const currentUsers = await placemarkService.getAllUsers();
    assert.equal(currentUsers.length, 5);
  });

  test("Delete One User - ID not existed", async () => {
    const returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 6);

    await placemarkService.deleteOneUser(2048);

    const currentUsers = await placemarkService.getAllUsers();
    assert.equal(currentUsers.length, 6);
  });
});
