import mongoose from "mongoose";

const connectDB = async () => {
    // This listener should be set up before calling connect
    mongoose.connection.on('connected', () => {
        console.log("DB Connected Successfully");
    });

    mongoose.connection.on('error', (err) => {
        console.log("DB Connection Error: " + err);
    });

    try {
        // We use the URI from .env and specify the database name 'e-commerce'
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
}

export default connectDB;