require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "postgres",
});
const app = express();

app.use(express.json());

app.get("/players", async (req, res) => {
  try {
    const data = await pool.query("select * from players order by id");
    if (data.rows.length === 0) {
      return res.status(404).json({ error: "player not found" });
    } else {
      res.status(200).json(data.rows);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "server error" });
  }
});

app.get("/players/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "plz enter number" });
    } else {
      const data = await pool.query(
        "select * from players where players.id=$1",
        [id],
      );
      if(data.rows.length===0){
        return res.status(404).json({error:'player not found'})
      }else{
        return res.status(200).json(data.rows[0])
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "server error" });
  }
});

app.post("/players", async (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  let insert;
  try {
    if (typeof name !== "string" || name === "") {
      return res.status(400).json({ error: "name and score are required" });
    } else if (typeof score !== "number") {
      return res.status(400).json({ error: "name and score are required" });
    } else {
      insert = await pool.query(
        "insert into players (name,score) values($1,$2) returning*",
        [name, score],
      );
      return res.status(201).json({message:'succesfully created',player:insert.rows[0]});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "server error" });
  }
});

app.put("/players/:id", async (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const score = req.body.score;
  try {
    if (typeof name !== "string" || name === "") {
      return res.status(400).json({ error: "name and score are required" });
    } else if (typeof score !== "number") {
      return res.status(400).json({ error: "name and score are required" });
    } else if (!Number.isInteger(id)) {
      return res.status(400).json({ error: "enter the id" });
    } else {
      let change = await pool.query(
        "update players set name=$1,score=$2 where id=$3 returning*",
        [name, score, id],
      );
      res.status(200).json({ message: "updated",data: change.rows[0] });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "server error" });
  }
});

app.delete("/players/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if(!Number.isInteger(id)){
        return res.status(400).json({message:'enter proper id'})
    }else{
        const remove = await pool.query(
      "delete from players where id=$1 returning*",
      [id],
    );
    if(remove.rowCount===0){
        return res.status(404).json({error:'player not found'})
    }
    res.status(200).json({ message: "deleted",row:remove.rows });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "server error" });
  }
});

app.listen(3000, () => console.log("server is live"));
