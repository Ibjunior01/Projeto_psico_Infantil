const prisma = require('../prisma');

const getPacientes = async () => {
    return await prisma.paciente.findMany ({
        include: {
            usuario: true,
            evolucoes: true,
            atendimentos: true
        }
    });
};

const getPacienteById = async (id) => {
    return await prisma.paciente.findUnique ({
        where: { id: Number(id) },
        include: {
            usuario: true,
            evolucoes: true,
            atendimentos: true
        }
    });
};

const addPaciente = async ({ usuarioId, nome, dataNascimento, principalQueixa, historicoFamiliar, usoMedicamentos, objetivoTerapia }) => {
    return await prisma.paciente.create ({
        data: {
            usuarioId,
            nome,
            dataNascimento: new Date(dataNascimento),
            principalQueixa,
            historicoFamiliar,
            usoMedicamentos,
            objetivoTerapia
        }
    });
};

const updatePaciente = async (id, data) => {
return await prisma.paciente.update ({
    where: { id: Number(id) },
    data
});
};

const removePaciente = async (id) => {
    return await prisma.paciente.delete ({
        where: { id: Number(id) },
    });
};

module.exports = { getPacientes, getPacienteById, addPaciente, updatePaciente, removePaciente };