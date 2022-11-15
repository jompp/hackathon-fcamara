require('dotenv/config')

const mongoose = require('mongoose');
<<<<<<< HEAD
=======
const config = require('config');
//const db = config.get('mongoURI');
>>>>>>> db3f54e9e01528de095289b9931f489743301db6

const connectDB= async ()=>{
    console.log(process.env.DB_URI)
    try{
        await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true
        })
    console.log('MongoDB Connected...')
    }catch(err){
        console.error(err.message)

        process.exit(1);
    }
}

module.exports = connectDB;