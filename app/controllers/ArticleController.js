import Article from "../models/Article.js";
import { datetime } from "../../helper/helper.js";

export const GetAllArticle = async (req, res) => {

    var sorting = req.query.sort ?? "asc";
    var limit = req.query.limit ?? "5";
    var offset = parseInt(limit) * ((parseInt(req.query.page) ?? 1) - 1);

    var filter = req.query.title ? {title: req.query.title} : null;

    try {

        const article = await Article.find(filter).limit(5).sort({createAt: sorting}).skip(offset).limit(limit);

        res.json(article)
    } catch (error){
        res.status(400).json({message: error.message})
    }

    // res.json(filter)
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
        content: req.body.content,
        createAt: datetime(), 
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