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
  // await mongoose.connect(`mongodb+srv://admin:${DB_PASSWORD}@cluster0.pku4cwo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
  await mongoose.connect(`mongodb+srv://tex_user:8SZ8tlEcnjVI16TR@cluster0aws.reehusu.mongodb.net/tex-db?retryWrites=true&w=majority`, { useNewUrlParser: true });
}