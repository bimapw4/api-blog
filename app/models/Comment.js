import mongoose from "mongoose";

const Comment = mongoose.Schema({
    commentID:{
        type: String
    },
    articleID:{
        type: String
    },
    comment:{
        type: String
    },
    username:{
        type: String
    }
})

export default mongoose.model("Comment", Comment)