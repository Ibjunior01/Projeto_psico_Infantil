const usuarioModel = require('../models/usuarioModel'); // Importa o modelo correto
const { getUsuarios, updateUsuario, removeUsuario } = require('../models/usuarioModel'); // Funções adicionais

const getUsuariosHandler = async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

const addUsuarioHandler = async (req, res) => {
    try {
        const { email, senha, tipo } = req.body;

        // Validação simples de campos obrigatórios
        if (!email || !senha || !tipo) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        console.log("Recebendo requisição para adicionar usuário:", req.body); // Debug

        const usuario = await usuarioModel.addUsuario(email, senha, tipo);

        console.log("Usuário adicionado com sucesso:", usuario); // Debug

        res.status(201).json(usuario);
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error); // Mostra erro no terminal

        res.status(500).json({ error: "Erro ao adicionar usuário", details: error.message });
    }
};

const updateUsuarioHandler = async (req, res) => {
    const { id } = req.params;
    const { email, senha, tipo } = req.body;

    try {
        const updatedUsuario = await updateUsuario(id, { email, senha, tipo });

        // Verifica se o recurso foi encontrado
        if (!updatedUsuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(updatedUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
    }
};

const removeUsuarioHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const removed = await removeUsuario(id);

        // Verifica se o recurso foi encontrado
        if (!removed) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover usuário', details: error.message });
    }
};

module.exports = {
    getUsuariosHandler,
    addUsuarioHandler,
    updateUsuarioHandler,
    removeUsuarioHandler
};