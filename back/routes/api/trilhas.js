const express = require('express');
const router = express.Router();
const trilhaControler = require('../../controllers/trilhaController');
//@route GET api/trilhas
//@access Public
router.get('/', trilhaControler.getAll);
router.get('/:id', trilhaControler.getOne);
router.post('/', trilhaControler.create);
router.post('/addConteudo', trilhaControler.addConteudo);
router.post('/trilha-by-ids', trilhaControler.trilhaByIds);
router.delete('/:id', trilhaControler.deleteTrilha);
router.put('/:id', trilhaControler.updateTrilha);

module.exports = router;
