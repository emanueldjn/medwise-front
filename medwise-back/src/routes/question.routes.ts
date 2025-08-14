import { Router } from "express";
import { AppDataSource } from "../config/data-source";
import { Question } from "../entities/Question";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Listar questões (filtro opcional)
router.get("/", authMiddleware, async (req, res) => {
  const { discipline, topic } = req.query;
  const repo = AppDataSource.getRepository(Question);

  const query = repo.createQueryBuilder("q");
  if (discipline) query.andWhere("q.discipline = :discipline", { discipline });
  if (topic) query.andWhere("q.topic = :topic", { topic });

  const questions = await query.getMany();
  res.json(questions);
});

export default router;
