require('dotenv').config();
const mongoose = require("mongoose");

const {
  DB_NAME, DB_PASSWORD,
} = process.env;

main()
.then(value=>console.log("all good"))
.catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', true);
  // await mongoose.connect(`mongodb+srv://admin:${DB_PASSWORD}@cluster0.pku4cwo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
  await mongoose.connect(`mongodb+srv://admin:PICKQaC4Dhfo2Xo0@cluster0.pku4cwo.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true });
}