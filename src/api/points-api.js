import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PointDetailAddSpec, PointDetailSpec, PointsArray } from "./joi-schemas.js";

export const pointsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const points = db.pointStore.getAllPoints();
      return points;
    },
    tags: ["api"],
    description: "Get all points",
    notes: "Returns details of all points",
    response: { schema: PointsArray },
  },

  findOnePoint: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const point = db.pointStore.getPointById(request.params.id);
      return point;
    },
    tags: ["api"],
    description: "Get one point by Id",
    notes: "Returns details of one point",
    validate: {
      params: {
          id: IdSpec
      }
    },
    response: { schema: PointDetailSpec }
  },

  findByCategory: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const points = await db.pointStore.getPointsByCategory(request.params.id);
      return points;
    },
    tags: ["api"],
    description: "Get all points by category",
    notes: "Returns details of all points fitler by category",
    validate: {
      params: {
          id: IdSpec
      }
    },
    response: { schema: PointDetailSpec }
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
        request.payload.city,
        request.auth.credentials,
        category,
        request.payload.lat,
        request.payload.lng,
        request.payload.street,
        request.payload.houseNumber,
        request.payload.img,
        request.payload.description,
      );
      return point;
    },
    tags: ["api"],
    description: "Create a point",
    notes: "Create a new POI",
    validate: {
      payload: {
          point: PointDetailAddSpec
      }
    },
    response: { schema: PointDetailSpec }
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.pointStore.deleteAll();
      return { success: true };
    },
    tags: ["api"],
    description: "Delete all points",
    notes: "Delete all points",
  },
};