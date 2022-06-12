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

    async addPoint(name, zipCode, addedBy, category) {
        const newPoint = new Point({
            name,
            zipCode,
            addedBy: addedBy._id,
            category: category._id,
        });
        await newPoint.save();
        return newPoint;
    },
    
    async deleteAll() {
        await Point.deleteMany({});
    },
};