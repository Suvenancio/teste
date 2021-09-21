const express = require('express');
const app = express();
const port = process.env.PORT;

const bd = require('./infra/sqlite_bd');
const cors = require('cors');

const rotaEstudante = require('./controller/estudanteController');
const rotaComputador = require('./controller/computadorController');
const rotaEmprestimo = require('./controller/emprestimoController');


app.use(express.json());
app.use(cors());

rotaEstudante(app,bd);
rotaComputador(app,bd);
rotaEmprestimo(app,bd);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
