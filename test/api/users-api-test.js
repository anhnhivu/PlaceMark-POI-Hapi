import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { sam, samCredentials, testUsers } from "../fixtures.js";
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
    assert.equal(returnedUsers.length, 5);
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
});