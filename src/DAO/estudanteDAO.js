module.exports = class EstudanteDao {

    constructor(bd){
        this.bd = bd
    }

  mostrarEstudante(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM ESTUDANTES'

            this.bd.all(query, (e, res) => {
                if(e) reject(`Erro ao exibir BD ${e}`)
                else resolve(res)
            });
        });
    };
    mostrarUmEstudante(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM ESTUDANTES WHERE MATRICULA = (?)'

            this.bd.all(query, id,(e, res) => {
                if(e) reject(`Erro ao exibir BD ${e}`)
                else resolve(res)
            });
        });
    };
    novoEstudante(novo){
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO ESTUDANTES ( NOME, EMAIL, DATA_DE_NASCIMENTO) VALUES (?,?,?)'
            console.log(novo);

            this.bd.run(query, Object.values(novo) ,(e,res) => {
                if(e) reject(`Erro ao consultar estudante`)
                else resolve(`Estudante inserido com sucesso!`)
            });
        });
    };
    deletaEstudante(infos){
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM ESTUDANTES WHERE MATRICULA = (?)'

            this.bd.run(query, infos, (e,res) =>{ 
                if(e) reject(`Erro ao deletar estudante ${e}`)
                else resolve(`Estudante excluído com sucesso!`)
            });
        });
    };
    alterarEstudante(infos,matricula){
            
        return new Promise((resolve,reject)=>{

            const query ='UPDATE ESTUDANTES SET NOME = (?), EMAIL = (?), DATA_DE_NASCIMENTO = (?) WHERE MATRICULA = (?)'
                
            this.bd.run(query, [...Object.values(infos), matricula], (e,res)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Estudante alterado com sucesso')
            });
         });
    };
    
}