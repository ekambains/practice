"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertArticle = exports.updateArticle = exports.deleteArticle = exports.getArticles = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'ekam',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'practiceDB',
});
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield pool.query(`SELECT * FROM blogs`);
        res.status(201).json({ success: true, data: articles.rows });
    }
    catch (error) {
        console.error(`Error in getArticles: ${error}`);
        res.status(501).json({ success: false, message: "Server Error" });
    }
});
exports.getArticles = getArticles;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield pool.query(`DELETE FROM blogs WHERE id=$1`, [id]);
        res.status(201).json({ success: true, message: "Article Deleted Successfully" });
    }
    catch (error) {
        console.error(`Error in deleteArticles: ${error}`);
        res.status(501).json({ success: false, message: "Server Error" });
    }
});
exports.deleteArticle = deleteArticle;
const updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const article = req.body;
        yield pool.query(`UPDATE blogs
                            SET title=$1,
                                content=$2,
                                author=$3,
                                updatedAt=NOW()
                            WHERE id=$4`, [article.title, article.content, article.author, id]);
        res.status(201).json({ success: true, message: "Article Updated" });
    }
    catch (error) {
        console.error(`Error in updateArticle: ${error}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.updateArticle = updateArticle;
const insertArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = req.body;
        yield pool.query(`INSERT INTO blogs(title, content, author, createdAt, updatedAt)
                            VALUES($1, $2, $3, NOW(), NOW())`, [article.title, article.content, article.author]);
        res.status(201).json({ success: true, message: "Article Created" });
    }
    catch (error) {
        console.error(`Error in insertArticle: ${error}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.insertArticle = insertArticle;
