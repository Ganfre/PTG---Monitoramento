const mongoose = require('mongoose')
const MONGO_CONNECT = process.env.MONGO_CONNECT

mongoose.connect(MONGO_CONNECT)
  .then(() => {
    console.log('Conexão com o MongoDB realizada com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB: ' + err.message);
  });