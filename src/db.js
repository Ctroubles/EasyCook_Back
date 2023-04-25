require('dotenv').config();
const mongoose = require("mongoose");
const fs = require("fs")
const {
  DB_NAME, DB_PASSWORD,
} = process.env;

main()
.then(value=>console.log("se conectó correctamente"))
.catch(err => {
  fs.appendFile("docu.txt", err.toString(), error=>{
    if (error) {
      console.log(error);
    }
    console.log("se escribió todo bien creo");
  });
  console.log(err);
})

async function main() {
  mongoose.set('strictQuery', true);
  // await mongoose.connect(`mongodb+srv://admin:${DB_PASSWORD}@cluster0.pku4cwo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
  await mongoose.connect(`mongodb+srv://cesaruser:BeEONKiiBh6HBDMw@clusteraws0.j7zjhor.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true });
}