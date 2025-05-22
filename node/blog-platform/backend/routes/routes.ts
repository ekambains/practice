import express from "express"
import { deleteArticle, getArticles, insertArticle, updateArticle } from "../database/db";

const router = express.Router();

router.get("/", getArticles);

router.post("/", insertArticle);

router.put("/:id", updateArticle);

router.delete("/:id", deleteArticle);

export default router;