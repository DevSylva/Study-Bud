const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes")



dotenv.config();
morgan("tiny");

const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// route middlewares
app.use("/api/user", userRoutes);


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