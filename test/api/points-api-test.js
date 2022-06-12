import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { sam, samCredentials, testCategories, testPoints } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Points API tests", () => {
  setup(async () => {
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(sam);
    await placemarkService.deleteAllUsers();
    await placemarkService.createUser(sam);
    await placemarkService.authenticate(sam);
  });
  teardown(async () => {
    await placemarkService.deleteAllUsers();
  });

  test("Add a Point", async () => {
    const returnedCategory = await placemarkService.createCategory(testCategories[0]);
    await placemarkService.addPoint(returnedCategory._id, testPoints[0]);
    const returnedPoints = await placemarkService.getPoints(returnedCategory._id);
    assert.equal(returnedPoints.length, 1);
    assertSubset(returnedPoints[0], testPoints[0]);
  });
});