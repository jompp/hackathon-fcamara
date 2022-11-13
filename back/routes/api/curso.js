const express = require('express');
const router= express.Router();
const cursoController = require('../../controllers/cursoController')
const auth = require("../../middleware/auth")
router.post("/",cursoController.create)
router.post("/addTrilha",  cursoController.addTrilha)
router.get("/", cursoController.getAll)
router.get("/:id", cursoController.getById)

module.exports = router;