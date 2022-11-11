const Trilha = require('../models/Trilha')
exports.getTrilhaByTitulo = async function(body){
    try{
     let trilha = await Trilha.find({"titulo":body.titulo});
 
 return trilha
    }catch(e){
     throw Error('Error while finding trilha')
    }  
 }

 
exports.create = async function (body){
    try{
       let trilha = new Trilha(body)
        await trilha.save();
        return "Trilha criada!"
    }catch(e){
        throw Error("Error while creating trilha")
    }
}


exports.addConteudo= async function( trilha, id){
    
    try{
       let trilhaAtualizar = new Trilha()
       trilhaAtualizar = await Trilha.find({"titulo":trilha});
       trilhaAtualizar[0].conteudos = [...trilhaAtualizar[0].conteudos,id]
       await trilhaAtualizar[0].save();
       return "Conteúdo adicionado na trilha"
   }catch(e){
       throw Error("Error while creating trilha")
   }
}
