const express = require('express');
const { getEvolucoesClinicas, getEvolucaoClinicaById, addEvolucaoClinica, updateEvolucaoClinica, removeEvolucaoClinica } = require('../controllers/evolucaoClinicaController');

const router = express.Router();

router.get('/', getEvolucoesClinicasHandler);
router.get('/:id', getEvolucaoClinicaByIdHandler);
router.post('/', addEvolucaoClinicaHandler);
router.put('/:id', updateEvolucaoClinicaHandler);
router.delete('/:id', removeEvolucaoClinicaHandler);

module.exports = router;