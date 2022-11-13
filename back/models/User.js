const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  progresso:[{
    id_curso:{  type:mongoose.Schema.Types.ObjectId,
      ref:'curso'},
    id_trilha: { type:mongoose.Schema.Types.ObjectId,
    ref:'trilha'},
    progresos:[{
id_conteudo:  {type:mongoose.Schema.Types.ObjectId,
ref:'conteudo'
    },check:{
      type:Boolean
    }
  }]
  }]
});

module.exports = User = mongoose.model('user', UserSchema);
