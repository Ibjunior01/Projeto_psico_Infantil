const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UserModel = require("../models/usuarioModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    console.log("Dados recebidos no backend:", req.body);
  try {
    const { email, senha, tipo } = req.body;

    if (!email || !senha || !tipo) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

    const userExists = await UserModel.findUserByEmail(email);
    if (userExists) return res.status(400).json({ error: "Email já cadastrado" });

    await UserModel.addUsuario({ email, senha, tipo });
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error("Erro real ao registrar usuário:", error);
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log(email, senha);
    const user = await UserModel.findUserByEmail(email);
    console.log("teste", user);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const validPassword = await bcrypt.compare(senha, user.senha);
    if (!validPassword) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign(
      { userId: user.id, tipo: user.tipo },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, tipo: user.tipo });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};

const profile = async (req, res) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { id: req.user.userId }, 
      select: {
        id: true,
        email: true,
        tipo: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res.status(500).json({ error: "Erro ao buscar perfil" });
  }
};



module.exports = { register, login, profile };