const prisma = require('../prisma');

const getEvolucoesClinicas = async () => {
    return await prisma.evolucaoClinica.findMany ({
        include: {           
            paciente: true,
            profissional: true
        }
    });
};

const getEvolucaoClinicaById = async (id) => {
    return await prisma.evolucaoClinica.findUnique ({
        where: { id: Number(id) },
        include: {
            paciente: true,
            profissional: true
        }
    });
};

const addEvolucaoClinica= async ({ pacienteId, profissionalId, relatoAtendimento, ajustesNoTratamento }) => {
    return await prisma.evolucaoClinica.create ({
        data: {
            pacienteId, 
            profissionalId, 
            relatoAtendimento, 
            ajustesNoTratamento
        }
    });
};

const updateEvolucaoClinica= async (id, data) => {
return await prisma.evolucaoClinica.update ({
    where: { id: Number(id) },
    data
    });
};

const removeEvolucaoClinica= async (id) => {
    return await prisma.evolucaoClinica.delete ({
        where: { id: Number(id) },
    });
};

module.exports = { getEvolucoesClinicas, getEvolucaoClinicaById, addEvolucaoClinica, updateEvolucaoClinica, removeEvolucaoClinica };