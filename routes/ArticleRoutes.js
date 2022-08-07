import express from "express";
import { GetAllArticle, GetArticleByID, CreateArticle, UpdateArticle, DeleteArticle } from "../app/controllers/ArticleController.js"

const router = express.Router()

router.get('/', GetAllArticle)
router.get('/:id', GetArticleByID)
router.post('/', CreateArticle)
router.put('/:id', UpdateArticle)
router.delete('/:id', DeleteArticle)

export default router;

