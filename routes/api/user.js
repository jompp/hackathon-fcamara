const express = require('express');
const router= express.Router();
const { check, validationResult }= require("express-validator")
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("config");
const gravatar = require("gravatar")
//@route GET api/users
//@access Public
router.get('/', (req,res)=> res.send("User route"))


router.post("/",[check('name',
 'Name is required').not().isEmpty(), 
 check('email','Informe um email válido').isEmail(),
check('password',
 'Por favor, senhas com 6 caracteres minímo')
 .isLength({min:6})], async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const { name, email, password}=req.body;
    try{
        let user = await User.findOne({email});
            //See if user existes
        if(user){
            res.status(400).json({errors:[{msg:'User already exists!'}]})
        }
        const avatar = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        })
            //Encrypt password

        user = new User({
            name, 
            email,
             avatar,
             password
        })
const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
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