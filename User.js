import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    bestFriend: mongoose.Schema.Types.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

export const User = mongoose.model("User", userSchema);
