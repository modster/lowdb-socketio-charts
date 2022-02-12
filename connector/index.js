/** @format */

const { Spot } = require("@binance/connector"); // import { Spot } from '@binance/connector';
require("dotenv").config(); // import 'dotenv/config'

/** @todo wss
 * const require( socket io client )
 *
 */
const io = require("socket.io-client"); // import { io } from "socket.io-client";
const socket = io("http://localhost:3000/");

/** @callback */
const callbacks = {
  open: () => console.log("open"), //open: () => client.logger.log("open"),
  close: () => console.log("closed"), //close: () => client.logger.log("closed"),
  message: function (data) {
    socket.emit("update", data);

  },
};

const client = new Spot(process.env.APIKEY, process.env.SECRET, {
  baseURL: "wss://testnet.binance.vision"//,   logger,
});

/**  */
const klineWS = client.klineWS("bnbusdt", "1m", callbacks);

/**
 * @todo disconnect conditions
 */
//setTimeout(() => client.unsubscribe(klineWS), 10000);
socket.on("disconnect", () => {
  client.unsubscribe(klineWS);
  console.log("disconnected");
});
