const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  console.log("Bingo!");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log("Bingo!");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;