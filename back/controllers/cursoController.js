const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const gravatar = require("gravatar")
const CursoService = require('../services/cursoService')

const create = async (req,res,next)=>{
    check('titulo','Titulo e obrigatorio').not().isEmpty()
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {titulo}=req.body;
    try{
        let curso = await CursoService.getOneCurso({titulo});
        if(curso){
            res.status(400).json({errors:[{msg:'Curso already exists!'}]})
return
         }
         curso = await CursoService.create({
            titulo, 
                })
                res.json(curso)
            
                }catch(err){
            console.error(err.message)
            res.status(500).send('Server error')
                }
}

module.exports ={create}