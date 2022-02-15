/** @format */

const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:1234",
  },
}); //,allowedHeaders: ["my-custom-header"],credentials: true

io.on("connection", (socket) => {
  console.log(` user ${socket.id} connected`);
  socket.on("update", (data) => {
    let parsed = JSON.parse(data)
    let t = parsed.k.t
    let v = parsed.k.c
    let price = parseFloat(v)
    let time = Math.floor(t / 1000)
    let formatted = { time, price }
    console.log( formatted )
    io.emit("message", data);
    // console.log("message");
  });
});
io.listen(3000, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
