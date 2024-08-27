import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log("DB Connected");
    } // connecting the database with mongoose.
    catch (e) {
        console.error(e);
    }
}

app.listen(3301, () => {
    connect();
    console.log("Backend server is running!");
}) 