const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

const ESTUDANTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTUDANTES" (
    "MATRICULA" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100) NOT NULL,
    "EMAIL" varchar(100) NOT NULL,
    "DATA_DE_NASCIMENTO" DATE NOT NULL
)
`;
const ADD_ESTUDANTES_DATA = `
INSERT INTO ESTUDANTES (NOME, EMAIL, DATA_DE_NASCIMENTO)
VALUES 
    ('Suellen Venâncio', 'venanciosuh@gmail.com', '1993-12-14'),
    ('Silvana Xavier', 'sil@gmail.com', '1990-10-01'),
    ('Artur Gomes', 'artur@gmail.com', '1991-11-11')
`;

const COMPUTADORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "COMPUTADORES" (
    "NUMERO_DO_PATRIMONIO" INTEGER PRIMARY KEY NOT NULL,
    "ESPECIFICACAO" varchar(100) NOT NULL
)
`;
const ADD_COMPUTADORES_DATA = `
INSERT INTO COMPUTADORES (NUMERO_DO_PATRIMONIO, ESPECIFICACAO)
VALUES 
    (123, 'Dell, 8gb, 1tb'),
    (124, 'Acer, 4gb, 1tb'),
    (125, 'Samsumg, 48gb, 1tb')
`;

const EMPRESTIMOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS EMPRESTIMOS (
    ID INTEGER PRIMARY KEY,
    MATRICULA_ESTUDANTE INTERGER NOT NULL,
    NUM_PATRIMONIO_COMPUTADOR INTERGER NOT NULL,
    INICIO_EMPRESTIMO DATE NOT NULL,
    FIM_EMPRESTIMO DATE NOT NULL,
    FOREIGN KEY(MATRICULA_ESTUDANTE) REFERENCES ESTUDANTES(MATRICULA),
    FOREIGN KEY(NUM_PATRIMONIO_COMPUTADOR) REFERENCES COMPUTADORES(NUMERO_DO_PATRIMONIO)
)
`;
const ADD_EMPRESTIMOS_DATA = `
INSERT INTO EMPRESTIMOS (MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR,INICIO_EMPRESTIMO, FIM_EMPRESTIMO)
VALUES 
    ( 1, 123,'2021-10-01', '2021-12-01'),
    ( 2, 124,'2021-05-03-', '2021-09-09'),
    ( 3, 125,'2021-04-01', '2021-09-01')
`;


function tabelaEstudantes(){
    db.run(ESTUDANTES_SCHEMA, (e) => {
        if(e) console.log('erro ao criar tabela estudante!')
    });
};
function populaTabelaEstudantes() {
    db.run(ADD_ESTUDANTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Estudantes");
    });
};
function tabelaComputadores(){
    db.run(COMPUTADORES_SCHEMA, (e) => {
        if(e) console.log('erro ao criar tabela computador!')
    });
};
function populaTabelaComputadores() {
    db.run(ADD_COMPUTADORES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de computadores");
    });
};
function tabelaEmprestimos(){
    db.run(EMPRESTIMOS_SCHEMA, (e) => {
        if(e) console.log('erro ao criar tabela emprestimos!')
    });
};
function populaTabelaEmprestimos() {
    db.run(ADD_EMPRESTIMOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de emprestimos");
    });
};



db.serialize(() => {
    tabelaEstudantes();
    tabelaComputadores();
    tabelaEmprestimos();
    populaTabelaEstudantes();
    populaTabelaComputadores();
    populaTabelaEmprestimos();
});