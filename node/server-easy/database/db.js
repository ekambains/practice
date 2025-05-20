"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
exports.client = new pg_1.Client({
    user: 'ekam',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'practiceDB',
});