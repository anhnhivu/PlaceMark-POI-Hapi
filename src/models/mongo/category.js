import Mongoose from "mongoose";

const { Schema } = Mongoose;

const categorySchema = Schema({
    name: String,
    type: String,
    color: String,
});

export const Category = Mongoose.model("Category", categorySchema);