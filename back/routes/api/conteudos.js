const express = require('express');
const router= express.Router();
const conteudosController = require('../../controllers/conteudoController')
router.post("/",conteudosController.create)

module.exports = router;