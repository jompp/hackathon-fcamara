const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const TrilhaService = require('../services/trilhaService')
const ConteudoService = require('../services/conteudoService')
const auth = require('../middleware/auth');

const create = async (req,res,next)=>{
    const isAdmin = await auth.isAdmin(req.headers['x-auth-token'])
    if(isAdmin == true){
    check('titulo','Titulo e obrigatorio').not().isEmpty()
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {titulo}=req.body;
    try{
        let trilha = await TrilhaService.getTrilhaByTitulo({titulo});
        if(trilha.length>0){
            res.status(400).json({errors:[{msg:'Trilha already exists!'}]})
            return
         }
         trilha = await TrilhaService.create({
            titulo, 
                })
                res.status(200).json(trilha)
            
                }catch(err){
            console.error(err.message)
            res.status(500).send('Server error')
                }}else{
                    res.status(400).send('Apenas admin pode criar trilha')

                }
}

const addConteudo = async (req,res,next)=>{
    const isAdmin = await auth.isAdmin(req.headers['x-auth-token'])
    if(isAdmin == true){
    check('id',
    'Por favor,ids com 12 caracteres minímo')
    .isLength({min:6}) 
       const {id, trilha}=req.body;
    try{
        let trilhaExistente = await TrilhaService.getTrilhaByTitulo({'titulo':trilha});
        if(trilhaExistente.length<=0){
            res.status(400).json({errors:[{msg:'Trilha não existe!'}]})
            return

        }else{
            let conteudo = await ConteudoService.getById({'_id':id})
            console.log(conteudo)
            if(conteudo == null){
                res.status(400).json({errors:[{msg:'Conteúdo não existe!'}]})
                return
            }else{

                trilhaAtualizado = await TrilhaService.addConteudo(trilha, conteudo)
                res.json(trilhaAtualizado)
                return
            }   
        }
    }catch(err){
    console.log(err)
        res.status(500).send('Server error')
                }}else{
                    res.status(400).send('Apenas admin pode relacionar conteúdo e trilha')

                }
}

module.exports ={create, addConteudo}