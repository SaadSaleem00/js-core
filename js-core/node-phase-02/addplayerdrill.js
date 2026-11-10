const fs = require("fs/promises");
const path = require("path");

async function addPlayer(name, scores) {
  const file = path.join(__dirname, "ss.json");
  let convert;
  try {
      const data = await fs.readFile(file, "utf-8");
      convert = JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            convert = [];
        } else {
            throw error;
        }
    }
    let ids = convert.length;
  ids++;
  convert.push({ id: ids, name: name, score: scores });
  const back = JSON.stringify(convert, null, 2);
  await fs.writeFile(file, back);
}
addPlayer("hello", 999);
