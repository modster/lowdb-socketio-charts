/**
 * @name: server
 * @module: commonjs
 */

/** @requires: express */
const express = require("express");
const app = express();

/** @requires: http */
const http = require("http");
const server = http.createServer(app);

/** @requires: socket.io */
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html")
})


io.on("connection", (socket) => {
  /**
   * @todo persist user ids
   */
  console.log(` user ${socket.id} connected`)
  /**
   * @event "update"
   */
  socket.on("update", function (data) {
    /**
     * massage the data
     */
    let parsed = JSON.parse(data)
    let t = parsed.k.t
    let v = parsed.k.c
    let price = parseFloat(v)
    let time = Math.floor(t / 1000)
    let lineSeries = { time, price }
    console.log( lineSeries )

    /**
     * @emits 'chart'
     */
    socket.emit("chart", lineSeries)
  });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
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
