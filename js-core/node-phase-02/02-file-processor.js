const fs = require("fs");

async function process(filepath) {
  try {
    const data = await fs
      .readFile(filepath, utf8)
      .split("\n")
      .filter((error) => error == "ERROR")
      .reduce((acc, error) => acc + error, 0);
    return data;
  } catch (error) {
    console.error("hell no", error.message);
  }
}
process('logs.txt')
