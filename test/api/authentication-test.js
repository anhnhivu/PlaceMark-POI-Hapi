import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { sam } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    placemarkService.clearAuth();
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(sam);
    await placemarkService.deleteAllUsers();
  });

  teardown(async () => {});

  test("Authenticate", async () => {
    const returnedUser = await placemarkService.createUser(sam);
    const response = await placemarkService.authenticate(sam);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("Verify Token", async () => {
    const returnedUser = await placemarkService.createUser(sam);
    const response = await placemarkService.authenticate(sam);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("Check Unauthorized Access", async () => {
    placemarkService.clearAuth();
    try {
      await placemarkService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});