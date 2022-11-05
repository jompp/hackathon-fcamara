const express = require('express');
const router= express.Router();
const userController = require('../../controllers/userController')
//@route GET api/users
//@access Public
router.get('/', (req,res)=> res.send("User route"))


router.post("/",userController.create)

module.exports = router;