import Comment from "../models/Comment.js";

export const CreateComment = async (req, res) => {
    const article = {
        articleID: req.body.articleID,
        comment: req.body.comment,
        username: req.body.username 
    }

    try {
        const savedComment = await Comment.create(article);
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const GetCommentsByArticleID = async (req, res) => {
    try {
        const comment = await Comment.find({articleID:req.params.articleID});
        res.json(comment)
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

export const UpdateComment = async (req, res) => {
    var comment = await Comment.findById(req.params.id)

    if (!comment) {
        res.status(404).json({message : "comment not found"})
    }

    try {
        var commentUpdate = await Comment.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(202).json(commentUpdate)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const DeleteComment = async (req, res) => {
    var comment = await Comment.findById(req.params.id)

    if (!comment) {
        res.status(404).json({message : "comment not found"})
    }

    try {
        var commentDelete = await Comment.deleteOne({_id : req.params.id})
        res.status(202).json(commentDelete)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}