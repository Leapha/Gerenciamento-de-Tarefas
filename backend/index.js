const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Para ler requisições JSON

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_manager',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Erro de conexão com o banco de dados:', err);
    } else {
      console.log('Conectado ao banco de dados MySQL');
    }
  });

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Gerenciamento de Tarefas');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
