import { db } from "../models/db.js";

export const placemarkController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        const categories = await db.categoryStore.getAllCategories();
        return h.view("Discover", { title: "Discover", user: loggedInUser, categories: categories });
      },
    },
    report: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        const points = await db.pointStore.getAllPoints();
        return h.view("Report", {
          title: "All destinations",
          user: loggedInUser,
          points: points,
        });
      },
    },
    addnew: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          const category = await db.categoryStore.findByName(request.payload.category);
          await db.pointStore.addPoint(request.payload.name, request.payload.zipCode, loggedInUser._id, category._id);
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };