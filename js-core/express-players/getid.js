const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const app = express();

app.use(express.json());

app.get("/players/:id", async (req, res) => {
  const id = Number(req.params.id);
  const file = path.join(__dirname, "ss.json");
  let convert;
  try {
    let readfile = await fs.readFile(file, "utf-8");
    convert = JSON.parse(readfile);
  } catch (error) {
    if (error.code === "ENOENT") {
       return res.status(404).json({ error: "no players here" });
    } else {
      console.error(error);
      return res.status(500).json({ error: "server error" });
    }
  }
  let book = convert.find((b) => b.id === id);
  if(!book){
    return res.status(404).json({error:'player not found'})
  }
  res.json(book);
});
app.delete("/players/:id", async (req, res) => {
  const id = Number(req.params.id);
  let file=path.join(__dirname,'ss.json')
  let convert;
  try {
    let readfile=await fs.readFile(file,'utf-8')
    convert=JSON.parse(readfile)
  } catch (error) {
    if(error.code==='ENOENT'){
        return res.status(404).json({error:'no such book found'})
    }else{
        console.error(error)
        return res.status(500).json({error:'server error'});
    }
  }
  let book=convert.find((n)=>n.id===id)
  if(!book){
    res.status(404).json({error:'server error'})
  }
  convert=convert.filter((b)=>b.id!==id)
  let revert=JSON.stringify(convert,null,2)
  await fs.writeFile(file,revert)
  res.status(200).json({message:'deleted',book})
});

app.listen(3000, () => console.log("server is live on port 3000"));
