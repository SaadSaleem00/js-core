const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.get("/hello", (req, res) => {
  res.json("hellodear");
});

app.get("/players", async (req, res) => {
  try {
    let text = await fs.readFile(path.join(__dirname, "ss.json"), "utf-8");
    res.status(200).json(JSON.parse(text));
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).json({ error: "no players yet" });
    } else {
      res.status(500).json({ error: "server error" });
    }
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

app.listen(3000, () => console.log("i am listing on port 3000"));
