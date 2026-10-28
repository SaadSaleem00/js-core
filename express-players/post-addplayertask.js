const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/players", async (req, res) => {
  let text = await fs.readFile(path.join(__dirname, "ss.json"), "utf-8");
  res.status(200).json(JSON.parse(text));
});
app.post("/players", async (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  if (typeof name !== "string" || name === "") {
    return res.status(400).json({ error: "name and score are required" });
  } else if (typeof score !== "number") {
    return res.status(400).json({ error: "name and score are required" });
  }
  const file = path.join(__dirname, "ss.json");
  let read;
  let convert;
  try {
    read = await fs.readFile(file, "utf-8");
    convert = JSON.parse(read);
  } catch (error) {
    if (error.code === "ENOENT") {
      convert = [];
    } else {
        console.error(error)
      return res.status(500).json({ error: "server error" });
    }
  }
  let newplayer={ id: convert.length + 1, name: name, score: score }
  convert.push(newplayer);
  let revert = JSON.stringify(convert, null, 2);
  await fs.writeFile(file, revert);
  res.status(201).json({message:'player created',player:newplayer});
});

app.listen(3000, () => console.log("server is live"));
