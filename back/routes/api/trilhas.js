const express = require('express');
const router= express.Router();
const trilhaControler = require('../../controllers/trilhaController')
//@route GET api/trilhas
//@access Public
router.get('/', (req,res)=> res.send("Trilhas route"))
router.post('/', trilhaControler.create)
// router.post('/', trilhaControler.create)

module.exports = router;