const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const gravatar = require("gravatar")
const CursoService = require('../services/cursoService')
const TrilhaService = require('../services/trilhaService')
const authService = require('../middleware/auth')
const UserService = require('../services/userService');
const User = require("../models/User");
const ConteudoService = require('../services/conteudoService')
const create = async (req,res,next)=>{
    check('titulo','Titulo e obrigatorio').not().isEmpty()
    const data = await authService.decodeToken(req.headers['x-auth-token']);
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
        let cursosReturn = []
       for (const curso of cursos) {
        let user = await UserService.getUserById(curso?.created_by)
            cursosReturn.push({id:curso?._id,
            titulo: curso?.titulo,
            created_by :user?.name
    // tempo_estimado :
})
       }
        res.status(200).json(cursosReturn)
        return 
    }catch(err){
        res.status(500).send("Server error")
    }
}

const verificaRelacionamentoUser= async (id_user,cursoReturn)=>{
    let conteudoUser = await UserService.getUserById(id_user)
    console.log(conteudoUser.progresso)
    let j =0
    for(let trilha of cursoReturn.trilhas){
        console.log(trilha)
        j=0
        while(j< conteudoUser.progresso[j]){
            for(let conteudo of trilha){
                console.log(conteudo)
                if(conteudoUser.progresso[j].indexOf(conteudo._id)){
                    console.log("Entrei")
                    conteudo = {...conteudo, check:conteudoUser.progresso[j].check}
                }
            }
            j = j +1
        }
    }
    return cursoReturn

}
const getById= async (req,res,next)=>{
    try{
        let id_curso = req.params.id
        let id_user = req.body.id_user
        let curso = await CursoService.getCursoById(id_curso);
        let cursoReturn = {
            id:curso?._id,
            titulo: curso?.titulo,
            trilhas:[]
        }
        let i =0
        for (const trilha of curso.trilhas) {
            let trilhaInfo =  await TrilhaService.getById(trilha.toString())
            cursoReturn.trilhas.push({
                id_trilha:trilhaInfo._id,
                trilha:trilhaInfo.titulo,
                conteudo:[]
            })
            for(const conteudo of trilhaInfo.conteudos){
                let conteudoInfo = await ConteudoService.getById({_id:conteudo.toString()})
                let conteudoReturn
                conteudoReturn= {
                    id:conteudoInfo._id, nome:conteudoInfo.titulo , 
                    check:false, 
                    tipo:conteudoInfo.tipo, 
                    link:conteudoInfo.link,
                    duracao:conteudoInfo.duracao
                }     
                
                cursoReturn.trilhas[i].conteudo.push(conteudoReturn)       
            }
            i=i+1
        }
        // Não foi possível testar essa parte de check de usuário pois ainda não possuo o endpoint para o usuário marcar se viu ou nao o material 
        // cursoReturn= await verificaRelacionamentoUser(id_user,cursoReturn)
        res.status(200).json(cursoReturn)
        return 
    }catch(err){
        console.log(err)
        res.status(500).send("Server error")
    }
}
module.exports ={create,addTrilha, getAll, getById}