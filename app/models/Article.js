import mongoose from "mongoose";

const Article = mongoose.Schema({
    articleID:{
        type: String
    },
    title:{
        type: String
    },
    content:{
        type: String
    }
})

export default mongoose.model("Article", Article)