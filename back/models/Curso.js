const mongoose = require('mongoose');
const CursoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    trilhas:{ 
        type:[mongoose.Schema.Types.ObjectId],
        ref:'trilha'
    },
 
})

module.exports = Curso = mongoose.model('Curso', CursoSchema)