// write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

/*
body {
    title: string;
    description: string
}

*/

app.post("/todo", (req, res) => {});

app.get("/todo", (req, res) => {});

app.post("/completed", (req, res) => {});
