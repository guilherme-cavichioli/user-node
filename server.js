const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const PORT = 3000;
const app = express();
const URL_DB = "mongodb+srv://store-api:store-001@cluster0.t59my.mongodb.net/"
app.use(express.json());

app.use(userRoutes);


mongoose.connect(URL_DB, {})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
