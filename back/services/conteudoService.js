const Conteudo = require('../models/Conteudo')
exports.getOneConteudo = async function(body){
    try{
     let conteudo = await Conteudo.findOne({body});
 
     return conteudo
    }catch(e){
        
     throw Error('Error while finding conteudo')
    }  
 }

 exports.getById = async function(body){
    try{
     let conteudo = await Conteudo.findById(body._id);
 
     return conteudo
    }catch(e){
        console.log(e)
     throw Error('Error while finding conteudo')
    }  
 }
exports.create = async function (body){
    try{
       let conteudo = new Conteudo(body)
        await conteudo.save();
        return "Conteudo criado!"
    }catch(e){
        console.log(e)
        throw Error("Error while creating conteudo")
    }
}
