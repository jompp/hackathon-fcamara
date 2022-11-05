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