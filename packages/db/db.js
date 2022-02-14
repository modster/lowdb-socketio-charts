import { Low, JSONFile } from 'lowdb'

const db = new Low(new JSONFile('./file.json'))
await db.read()
db.data ||= { posts: [] }
// db.data.posts.push('hello world')
// const firstPost = db.data.posts[0]
// console.log(firstPost)
// await db.write()


const { posts } = db.data
console.log(posts.length)
