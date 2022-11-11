const express = require('express');
const connectDB = require('./config/db');
require('dotenv/config')

const app = express();
//Connect Database
connectDB();
//Init Middleware
app.use(express.json({extended:false}));
app.get('/', (req,res)=> res.send('API Running'));
app.use('/api/user', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/curso', require('./routes/api/curso'))
app.use('/api/conteudo', require('./routes/api/conteudos'))

app.use('/api/trilhas', require('./routes/api/trilhas'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));

