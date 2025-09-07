import mongoose from "mongoose";
mongoose
    .connect("mongodb://localhost/testdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then("MongoDB connected")
    .catch((err) => console.log("Connection error:", err));
