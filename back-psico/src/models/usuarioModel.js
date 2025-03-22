const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsuarios = async () => {
    return await prisma.usuario.findMany();
};

const getUsuarioById = async (id) => {
    return await prisma.usuario.findUnique({
        where: { id: Number(id) },
    });
};

const findUserByEmail = async (email)  => {
    return await  prisma.usuario.findUnique({ 
         where: { email } 
  });
  } 

const bcrypt = require("bcryptjs");
const addUsuario = async (email, senha, tipo) => {
    const senhaHash = await bcrypt.hash(senha, 10); // Criptografa a senha
  
    return await prisma.usuario.create({
      data: {
        email,
        senha: senhaHash,
        tipo,
      },
    });
  };

const updateUsuario = async (id, data) => {
    return await prisma.usuario.update({
        where: { id: Number(id) },
        data, // Atualiza qualquer campo enviado
    });
};

const removeUsuario = async (id) => {
    return await prisma.usuario.delete({
        where: { id: Number(id) },
    });
};

module.exports = { getUsuarios, addUsuario, updateUsuario, removeUsuario, findUserByEmail };
