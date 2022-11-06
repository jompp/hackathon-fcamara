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

exports.addTrilha= async function(trilha, curso){
    const trilha_id = trilha[0]._id
    try{
       let cursoAtualizar = new Curso()
       cursoAtualizar = await Curso.find({"titulo":curso});
       cursoAtualizar[0].trilhas = [...cursoAtualizar[0].trilhas, trilha_id]
       await cursoAtualizar[0].save();
   }catch(e){
       throw Error("Error while creating curso")
   }
    
}