import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    img: {
        type: String,
    },
    savedPosts: {
        type: [String],
        default: [],

    },
}, { timestamps: true })

export default mongoose.model("User", userSchema)