const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.send("Welcome to alimentary Api");
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
