const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

// Buscar todos os usuários
const getUsuarios = async () => {
  return await prisma.usuario.findMany();
};

// Buscar um usuário pelo ID
const getUsuarioById = async (id) => {
  return await prisma.usuario.findUnique({
    where: { id: Number(id) },
  });
};

// Buscar usuário pelo e-mail (para login/validação)
const findUserByEmail = async (email) => {
  return await prisma.usuario.findUnique({
    where: { email },
  });
};

// Adicionar novo usuário (com senha criptografada)
const addUsuario = async ({ email, senha, tipo }) => {
  console.log("[addUsuario] Recebido:", email, senha, tipo); // debug opcional

  const senhaHash = await bcrypt.hash(senha, 10);

  return await prisma.usuario.create({
    data: {
      email,
      senha: senhaHash,
      tipo,
    },
  });
};

// Atualizar usuário existente
const updateUsuario = async (id, data) => {
  return await prisma.usuario.update({
    where: { id: Number(id) },
    data,
  });
};

// Remover usuário
const removeUsuario = async (id) => {
  return await prisma.usuario.delete({
    where: { id: Number(id) },
  });
};

// Exporta tudo
module.exports = {
  getUsuarios,
  getUsuarioById,
  findUserByEmail,
  addUsuario,
  updateUsuario,
  removeUsuario,
};
