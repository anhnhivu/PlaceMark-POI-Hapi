import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";
import { pointMongoStore } from "./mongo/point-mongo-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  pointStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.categoryStore = categoryMongoStore;
        this.pointStore = pointMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};