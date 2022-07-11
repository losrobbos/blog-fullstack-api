import './config.js'
import mongoose from 'mongoose'
import { Post, Comment } from "./models.js"
import './db-connect.js'
import faker from 'faker'

// Seed in some data
const seed = async () => {

  try {

    // CLEANUP data  
    await Comment.deleteMany() // => delete all comment documents from comments collection in DB
    await Post.deleteMany() // => delete all post documents from posts collection in DB

    // INSERT SOME BLOG POSTS
    const posts = await Post.insertMany([
      {
        title: "Yadda Yadda", 
        author: "Rob", 
        text: "Yay, title says it all. " + faker.lorem.sentences(5),
        stats: { likes: 3, dislikes: 0 } // embedded the likes & dislikes
      },
      {
        title: "Hack me if you can", 
        author: "Wasabis",
        text: "Nest me if you can. " + faker.lorem.sentences(5),
        stats: { likes: 5, dislikes: 2 }
      },
      {
        title: "Does backend make sense?", 
        author: "Giorgio",
        text: "I stay in the UI. " + faker.lorem.sentences(5),
        stats: { likes: 2, dislikes: 2 }
      },
    ])


    // INSERT SOME COMMENTS TO BLOG POSTS ...

    const comments = await Comment.insertMany([
      // faker.random.arrayElement => will pick an random entry from an array !
      { postId: posts[0], author: "Tick", text: "Yes, yes. Relations. Nice" },
      { postId: posts[0], author: "Trick", text: "Fuck no. I don't get relations" },
      { postId: posts[0], author: "Track", text: "Come oooon..." },
      { postId: posts[1], author: "George", text: "I like nesting. Jaja." },
      { postId: posts[1], author: "Michael", text: "Nest it, baby. Jaja." },
    ])

    //  SUCCESS REPORT
    console.log(`Seeded ${posts.length} Posts + ${comments.length} comments`)

    // CLOSE CONNECTION TO DATABASE AND FINISH SCRIPT
    await mongoose.connection.close()

  }
  catch(err) {
    console.log(err.message)
  }  

}

seed() // perform seed
