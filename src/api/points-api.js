import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const pointsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const points = db.pointStore.getAllPoints();
      return points;
    },
  },
  findByCategory: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const points = await db.pointStore.getPointsByCategory(request.params.id);
      return points;
    },
  },

  addPoint: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.findById(request.params.id);
      if (!category) {
        return Boom.notFound("No Category with this Id");
      }
      const point = await db.pointStore.addPoint(
        request.payload.name,
        request.payload.zipCode,
        request.auth.credentials,
        category
      );
      return point;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.pointStore.deleteAll();
      return { success: true };
    },
  },
};