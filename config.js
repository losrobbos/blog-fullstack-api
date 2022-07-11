import dotenv from 'dotenv'

const config = dotenv.config() // load .env contents into process.env

console.log("Loaded environment config: ", config)