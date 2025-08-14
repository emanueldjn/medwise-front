import { Router, Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

// Registro
router.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const existing = await userRepo.findOneBy({ email });
  if (existing) return res.status(400).json({ message: "Email já cadastrado" });

  const password_hash = await bcrypt.hash(password, 10);
  const user = userRepo.create({ name, email, password_hash, role: "student" });
  await userRepo.save(user);

  res.json({ message: "Usuário criado com sucesso" });
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email });
  if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ message: "Credenciais inválidas" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
  const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

  res.json({ token, refreshToken });
});

export default router;
