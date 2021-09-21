const EmprestimoDao = require('../DAO/emprestimoDAO');
const Emprestimo = require('../models/EmprestimoModel');

module.exports = (app,bd) => {

    const daoEmprestimo = new EmprestimoDao(bd);

    app.get('/emprestimos', async (req, res) => {

        try{
            const verEmprestimo = await daoEmprestimo.mostrarEmprestimos()
            res.status(200).json(verEmprestimo)

        }catch(e){
            res.status(400).json(e)
        }
    });
    app.post('/emprestimos', async (req,res)=>{

        const { MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR, INICIO_EMPRESTIMO, FIM_EMPRESTIMO } = req.body
        const newEmprestimo = new Emprestimo(MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR, INICIO_EMPRESTIMO, FIM_EMPRESTIMO );
      
        try{
            const inserirEmprestimo = await daoEmprestimo.novoEmprestimo(newEmprestimo)
            res.status(200).json(inserirEmprestimo)
        }catch(e){
            res.status(400).json(e)
        }
    });
    app.delete('/emprestimos/:id', async (req,res)=>{
       
        const id = req.params.id
        
        try{
           const deletaEmprestimo = await daoEmprestimo.deletaEmprestimo(id)
           res.status(200).json(deletaEmprestimo)
        }catch(e){
            res.status(500).json(e)
        }
    });
    app.put('/emprestimos/:id', async (req,res)=>{
        
        const id = req.params.id
        const { MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR, INICIO_EMPRESTIMO, FIM_EMPRESTIMO } = req.body
        const infos = new Emprestimo(MATRICULA_ESTUDANTE, NUM_PATRIMONIO_COMPUTADOR, INICIO_EMPRESTIMO, FIM_EMPRESTIMO );
        
        try{
            const alteraEmprestimo = await daoEmprestimo.alterarEmprestimo(infos, id)
            res.status(200).json(alteraEmprestimo)
        }catch(e){
            res.status(400).json(e)
        }

    });
}