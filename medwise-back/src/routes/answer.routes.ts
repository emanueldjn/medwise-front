import { Router } from "express";
import { AppDataSource } from "../config/data-source";
import { UserAnswer } from "../entities/UserAnswer";
import { Question } from "../entities/Question";
import { authMiddleware, AuthRequest } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const { questionId, selectedOption } = req.body;
  const authReq = req as AuthRequest;
  const userId = authReq.user!.id;

  const repo = AppDataSource.getRepository(UserAnswer);
  const questionRepo = AppDataSource.getRepository(Question);

  const question = await questionRepo.findOneBy({ id: questionId });
  if (!question) return res.status(404).json({ message: "Questão não encontrada" });

  const answer = repo.create({
    question_id: questionId,
    user_id: userId,
    selected_option: selectedOption,
    is_correct: selectedOption === question.correct_option,
    answered_at: new Date(),
  });

  await repo.save(answer);

  res.json({
    message: "Resposta registrada",
    is_correct: answer.is_correct,
  });
});

export default router;
