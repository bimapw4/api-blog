import Article from "../models/Article.js";

export const GetAllArticle = async (req, res) => {
    try {
        const article = await Article.find();
        res.json(article)
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

export const GetArticleByID = async (req, res) => {
    try {
        const article = await Article.findOne({_id:req.params.id});
        res.json(article)
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

export const CreateArticle = async (req, res) => {
    const article = {
        title: req.body.title,
        content: req.body.content 
    }

    try {
        const savedArticle = await Article.create(article);
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const UpdateArticle = async (req, res) => {
    var article = await Article.findById(req.params.id)

    if (!article) {
        res.status(404).json({message : "data not found"})
    }

    try {
        var articleUpdate = await Article.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(202).json(articleUpdate)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const DeleteArticle = async (req, res) => {
    var article = await Article.findById(req.params.id)

    if (!article) {
        res.status(404).json({message : "data not found"})
    }

    try {
        const deleteArticle = await Article.deleteOne({_id: req.params.id})
        res.status(202).json(deleteArticle)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}