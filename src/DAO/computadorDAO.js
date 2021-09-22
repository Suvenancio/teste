module.exports = class ComputadorDao {

    constructor(bd){
        this.bd = bd
    }

  mostrarComputador(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM COMPUTADORES'

            this.bd.all(query, (e, res) => {
                if(e) reject(`Erro ao exibir BD ${e}`)
                else resolve(res)
            });
        });
    };
    mostrarUmComputador(patrimonio){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM COMPUTADORES WHERE NUMERO_DO_PATRIMONIO = (?)'

            this.bd.all(query,patrimonio, (e, res) => {
                if(e) reject(`Erro ao exibir BD ${e}`)
                else resolve(res)
            });
        });
    };
    novoComputador(novo){
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO COMPUTADORES (NUMERO_DO_PATRIMONIO, ESPECIFICACAO) VALUES (?,?)'
            console.log(novo);

            this.bd.run(query, Object.values(novo) ,(e,res) => {
                if(e) reject(`Erro ao consultar BD`)
                else resolve(`Computador inserido com sucesso!`)
            });
        });
    };
    deletaComputador(infos){
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM COMPUTADORES WHERE NUMERO_DO_PATRIMONIO = (?)'

            this.bd.run(query, infos, (e,res) =>{ 
                if(e) reject(`Erro ao deletar Computador ${e}`)
                else resolve(`Computador excluído com sucesso!`)
            });
        });
    };
    alterarComputador(infos,numpatrimonio){
            
        return new Promise((resolve,reject)=>{

            const query ='UPDATE COMPUTADORES SET NUMERO_DO_PATRIMONIO = (?), ESPECIFICACAO = (?) WHERE NUMERO_DO_PATRIMONIO = (?)'
                
            this.bd.run(query, [...Object.values(infos), numpatrimonio], (e,res)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Computador alterado com sucesso')
            });
         });
    };
    
}