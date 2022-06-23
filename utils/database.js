// utils/database.js

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mongo:4ywlaD8EaE7CF5XP@cluster0.kin5irn.mongodb.net/appDataBase?retryWrites=true&w=majority");
        console.log("Success: Connected to MongoDB");
    } catch (error) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
};

export default connectDB;