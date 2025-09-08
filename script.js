import mongoose from "mongoose";
import { User } from "./User.js";

mongoose
    .connect("mongodb://localhost/testdb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));

async function run() {
    try {
        const users = await User.findById("68be8f2e7dd50d7344cd7eae").populate(
            "bestFriend"
        );
        console.log(users);
    } catch (err) {
        console.log(err);
    }
}

run();
