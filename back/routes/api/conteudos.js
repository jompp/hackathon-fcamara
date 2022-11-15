const express = require('express');
const router = express.Router();
const conteudosController = require('../../controllers/conteudoController');

router.post('/', conteudosController.create);
router.get('/get-all', conteudosController.getAll);
router.delete('/:id', conteudosController.deleteConteudo);
router.get('/:id', conteudosController.getOne);
router.put('/:id', conteudosController.atualizarConteudo);

module.exports = router;
