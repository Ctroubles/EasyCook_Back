require('dotenv').config();
const mongoose = require("mongoose");

const {
  DB_NAME, DB_PASSWORD,
} = process.env;

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://admin:4AwnTIg0ALbFF1hi@cluster0.pku4cwo.mongodb.net/EasyCook?retryWrites=true&w=majority`, { useNewUrlParser: true });
}

main().catch(err => console.log(err));

