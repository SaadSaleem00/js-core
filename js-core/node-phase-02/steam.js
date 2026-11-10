const { log } = require("console");
const fs = require("fs");
const readline = require("readline");

async function longestline(file) {
  const data = readline.createInterface({ input: fs.createReadStream(file) });
  let counter = 0;
  let longest = 0;
  let best=0
  for await (const line of data) {
    counter++;
    if (line.length > longest) {
      longest = line.length;
      best=counter
    }
  }
  console.log("line", counter, "length", longest,'best',best);
}
longestline("line.txt");
