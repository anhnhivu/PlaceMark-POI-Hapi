import { Point } from "./point.js";

export const pointMongoStore = {
    async getAllPoints() {
        const points = await Point.find().populate("addedBy").populate("category").lean();
        return points;
    },

    async getPointsByCategory(id) {
        const points = await Point.find({ category: id });
        return points;
    },

    async getPointById(id) {
        const point = await Point.findOne({ _id: id }).populate("category").lean();
        return point;
    },

    async addPoint(name, zipCode, city, addedBy, category, lat, lng, street, houseNumber, img, description) {
        const newPoint = new Point({
            name,
            zipCode,
            city,
            addedBy: addedBy._id,
            category: category._id,
            lat,
            lng,
            street,
            houseNumber,
            img,
            description
        });
        await newPoint.save();
        return newPoint;
    },
    
    async deleteAll() {
        await Point.deleteMany({});
    },
};