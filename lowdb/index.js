/**
 * @name: lowDB
 * @module: es
 */

/** @imports socket.io-client */
import { io } from "socket.io-client"
//const socket = io("http://localhost:3000/")
const socket = io();

/** @constructs lowdb  */
import { Low, JSONFile } from "lowdb"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// Set default data
// db.data = db.data || { lineSeriesObjects: [] }; // Node < v15.x
db.data ||= { lineSeriesObjects: [] }             // Node >= 15.x

/** @event "connection" */
socket.on("connection", (socket) => {

  /**
   * @todo persist user data
   */
  console.log(` user ${socket.id} connected`);

  /**
   * @event "chart"
   */
  socket.on("chart", async (lineSeries) => {
      console.log(lineSeries)
      /**
       * @todo
       * @emit ""
       */
      const { lineSeriesObjects } = db.data
      lineSeriesObjects.push(lineSeries)
      await db.write()

    });
});
