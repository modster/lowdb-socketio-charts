import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import {  io } from 'socket.io-client'


const socket = io("http://localhost:3000/")
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../store/db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)
await db.read() // Read data from JSON file, this will set db.data content


// Set default data
db.data ||= { posts: [] }

// Create and query items using plain JS
db.data.posts.push('hello world')
const firstPost = db.data.posts[0]

// Alternatively, you can also use this syntax if you prefer
const { posts } = db.data
posts.push('hello world')

// Finally write db.data content to file
await db.write()
