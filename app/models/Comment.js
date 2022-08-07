import mongoose from "mongoose";

const Comment = mongoose.Schema({
    articleID:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    }
})

export default mongoose.model("Comment", Comment)