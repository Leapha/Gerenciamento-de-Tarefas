const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000; // Porta do backend

// Usando o CORS para permitir acessos de qualquer origem
app.use(cors());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // senha para o bd
  database: 'task_manager' // Nome do banco existente
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = db; //Exportar a conexão para ser usada em outros arquivos

// Rota para obter tarefas
app.get('/api/tarefas', (req, res) => {
  db.query('SELECT * FROM tarefas', (err, results) => {
    if (err) {
      console.error('Erro ao consultar tarefas:', err);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
