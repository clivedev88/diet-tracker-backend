import express, { Request, Response } from 'express';
import connectDB from './config/db';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao banco de dados MongoDB
connectDB();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
    res.send('Olá! Seja bem-vindo ao Diet-Tracker!');
});

// Iniciar o servidor
app.listen(PORT, () => {
     console.log((`Servidor rodando na porta http://localhost:${PORT}`));
});