import * as dotenv from "dotenv";
import Mongoose from "mongoose";

import * as seeder from "mais-mongoose-seeder";
import { seedData } from "./seed-data.js";

import { Category } from "./category.js";
import { User } from "./user.js";
import { Point } from "./point.js";

const seedLib = seeder.default;

async function seed() {
  const seedObj = seedLib(Mongoose);
  const dbData = await seedObj.seed(seedData, { dropDatabase: false, dropCollections: true });
  console.log(dbData);
}

export function connectMongo() {
  dotenv.config();

  Mongoose.connect(process.env.db);
  const db = Mongoose.connection;

  db.on("error", (err) => {
    console.log(`Database connection error: ${err}`);
  });

  db.on("disconnected", () => {
    console.log("Database disconnected");
  });

  db.once("open", function () {
    console.log(`Database connected to ${this.name} on ${this.host}`);
    seed();
  });
}