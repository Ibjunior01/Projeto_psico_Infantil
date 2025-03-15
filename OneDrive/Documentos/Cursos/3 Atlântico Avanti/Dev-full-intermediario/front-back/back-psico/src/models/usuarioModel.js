const prisma = require('../prisma');

const getUsuarios = async () => {
    return await prisma.usuario.findMany();
};

const getUsuarioById = async (id) => {
    return await prisma.usuario.findUnique({
        where: {id: Number(id) },
    });
};

const addUsuario = async ({email, senha, tipo}) => {
    return await prisma.usuario.create ({
      data: { email, senha, tipo },
    });
  };

const updateUsuario = async (id, data) => {
    return await prisma.usuario.update ({
        where: { id: Number(id) },
        data:{ concluida: !usuario.concluida },
    });
};

const removeUsuario = async (id) => {
    return await prisma.usuario.delete ({
        where: {id: Number(id)},
    });
};

module.exports = { getUsuarios, addUsuarioById, addUsuario, removeUsuario };
  
