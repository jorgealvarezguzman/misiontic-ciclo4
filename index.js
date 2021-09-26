const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const logger = require("./src/config/logsConfig");

const userRoutes = require('./src/routes/userRoutes')

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

logger.initLogger();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log("DB error:", e));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());
app.use(logger.middleware);

app.get("/", (req, res) => {
  res.json({
    status: true,
    messsage: "Service running...",
  });
});

app.use(userRoutes)

app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.info('running');
});
