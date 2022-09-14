import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import webRouter from "./src/router/book.router";
import { log } from "console";

const port = 3333;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL)
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err.message));

app.use(bodyParser.json());

app.use('/', webRouter);

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`); 
})
