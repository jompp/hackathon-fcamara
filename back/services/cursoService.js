const Curso = require('../models/Curso')
exports.getOneCurso = async function(body){
    try{
     let curso = await Curso.findOne({body});
 return curso
    }catch(e){
     throw Error('Error while finding curso')
    }  
 }

 
exports.create = async function (body){
    try{
       let curso = new Curso(body)
        await curso.save();
    }catch(e){
        throw Error("Error while creating curso")
    }
}