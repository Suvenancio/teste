const EstudanteDao = require('../DAO/estudanteDAO')
const Estudante = require('../models/EstudanteModel')

module.exports = (app,bd) => {

    const daoEstudante = new EstudanteDao(bd)

    app.get('/estudantes', async (req, res) => {

        try{
            const verEstudante = await daoEstudante.mostrarEstudante();
            res.status(200).json(verEstudante)

        }catch(e){
            res.status(400).json(e)
        }
    });
    app.get('/estudantes/:matricula', async (req, res) => {
        const matricula = req.params.matricula;
        try{
            const verEstudante = await daoEstudante.mostrarUmEstudante(matricula);
            res.status(200).json(verEstudante)

        }catch(e){
            res.status(400).json(e)
        }
    });
    app.post('/estudantes', async (req,res)=>{

        const {nome, email, data_de_nascimento} = req.body
        const newEstudante = new Estudante( nome, email, data_de_nascimento);
        
        try{
            const inserirEstudate = await daoEstudante.novoEstudante(newEstudante)
            res.status(200).json(inserirEstudate)
        }catch(e){
            res.status(400).json(e)
        }
    });
    app.delete('/estudantes/:matricula', async (req,res)=>{
       
        const matricula = req.params.matricula;
        
        try{
           const deletaEstudante = await daoEstudante.deletaEstudante(matricula)
           res.status(200).json(deletaEstudante)
        }catch(e){
            res.status(500).json(e)
        }
    });
    app.put('/estudantes/:matricula', async (req,res)=>{
        
        const matricula = req.params.matricula
        const body = req.body
        const infos = [body.nome, body.email, body.data_de_nascimento]
    
        try{
            const alterarEstudante = await daoEstudante.alterarEstudante(infos, matricula)
            res.status(200).json(alterarEstudante)
        }catch(e){
            res.status(500).json(e)
        }

    });
}