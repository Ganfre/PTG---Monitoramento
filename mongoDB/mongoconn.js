const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vinipinha:O8o1Zf4mEw3NnZ1C@cluster0.rnnuxu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Conexão com o MongoDB realizada com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB: ' + err.message);
  });