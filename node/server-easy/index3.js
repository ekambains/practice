const express = require("express");
const path = require("path");

const app = express();
const PORT =  3000;

let fruits = ["apple", "banana", "mango"];

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index3.html"));
});

app.get("/fruit", (req, res) => {
    res.json(fruits);
})

app.post("/add", (req, res) => {
    let fruit = req.body.fruit;
    if (fruit) {
        fruits.push(fruit);
        res.status(201).json({ message: "Fruit added", fruit });
    } else {
        res.status(400).json({ error: "No fruit provided" });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});