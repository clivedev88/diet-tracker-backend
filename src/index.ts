import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Olá! Seja bem-vindo ao Diet-Tracker!');
});

app.listen(PORT, () => {
     console.log((`Servidor rodando na porta http://localhost:${PORT}`));
});