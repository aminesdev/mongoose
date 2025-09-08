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
        validate: {
            validator: (v) => v % v,
            massage:props => `${props.value} is not an even number`
        },
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
    bestFriend: mongoose.Schema.Types.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

export const User = mongoose.model("User", userSchema);
