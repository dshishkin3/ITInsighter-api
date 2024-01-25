require("dotenv").config();
import { Application } from "express";
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT: number = Number(process.env.PORT) || 7000;

const app: Application = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
    }),
);
app.use(cookieParser());

const start = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.DB_URL as string, {
            dbName: "ITInsighter-api",
        });
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e: any) {
        console.log(e);
    }
};

start();
