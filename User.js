import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: addressSchema,
});

export const User = mongoose.model("User", userSchema);
