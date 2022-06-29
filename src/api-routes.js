import { userApi } from "./api/users-api.js";
import { pointsApi } from "./api/points-api.js";
import { categoriesApi } from "./api/categories-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/deleteuser/{id}", config: userApi.deleteOne },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/points", config: pointsApi.findAll },
  { method: "GET", path: "/api/categories/{id}/points", config: pointsApi.findByCategory },
  { method: "POST", path: "/api/categories/{id}/points", config: pointsApi.addPoint },
  { method: "DELETE", path: "/api/points", config: pointsApi.deleteAll },

  { method: "GET", path: "/api/categories", config: categoriesApi.find },
  { method: "GET", path: "/api/categories/{id}", config: categoriesApi.findOne },
  { method: "POST", path: "/api/categories", config: categoriesApi.create },
  { method: "DELETE", path: "/api/categories/{id}", config: categoriesApi.deleteOne },
  { method: "DELETE", path: "/api/categories", config: categoriesApi.deleteAll },

];