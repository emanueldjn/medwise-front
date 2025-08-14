import { Router } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { authMiddleware, AuthRequest } from "../middlewares/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, async (req, res) => {
  const authReq = req as AuthRequest;

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: authReq.user!.id });

  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

  const { password_hash, ...userData } = user;
  return res.json(userData);
});

export default router;
