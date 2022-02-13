/**
 * @format
 * @name lightweight-charts
 * @module es
 * @todo integrate trading-vue charts
 */

/** @requires lightweight-charts */
import { createChart } from "lightweight-charts";
const chart = createChart(document.getElementById("container"));

import { io } from "socket.io-client";
const socket = io("http://localhost:3000/")
//const socket = io();

const lines = [
  { time: "2019-04-11", value: 80.01 },
  { time: "2019-04-12", value: 96.63 },
  { time: "2019-04-13", value: 76.64 },
  { time: "2019-04-14", value: 81.89 },
  { time: "2019-04-15", value: 74.43 },
  { time: "2019-04-16", value: 80.01 },
  { time: "2019-04-17", value: 96.63 },
  { time: "2019-04-18", value: 76.64 },
  { time: "2019-04-19", value: 81.89 },
  { time: "2019-04-20", value: 74.43 },
];

/** @event connect */
const lineSeries = chart.addLineSeries({
  // timescale: {
  //     timeVisible: true,
  //     secondsVisible: true
  // }
});
/** @event update */
/** sample line seris data */
lineSeries.setData(lines);

socket.on("connect", () => {
  console.log(socket.id);

  /**
   * @param arg
   */
  socket.on("chart", (arg) => {

      console.log(arg);
      lineSeries.update(arg);
    });
});

// socket.on("disconnect", () => {
//   console.log("Chart Disconnected");
// });

// socket.on("data", () => {
//   /* ... */
// });

// // client-side
// socket.on("connect_error", (err) => {
//   console.log(err instanceof Error); // true
//   console.log(err.message); // not authorized
//   console.log(err.data); // { content: "Please retry later" }
// });

// socket.on("disconnect", (reason) => {
//   if (reason === "io server disconnect") {
//     // the disconnection was initiated by the server, you need to reconnect manually
//     socket.connect();
//   }
//   // else the socket will automatically try to reconnect
// });
