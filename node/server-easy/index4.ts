import { client } from "./database/db.js";

async function getUsers() {
    try {
        await client.connect();
        const res = await client.query(`SELECT * FROM users`);
        console.log(res.rows);

    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
}

getUsers();
