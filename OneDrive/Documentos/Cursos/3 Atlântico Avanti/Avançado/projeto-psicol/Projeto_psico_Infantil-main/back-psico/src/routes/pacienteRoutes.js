const express = require('express');
const { getPacientesHandler, getPacienteByIdHandler, addPacienteHandler, updatePacienteHandler, removePacienteHandler } = require('../controllers/pacienteController');

const router = express.Router();

router.get('/', getPacientesHandler);
router.get('/:id', getPacienteByIdHandler);
router.post('/', addPacienteHandler);
router.put('/:id', updatePacienteHandler);
router.delete('/:id', removePacienteHandler);

module.exports = router;