import mongoose from "mongoose";

export const connectMONGODB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Mongodb database");
    } catch(error) {
        console.log("Error connecting to database", error);
    }
};