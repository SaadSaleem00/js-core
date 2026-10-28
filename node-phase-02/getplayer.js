const http = require("http");
const fs = require("fs/promises");
const path = require("path");

function send(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/players") {
    try {
      let text = await fs.readFile(path.join(__dirname, "ss.json"), "utf-8");
      send(res, 200, JSON.parse(text));
    } catch (error) {
      if (error.code === "ENOENT") {
        send(res, 404, { error: "no players yet" });
      } else {
        send(res, 500, { error: "server error" });
      }
    }
  } else {
    send(res, 404, { error: "not found" });
  }
});

server.listen(3000, () => console.log("hello"));
