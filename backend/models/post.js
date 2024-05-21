import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        appUserId : {
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
        username: {
            type: String
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        likes : {
            type: Map,
            of: Boolean
        },
        userImage : {
            type: String,
            required: true
        },
        comments : {
            type : Array,
            default: []
        }
    },
    {timestamps: true}
);
const Post = mongoose.model("Post", postSchema);

export default Post;