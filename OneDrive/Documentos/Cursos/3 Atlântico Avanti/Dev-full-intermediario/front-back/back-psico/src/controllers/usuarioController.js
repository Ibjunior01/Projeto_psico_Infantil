const { getUsuarios, addUsuarioById, addUsuario, updatedUsuario, removeUsuario } = require('../models/usuarioModel');


const getUsuariosHandler = async (req, res) => {
    try {
      const usuarios = await getUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  };
  
const addUsuarioHandler = async (req, res) => {
    const { email, senha, tipo } = req.body;

    if (!email || !senha || !tipo) {
      return res.status(400).json({ error: 'Todos os campos (email, senha, tipo) são obrigatórios' });
    }
  
    try {
      const newUsuario = await addUsuario({ email, senha, tipo });
      res.status(201).json(newUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
  };
  
const updateUsuarioHandler = async (req, res) => {
    const { id } = req.params;
    const { email, senha, tipo } = req.body;

    try {
      const updatedUsuario = await updateUsuario(id, { email, senha, tipo });
      res.json(updatedUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  };
  
const removeUsuarioHandler = async (req, res) => {
    const { id } = req.params;

    try {
      await removeUsuario(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao remover usuário' });
    }
  };

  module.exports = { 
    getUsuariosHandler, 
    addUsuarioHandler, 
    updateUsuarioHandler, 
    removeUsuarioHandler 
};