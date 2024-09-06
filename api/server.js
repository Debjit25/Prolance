import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import {gigRoute} from "./routes/gig.route.js";
import {orderRoute} from "./routes/order.route.js";
import {conversationRoute} from "./routes/conversation.route.js";
import {messageRoute} from "./routes/message.route.js";
import {reviewRoute} from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";




const app = express();
app.use(express.json());
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


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);


app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
}) 