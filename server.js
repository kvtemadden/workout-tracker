const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const databaseUrl = "workoutTracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/exercise.html'));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/stats.html'));
});

app.listen(PORT, () => {
  console.log(`Workout Tracker running on port ${PORT}!`);
});
