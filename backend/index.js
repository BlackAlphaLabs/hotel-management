const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const csrf = require("csurf");
const mongoose = require("mongoose");
const ConnectDB = require("./config/DB");
require("dotenv").config();

const app = express();

// Middleware
ConnectDB()
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// 🔐 Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);


const csrfProtection = csrf({ cookie: true });
// app.use(csrfProtection); // DISABLED for development


