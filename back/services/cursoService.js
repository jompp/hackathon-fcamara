const Conteudo = require('../models/Conteudo');
const Curso = require('../models/Curso')
exports.getOneCurso = async function(body){
    try{
     let curso = await Curso.findOne({'titulo':body.titulo});
 return curso
    }catch(e){
     throw Error('Error while finding curso')
    }  
 }

 
exports.create = async function (body){
    try{
       let curso = new Curso(body)
        await curso.save();
        return 
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


exports.getAll = async function(){
    try{
        let todosCursos = await Curso.find();
        return todosCursos;
    }catch(e){
        throw Error('Error while finding cursos')

    }
}