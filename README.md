# blog-fullstack-api

This is the API part of a fullstack mini blog project.

Find the frontend part at: https://github.com/losrobbos/blog-fullstack-ui

## Setup after cloning

Install packages: `npm i`

Creating a database
- Fill in your Mongo Database Cloud URL (e.g. ATLAS) in an .env file
  - Easiest: Copy .env.sample file and just replace the URL (keeping the keyname MONGO_URI like it is)
- Create some initial blog entries in your database: `npm run seed`

Starting the API
- `npm start`
