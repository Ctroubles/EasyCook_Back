require('dotenv').config();
const mongoose = require("mongoose");

const {
  DB_NAME, DB_PASSWORD,
} = process.env;

main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://admin:4AwnTIg0ALbFF1hi@cluster0.reehusu.mongodb.net/EasyCook?retryWrites=true&w=majority`, { useNewUrlParser: true });
}