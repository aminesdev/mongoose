import mongoose from "mongoose";
import { User } from "./User.js";

mongoose
    .connect("mongodb://localhost/testdb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));

async function run() {
    const newUser = new User({ name: "Amine", age: 20 });
    await newUser.save();
    console.log(newUser);
    newUser.name = "Mohamed";
    await newUser.save();
    console.log(newUser)

}

run();