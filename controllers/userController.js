
const { check, validationResult }= require("express-validator")
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require("config");
const gravatar = require("gravatar")
const UserService = require("../services/userService")


const create = async(req,res,next)=>{
    check('name',
    'Name is required').not().isEmpty(), 
    check('email','Informe um email válido').isEmail(),
   check('password',
    'Por favor, senhas com 6 caracteres minímo')
    .isLength({min:6})
           const errors = validationResult(req)
       if(!errors.isEmpty()){
           return res.status(400).json({errors:errors.array()})
       }
       const { name, email, password}=req.body;
       try{
           let user = await UserService.getOneUser({email});
           if(user){
               res.status(400).json({errors:[{msg:'User already exists!'}]})
return
            }

           const avatar = gravatar.url(email, {
               s:'200',
               r:'pg',
               d:'mm'
           })
user = await UserService.create({
    name, 
    email,
     avatar,
     password
})
        
           const payload = {
               user:{
                   id:user.id,
               }
           }
           jwt.sign(payload,config.get('jwtSecret'),{
               expiresIn:360000
           },(err,token)=>{
               if(err) throw err;
               res.json({token});
           } )
   
       }catch(err){
   console.error(err.message)
   res.status(500).send('Server error')
       }
   
       console.log(req.body)
   }

module.exports = {create}