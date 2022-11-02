const express = require('express');
const router= express.Router();
const { check, validationResult }= require("express-validator/check")
//@route GET api/users
//@access Public
router.get('/', (req,res)=> res.send("User route"))


router.post("/",[check('name',
 'Name is required').not().isEmpty(), 
 check('email','Informe um email válido').isEmail(),
check('password',
 'Por favor, senhas com 6 caracteres minímo')
 .isLength({min:6})],
 (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    //See if user existes

    //Get users gravatar?

    //Encrypt password

    //Return jsonwebtoken
    console.log(req.body)
    res.send("User created!")
})
module.exports = router;