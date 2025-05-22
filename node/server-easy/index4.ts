import { client } from "./database/db.js";

async function getUsers() {
    try {
        await client.connect();
        const res = await client.query(`CREATE TABLE IF NOT EXISTS blogs (
                                        id SERIAL PRIMARY KEY,
                                        title TEXT NOT NULL,
                                        content TEXT NOT NULL,
                                        author TEXT NOT NULL,
                                        createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                                        updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
                                        )`);
        console.log(res.rows);

    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
}

getUsers();
