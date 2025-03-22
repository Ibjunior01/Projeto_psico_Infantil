const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const authRoutes = require('./src/routes/authRoutes')


const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso! 🚀');
});

// Definição das rotas
app.use('/usuarios', usuarioRoutes);
app.use('/auth',authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
