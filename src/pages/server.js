const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Rota para receber os dados do formulário
app.post('/src/pages/server.js', (req, res) => {
  let rawData = '';
  
  req.on('data', (chunk) => {
    rawData += chunk;
  });
  
  req.on('end', () => {
    try {
      const jsonData = JSON.parse(rawData);
      
      // Armazene o JSON em um arquivo
      fs.writeFile('src/pages/db.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('Dados do formulário armazenados com sucesso!');
      });
      
      res.sendStatus(200);
    } catch (error) {
      console.error('Erro ao armazenar os dados do formulário:', error);
      res.sendStatus(500);
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js em execução na porta ${port}`);
});
