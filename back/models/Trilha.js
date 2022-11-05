const mongoose = require('mongoose');
const TrilhaSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
})