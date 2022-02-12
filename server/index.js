/**
 * Socket.io Server
 *
 * @format
 */

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// io.use((socket, next) => {
//   next();
// });

// io.use((socket, next) => {
//   next(new Error("thou shall not pass"));
// });

// io.use((socket, next) => {
//   // not executed, since the previous middleware has returned an error
//   next();
// });
// io.use((socket, next) => {
//   const err = new Error("not authorized");
//   err.data = { content: "Please retry later" }; // additional details
//   next(err);
// });

io.on("connection", (socket) => {
  console.log(` user ${socket.id} connected`);

  socket.on("update", function (arg) {
    let parsed = JSON.parse(arg);
    console.log(parsed.k.t + " " + parsed.k.c);
    socket.broadcast.emit("chart", arg);
  });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
