const express = require('express');
const router= express.Router();
const cursoController = require('../../controllers/cursoController')
router.post("/",cursoController.create)
router.post("/addTrilha", cursoController.addTrilha)
router.get("/", cursoController.getAll)
module.exports = router;