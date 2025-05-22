import { Request, Response } from 'express';
import { Pool } from 'pg';
import { Article } from '../models/Article';

const pool = new Pool( {
    user: 'ekam',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'practiceDB',
} );

export const getArticles = async (req: Request, res: Response) => {
    try {
        const articles = await pool.query(`SELECT * FROM blogs`);

        res.status(201).json({ success: true, data: articles.rows});
    } catch (error) {
        console.error(`Error in getArticles: ${error}`);
        res.status(501).json({ success: false, message: "Server Error"});
    }
}

export const deleteArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await pool.query(`DELETE FROM blogs WHERE id=$1`, [id]);
        res.status(201).json({ success: true, message: "Article Deleted Successfully"});
    } catch (error) {
        console.error(`Error in deleteArticles: ${error}`);
        res.status(501).json({ success: false, message: "Server Error"});
    }
}

export const updateArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const article: Article = req.body;

        await pool.query(`UPDATE blogs
                            SET title=$1,
                                content=$2,
                                author=$3,
                                updatedAt=NOW()
                            WHERE id=$4`, [article.title, article.content, article.author, id]);
        res.status(201).json({ success: true, message: "Article Updated"});
    } catch (error) {
        console.error(`Error in updateArticle: ${error}`);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}

export const insertArticle = async (req: Request, res: Response) => {
    try {
        const article: Article = req.body;

        await pool.query(`INSERT INTO blogs(title, content, author, createdAt, updatedAt)
                            VALUES($1, $2, $3, NOW(), NOW())`, [article.title, article.content, article.author]);
        res.status(201).json({ success: true, message: "Article Created"});
    } catch (error) {
        console.error(`Error in insertArticle: ${error}`);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}