import Mongoose from "mongoose";

const { Schema } = Mongoose;

const pointSchema = new Schema({
    name: String,
    street: String,
    houseNumber: String,
    zipCode: String,
    city: String,
    country: String,
    lat: String,
    lng: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Point = Mongoose.model("Point", pointSchema);
