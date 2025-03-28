const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, senha, tipo } = req.body;
    console.log("Dados recebidos no registro:", { email, tipo });

    // Validação de campos obrigatórios
    if (!email || !senha || !tipo) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    // Verifica se usuário já existe
    const userExists = await prisma.usuario.findUnique({ 
      where: { email } 
    });
    
    if (userExists) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Hash da senha (10 é o custo do salt)
    const hashedPassword = await bcrypt.hash(senha, 10);
    console.log("Senha hasheada:", hashedPassword);

    // Cria o usuário com a senha hasheada
    const newUser = await prisma.usuario.create({
      data: {
        email,
        senha: hashedPassword,
        tipo
      }
    });

    // Resposta sem expor dados sensíveis
    res.status(201).json({ 
      message: "Usuário cadastrado com sucesso",
      user: { id: newUser.id, email: newUser.email }
    });

  } catch (error) {
    console.error("Erro completo no registro:", error);
    res.status(500).json({ 
      error: "Erro ao registrar usuário",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log("Tentativa de login para:", email);

    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!user) {
      console.log("Usuário não encontrado");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    console.log("Usuário encontrado:", user);
    console.log("Senha fornecida:", senha);
    console.log("Hash armazenado:", user.senha);

    const validPassword = await bcrypt.compare(senha, user.senha);
    console.log("Resultado da comparação:", validPassword);

    if (!validPassword) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não está configurado");
    }

    const token = jwt.sign(
      { userId: user.id, tipo: user.tipo },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login bem-sucedido para:", email);
    res.json({ token, tipo: user.tipo });

  } catch (error) {
    console.error("Erro completo no login:", {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      error: "Erro ao fazer login",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    });
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