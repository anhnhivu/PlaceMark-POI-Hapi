import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.placemarkUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllPoints() {
    const res = await axios.delete(`${this.placemarkUrl}/api/points`);
    return res.data;
  },

  async deleteOneUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/deleteuser/${id}`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async addPoint(id, point) {
    const response = await axios.post(`${this.placemarkUrl}/api/categories/${id}/points`, point);
    return response.data;
  },

  async getPoints(id) {
    const response = await axios.get(`${this.placemarkUrl}/api/categories/${id}/points`);
    return response.data;
  },

  async getPointById(id) {
    const response = await axios.get(`${this.placemarkUrl}/api/points/${id}`);
    return response.data;
  },

  async createCategory(newCategory) {
    const response = await axios.post(`${this.placemarkUrl}/api/categories`, newCategory);
    return response.data;
  },

};