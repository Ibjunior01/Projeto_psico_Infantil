const prisma = require('../prisma');

const getAtendimentos = async () => {
    return await prisma.atendimento.findMany ({
        include: {
            paciente: true,
            profissional: true
        }
    });
};

const getAtendimentoById = async (id) => {
    return await prisma.atendimento.findUnique ({
        where: { id: Number(id) },
        include: {
            paciente: true,
            profissional: true
        }
    });
};

const addAtendimento = async ({ pacienteId, profissionalId, dataHora, status }) => {
    return await prisma.atendimento.create ({
        data: {
            pacienteId, 
            profissionalId, 
            dataHora, 
            status
        }
    });
};

const updateAtendimento = async (id, data) => {
    return await prisma.atendimento.update ({
        where: { id: Number(id) },
        data
    });
};

const removeAtendimento = async (id) => {
    return await prisma.atendimento.delete ({
        where: { id: Number(id) },
    });
};

module.exports = { getAtendimentos, getAtendimentoById, addAtendimento, updateAtendimento, removeAtendimento };