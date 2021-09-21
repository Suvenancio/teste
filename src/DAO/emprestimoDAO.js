module.exports = class EmprestimoDao {

    constructor(bd){
        this.bd = bd
    }

  mostrarEmprestimos(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM EMPRESTIMOS'

            this.bd.all(query, (e, res) => {
                if(e) reject(`Erro ao exibir BD ${e}`)
                else resolve(res)
            });
        });
    };
    novoEmprestimo(novo){
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO EMPRESTIMOS (MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR, INICIO_EMPRESTIMO, FIM_EMPRESTIMO) VALUES (?,?,?,?)'
            console.log(novo); 

            this.bd.run(query, Object.values(novo) ,(e,res) => {
                if(e) reject(`Erro ao consultar BD`)
                else resolve(`Empréstimo inserido com sucesso!`)
            });
        });
    };
    deletaEmprestimo(infos){
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM EMPRESTIMOS WHERE ID = (?)'

            this.bd.run(query, infos, (e,res) =>{ 
                if(e) reject(`Erro ao deletar empréstimo ${e}`)
                else resolve(`Empréstimo excluído com sucesso!`)
            });
        });
    };
    alterarEmprestimo(infos,numpatrimonio){
            
        return new Promise((resolve,reject)=>{

            const query ='UPDATE EMPRESTIMOS SET MATRICULA_ESTUDANTE  = (?),NUM_PATRIMONIO_COMPUTADOR = (?),INICIO_EMPRESTIMO = (?), FIM_EMPRESTIMO = (?) WHERE ID = (?)'
                
            this.bd.run(query, [...Object.values(infos), numpatrimonio], (e,res)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Empréstimo alterado com sucesso')
            });
         });
    };
    
}