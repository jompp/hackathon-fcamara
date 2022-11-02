const express = require('express');
const router= express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User');
const { check, validationResult }= require("express-validator")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require("config");


//@route GET api/auth
//@access Public
router.get('/', auth,async (req,res)=> {
    try{
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    }catch(err){
        console.error(err.message)
        res.status(500).send("Server error")
    }
    // res.send("Auth route"))
})
//@route POST api/auth
router.post("/",[check(
 check('email','Informe um email válido').isEmail(),
check('password',
 'Digite sua senha').exists)], async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const { email, password}=req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json({errors:
                [{msg:'Credenciais inválidas!'}]})
        }
       

    //passwords matches?
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.sttatus(400).json({erros:[{mdg:'Credenciais inválidas!'}]})

        }
        const payload = {
            user:{
                id:user.id,
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),
        {            expiresIn:360000
        },(err,token)=>{
            if(err) throw err;
            res.json({token});
        } )
        // res.send("User created!")

    }catch(err){
console.error(err.message)
res.status(500).send('Server error')
    }

    //Get users gravatar?


    //Return jsonwebtoken
    console.log(req.body)
})
module.exports = router;