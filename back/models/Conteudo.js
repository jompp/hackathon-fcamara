const mongoose = require('mongoose');
const ConteudoSchema = new mongoose.Schema({
   titulo:{
    type:String,
        required:true
   },
   tipo:{
    type:String,
    required:true
   },
   origem:{
    type:String, 
    required:true
   },
   duracao:{
    type:Date, 
    required:true
   },
   link:{
    type:String
   }
})

module.exports = Conteudo= mongoose.model('Conteudo', ConteudoSchema)