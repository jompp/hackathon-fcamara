const mongoose = require('mongoose');
const TrilhaSchema = new mongoose.Schema({
   titulo:{
    type:String,
        required:true
   },
   conteudos:{ 
    type:[mongoose.Schema.Types.ObjectId],
    ref:'conteudo'
},
tempo_estimado : {
        type:Date, 
        required:true
       
}
})

module.exports = Trilha= mongoose.model('Trilha', TrilhaSchema)