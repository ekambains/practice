import { Client } from 'pg';

const client = new Client({
    user: 'ekam',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'practiceDB',
});

try {
    await client.connect();
    const res = await client.query('SELECT * FROM xyz');

    console.log(res.rows);
} catch (error) {
    console.error(error);
} finally {
    await client.end();
}