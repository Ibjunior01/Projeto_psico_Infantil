const prisma = require('../prisma');

const getProfissionais = async () => {
    return await prisma.profissional.findMany ({
        include: {
            usuario: true,
            atendimentos: true
        }
    });
};

const getProfissionalById = async (id) => {
    return await prisma.profissional.findUnique ({
        where: { id: Number(id) },
        include: {
            usuario: true,
            atendimentos: true
        }
    });
};

const addProfissional = async ({ usuarioId, nome, especialidade, localizacao, faixaEtaria, matriculaProfissional }) => {
    return await prisma.profissional.create ({
        data: {
            usuarioId,
            nome,
            especialidade,
            localizacao,
            faixaEtaria,
            matriculaProfissional
        }
    });
};

const updateProfissional = async (id, data) => {
return await prisma.profissional.update ({
    where: { id: Number(id) },
    data
    });
};

const removeProfissional = async (id) => {
    return await prisma.profissional.delete ({
        where: { id: Number(id) },
    });
};

module.exports = { getProfissionais, getProfissionalById, addProfissional, updateProfissional, removeProfissional };