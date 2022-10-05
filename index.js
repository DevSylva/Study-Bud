const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");



dotenv.config();
morgan("tiny");

const app = express()


const PORT = process.env.PORT || 5000
mongoose
    .connect(process.env.CONNECTION_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`)
            console.log("Press Ctrl + C to stop server.")
        })
    })
    .catch((error) => console.log(error.message))