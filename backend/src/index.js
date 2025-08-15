const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota para listar todas as questões
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    res.json(questions);
  } catch (error) {
    console.error('Erro ao buscar questões:', error);
    res.status(500).json({ error: 'Erro ao buscar questões' });
  }
});

// Rota para submeter uma resposta
app.post('/api/answers', async (req, res) => {
  try {
    const { userId, questionId, selected } = req.body;
    const question = await prisma.question.findUnique({ where: { id: questionId } });
    if (!question) {
      return res.status(404).json({ error: 'Questão não encontrada' });
    }
    const isCorrect = question.correct === selected;
    const answer = await prisma.answer.create({
      data: { userId, questionId, selected, isCorrect },
    });
    res.status(201).json(answer);
  } catch (error) {
    console.error('Erro ao submeter resposta:', error);
    res.status(500).json({ error: 'Erro ao submeter resposta' });
  }
});

// Rota para obter desempenho do usuário
app.get('/api/performance/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const answers = await prisma.answer.findMany({
      where: { userId: parseInt(userId) },
      include: { question: true },
    });
    const total = answers.length;
    const correct = answers.filter(a => a.isCorrect).length;
    res.json({
      total,
      correct,
      percentage: total ? (correct / total) * 100 : 0,
    });
  } catch (error) {
    console.error('Erro ao buscar desempenho:', error);
    res.status(500).json({ error: 'Erro ao buscar desempenho' });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));