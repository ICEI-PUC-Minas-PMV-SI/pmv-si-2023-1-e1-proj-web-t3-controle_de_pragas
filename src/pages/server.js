const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('formulario', (req, res) => {
  console.log('Recebido:', req.body);
  
  // Código para armazenar os dados em um arquivo JSON
  // ...
  
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor Node.js em execução na porta ${port}`);
});
