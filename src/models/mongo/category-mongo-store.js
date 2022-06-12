import { Category } from "./category.js";

export const categoryMongoStore = {
  async getAllCategories() {
    const categories = await Category.find().lean();
    return categories;
  },

  async findById(id) {
    const category = await Category.findOne({ _id: id }).lean();
    return category;
  },

  async findByName(catename) {
    const category = await Category.findOne({ name: catename }).lean();
    return category;
  },
};