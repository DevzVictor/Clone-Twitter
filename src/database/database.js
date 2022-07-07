const mongoose = require("mongoose");
const connectDataBase = () => {
  console.log("Conectando com o banco de dados...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Conectado"))
    .catch((erro) => console.log(`Erro ao conectar com o banco ${erro}`));
};


module.exports = connectDataBase;