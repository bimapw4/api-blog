import express from "express";
import {CreateComment, GetCommentsByArticleID, UpdateComment, DeleteComment} from "../app/controllers/CommentController.js";

const router = express.Router()

router.post("/", CreateComment)
router.get("/article/:articleID", GetCommentsByArticleID)
router.put("/:id", UpdateComment)
router.delete("/:id", DeleteComment)

export default router;