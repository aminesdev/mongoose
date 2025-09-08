import mongoose from "mongoose";
import { User } from "./User.js";

mongoose
    .connect("mongodb://localhost/testdb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));

async function run() {
    try {
        const newUser = new User({
            name: "Amine",
            age: 21,
            email: "boughabaamine76@gmail.com",
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "Maint St",
            },
        });
        await newUser.save();
        console.log(newUser);
    } catch (err) {
        console.log(err)
    }
}

run();
