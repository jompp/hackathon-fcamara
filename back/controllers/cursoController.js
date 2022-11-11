const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const gravatar = require("gravatar")
const CursoService = require('../services/cursoService')
const TrilhaService = require('../services/trilhaService')
const authService = require('../middleware/auth')
const create = async (req,res,next)=>{
    check('titulo','Titulo e obrigatorio').not().isEmpty()
    const data = await authService.decodeToken(req.headers['x-auth-token']);
console.log(data)
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
            titulo:titulo, 
created_by:data.user.id
                })
                res.status(200).json("Curso criado!")

                
            
                }catch(err){
                    console.error(err.message)
                    res.status(500).send('Server error')
                }
}


const addTrilha = async (req,res,next)=>{
    console.log(req)
    console.log(next)
    const {titulo, curso}=req.body;
    try{
        let trilha = await TrilhaService.getTrilhaByTitulo({'titulo':titulo});
        if(trilha.length<=0){
            res.status(400).json({errors:[{msg:'Trilha não existe!'}]})
            return
         }else{
         cursoAtualizado = await CursoService.addTrilha(trilha, curso)
                res.json(cursoAtualizado)
            }   
                }catch(err){
            console.error(err.message)
            res.status(500).send('Server error')
                }
}

const getAll= async (req,res,next)=>{
    try{

        let cursos = await CursoService.getAll();
        console.log(cursos)
        let cursosReturn = []
        cursos.forEach(curso=> {
            cursosReturn.push({id:curso?._id,
            titulo: curso?.titulo,
        created_by :curso?.created_by
    // tempo_estimado :
})
        });
       
        res.status(200).json(cursosReturn)
        return 
    }catch(err){
        res.status(500).send("Server error")
    }
}
module.exports ={create,addTrilha, getAll}