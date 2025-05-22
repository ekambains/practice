import express, { Request, Response } from "express";
import router from "./routes/routes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/articles", router);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});