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
    ('Suellen Venâncio', 'venanciosuh@gmail.com', '14-12-1993')
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
    (123, '4gb, 1tb')
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
    ( 1, 123,'15-03-2021', '01-09-2021')
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