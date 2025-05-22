"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../database/db");
const router = express_1.default.Router();
router.get("/", db_1.getArticles);
router.post("/", db_1.insertArticle);
router.put("/:id", db_1.updateArticle);
router.delete("/:id", db_1.deleteArticle);
exports.default = router;
