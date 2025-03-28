const express = require('express');
const { getAtendimentosHandler, getAtendimentoByIdHandler, addAtendimentoHandler, updateAtendimentoHandler, removeAtendimentoHandler } = require('../controllers/atendimentoController');

const router = express.Router();

router.get('/', getAtendimentoesHandler);
router.get('/:id', getAtendimentoeByIdHandler);
router.post('/', addAtendimentoeHandler);
router.put('/:id', updateAtendimentoeHandler);
router.delete('/:id', removeAtendimentoeHandler);

module.exports = router;