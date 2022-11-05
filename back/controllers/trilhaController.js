const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const TrilhaService = require('../services/trilhaService')

const create = async (req,res,next)=>{
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
                console.log(trilha)
                res.status(200).json(trilha)
            
                }catch(err){
            console.error(err.message)
            res.status(500).send('Server error')
                }
}

module.exports ={create}