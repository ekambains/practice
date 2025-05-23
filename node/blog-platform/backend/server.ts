import express, { Request, Response } from "express";
import router from "./routes/routes";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/articles", router);

app.use(express.static(path.join(__dirname, '../frontend')));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});