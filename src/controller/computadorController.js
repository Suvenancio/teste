const ComputadorDao = require('../DAO/computadorDAO');
const Computador = require('../models/ComputadorModel');

module.exports = (app,bd) => {

    const daoComputador = new ComputadorDao(bd)

    app.get('/computadores', async (req, res) => {

        try{
            const verComputador = await daoComputador.mostrarComputador()
            res.status(200).json(verComputador)

        }catch(e){
            res.status(400).json(e)
        }
    });
    
    app.get('/computadores/:numpatrimonio', async (req, res) => {
        const numpatrimonio = req.params.numpatrimonio
        try{
            const verComputador = await daoComputador.mostrarUmComputador(numpatrimonio)

            res.status(200).json(verComputador)

        }catch(e){
            res.status(400).json(e)
        }
    });


    app.post('/computadores', async (req,res)=>{

        const {numero_do_patrimonio, especificacao } = req.body;
        const newComputador = new Computador(numero_do_patrimonio, especificacao );
        
        try{
            const inserirEstudate = await daoComputador.novoComputador(newComputador)
            res.status(200).json(inserirEstudate)
        }catch(e){
            res.status(400).json(e)
        }
    });

    app.delete('/computadores/:numpatrimonio', async (req,res)=>{
       
        const numpatrimonio = req.params.numpatrimonio
        
        try{
           const deletaComputador = await daoComputador.deletaComputador(numpatrimonio)
           res.status(200).json(deletaComputador)
        }catch(e){
            res.status(500).json(e)
        }
    });

    app.put('/computadores/:numpatrimonio', async (req,res)=>{
        
        const patrimonio = req.params.numpatrimonio
        const { numero_do_patrimonio, especificacao } = req.body;
        const infos = new Computador(numero_do_patrimonio, especificacao);
        console.log(infos)
        try{
            const alterarComputador = await daoComputador.alterarComputador(infos, patrimonio)
            res.status(200).json(alterarComputador)
        }catch(e){
            res.status(400).json(e)
        }

    });
}