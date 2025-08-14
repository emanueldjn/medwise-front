import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const userRepo = AppDataSource.getRepository(User);
    const existingUser = await userRepo.findOneBy({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = userRepo.create({ name, email, password_hash });
    await userRepo.save(user);

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    return res.status(500).json({ message: "Erro no servidor", error: err });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email });

    if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) return res.status(400).json({ message: "Senha inválida" });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    return res.status(500).json({ message: "Erro no servidor", error: err });
  }
};
