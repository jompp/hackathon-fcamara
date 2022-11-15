const { check, validationResult }= require("express-validator")
const jwt = require('jsonwebtoken')
const config = require("config");
const ConteudoService= require('../services/conteudoService')
const auth = require('../middleware/auth');

const create = async (req,res,next)=>{
    const isAdmin = await auth.isAdmin(req.headers['x-auth-token'])
    if(isAdmin == true){
    check('titulo','Titulo e obrigatorio').not().isEmpty(),
    check('tipo', 'Tipo e obrigatorio').not().isEmpty(),
    check('origem','Origem e obrigatorio').not().isEmpty(),
    check('duracao', 'Duracao e obrigatorio').not().isEmpty()
    check('link', 'Link e obrigatorio').not().isEmpty()
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {titulo, tipo, origem, duracao, link}=req.body;
    try{
         conteudo = await ConteudoService.create({
            titulo, 
            tipo, origem,duracao, link
                })
                
                res.status(200).json(conteudo)
                return 
                }catch(err){
                    console.error(err.message)
                    res.status(500).send('Server error')
                }
            }else{
                res.status(400).send('Apenas admin pode criar conteúdo')

            }

}


module.exports ={create}