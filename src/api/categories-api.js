import Boom from "@hapi/boom";
import { Category } from "../models/mongo/category.js";
import { IdSpec, CategorySpec, CategoriesArray } from "./joi-schemas.js";

export const categoriesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const categories = await Category.find();
      return categories;
    },
    tags: ["api"],
    description: "Get all categories",
    notes: "Returns details of all categories",
    response: { schema: CategoriesArray },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const category = await Category.findOne({ _id: request.params.id });
        if (!category) {
          return Boom.notFound("Bad Id - No Category with this Id");
        }
        return category;
      } catch (err) {
        return Boom.notFound("Bad Id - No Category with this Id");
      }
    },
    tags: ["api"],
    description: "Get one category",
    notes: "Returns detail of one category",
    validate: {
      params: {
          id: IdSpec
      }
    },
    response: { schema: CategorySpec },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newCategory = new Category(request.payload);
      const category = await newCategory.save();
      if (category) {
        return h.response(category).code(201);
      }
      return Boom.badImplementation("Error creating Category");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Category.remove({});
      return { success: true };
    },
    tags: ["api"],
    description: "Delete all categories",
    notes: "Delete all categories",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Category.deleteOne({ _id: request.params.id });
      if (response.deletedCount === 1) {
        return { success: true };
      }
      return Boom.notFound("Id not found");
    },
  },
};