/**
 * @name: connector
 * @module: commonjs
 */

/** @requires: @binance/connector */
const { Spot } = require("@binance/connector"); // import { Spot } from '@binance/connector';
require("dotenv").config(); // import 'dotenv/config'

/** @requires {socket.io-client} */
const io = require("socket.io-client")
const socket = io("http://localhost:3000/")

/**
 * @event "open"
 * @event: "close"
 * @event "message"
 */
const callbacks = {
  open: () => console.log("open"), //open: () => client.logger.log("open"),
  close: () => console.log("closed"), //close: () => client.logger.log("closed"),
  message: (data) => {
    /** @emits "update" */
    socket.emit("update", data);
    console.log(data);
  },
};

const client = new Spot(process.env.APIKEY, process.env.SECRET, {
  baseURL: "wss://testnet.binance.vision", //,   logger,
});

/**  */
const klineWS = client.klineWS("btcusdt", "1m", callbacks);

/**
 * @todo disconnect conditions
 */
//setTimeout(() => client.unsubscribe(klineWS), 10000);

socket.on("disconnect", () => {
  client.unsubscribe(klineWS);
  console.log("disconnected");
});
