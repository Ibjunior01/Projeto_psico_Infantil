const express = require('express');
const { getProfissionais, getProfissionalById, addProfissional, updateProfissional, removeProfissional } = require('../controllers/profissionalController');

const router = express.Router();

router.get('/', getProfissionaisHandler);
router.get('/:id', getProfissionalByIdHandler);
router.post('/', addProfissionalHandler);
router.put('/:id', updateProfissionalHandler);
router.delete('/:id', removeProfissionalHandler);

module.exports = router;