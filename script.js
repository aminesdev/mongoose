import mongoose from "mongoose";
import { User } from "./User.js";

mongoose
    .connect("mongodb://localhost/testdb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));

async function run() {
    try {
        const user = await User.findOne({ name: "Amine" });
        console.log(user.namedEmail);
    } catch (err) {
        console.log(err);
    }
}

run();
