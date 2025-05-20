import { Client } from 'pg';

export const client = new Client({
    user: 'ekam',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'practiceDB',
});