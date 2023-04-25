require('dotenv').config();
const mongoose = require("mongoose");


const {
  DB_NAME, DB_PASSWORD,
} = process.env;

main()
.then(value=>console.log("se conectó correctamente"))
.catch(err => {
  console.log(err);
})

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://cesaruser:${DB_PASSWORD}@cluster0.j7zjhor.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
}