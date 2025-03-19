require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const app = express();
const { MONGO_URL_DB, PORT } = process.env;

app.use(express.json());

app.use(userRoutes);


mongoose.connect(MONGO_URL_DB, { authSource: "admin" })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
