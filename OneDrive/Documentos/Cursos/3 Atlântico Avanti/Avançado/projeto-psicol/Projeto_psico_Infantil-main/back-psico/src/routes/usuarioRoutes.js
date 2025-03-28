const express = require('express');
const { getUsuariosHandler, addUsuarioHandler, updateUsuarioHandler, removeUsuarioHandler } = require('../controllers/usuarioController');

const router = express.Router();

router.get('/', getUsuariosHandler);
router.post('/', addUsuarioHandler);
router.put('/:id', updateUsuarioHandler);
router.delete('/:id', removeUsuarioHandler);

module.exports = router;