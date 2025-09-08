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
        // required: true,
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

userSchema.methods.sayHi = function () {
    console.log(`Hi, my name is ${this.name}`);
};

userSchema.statics.findByName = function (name) {
    return this.where({ name: new RegExp(name, "i") });
};

userSchema.query.byName = function (name) {
    return this.where({ name: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
    return `${this.name} <${this.age}>`;
});

userSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

userSchema.post("save", function (next) {
    this.sayHi();
    next();
});

export const User = mongoose.model("User", userSchema);
