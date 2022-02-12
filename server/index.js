/**
 * Socket.io Server
 */
const httpServer = require("http").createServer();

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:4000",
  },
});

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
io.use((socket, next) => {
  next();
});

io.use((socket, next) => {
  next(new Error("thou shall not pass"));
});

io.use((socket, next) => {
  // not executed, since the previous middleware has returned an error
  next();
});

io.on("connection", (socket) => {
  console.log(` user ${socket.id} connected`); // x8WIv7-mJelg7on_ALbx

  socket.on("update", function (arg) {
    let parsed = JSON.parse(arg)
    console.log(parsed.k.t + " " + parsed.k.c)
    socket.broadcast.emit("chart", arg)
  });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
// server-side
io.use((socket, next) => {
  const err = new Error("not authorized");
  err.data = { content: "Please retry later" }; // additional details
  next(err);
});
