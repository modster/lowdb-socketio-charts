/**
 * @name server
 */

/** @requires express */
const express = require("express");
const app = express();

/** @requires http */
const http = require("http");
const server = http.createServer(app);

/**
 * @requires socket.io
 * @todo allowed headers, credentials
 */
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:1234"//,allowedHeaders: ["my-custom-header"],credentials: true
  }
});

const port = process.env.PORT || 3000

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile("./public/index.html");
// })

io.on("connection", (socket) => {
  /** @todo persist user ids */
  console.log(` user ${socket.id} connected`)

  /** @event "update" */
  socket.on("update", function (data) {
    console.log( data )
    /** @emits data */
    socket.emit("message", data)
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
