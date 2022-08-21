const path = require('path');
const express = require ('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 6000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));