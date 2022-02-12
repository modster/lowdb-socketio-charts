/**
 * Socket.io Client
 */
const { io } = require("socket.io-client");

const socket = io();
const port = process.env.PORT || 4000;

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.on("connect", () => {
  console.log(socket.connected); // true
});
socket.on("data", () => { /* ... */ });

// client-side
socket.on("connect_error", (err) => {
  console.log(err instanceof Error); // true
  console.log(err.message); // not authorized
  console.log(err.data); // { content: "Please retry later" }
});

socket.on("disconnect", (reason) => {
  if (reason === "io server disconnect") {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect();
  }
  // else the socket will automatically try to reconnect
});
