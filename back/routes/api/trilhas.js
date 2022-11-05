const express = require('express');
const router= express.Router();
//@route GET api/trilhas
//@access Public
router.get('/', (req,res)=> res.send("Trilhas route"))

module.exports = router;