import mongoose from "mongoose";

const Article = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

export default mongoose.model("Article", Article)