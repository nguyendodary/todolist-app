import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTIONSTRING);
        console.log("Connect DB success!")
    } catch (error) {
        console.error("Connect DB fail: ", error);
        process.exit(1);
    }
}