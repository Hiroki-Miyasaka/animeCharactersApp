import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routes/auth.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.set('view engine', 'ejs');

app.get('/health', (req, res) => {
    res.json({
        message: "Server is UP",
        port: '3001',
        author: 'hiroki'
    })
})

app.use('/', authRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})