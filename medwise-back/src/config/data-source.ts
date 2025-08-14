import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Question } from "../entities/Question"; 
import dotenv from "dotenv";
import { UserAnswer } from "../entities/UserAnswer";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // cria as tabelas automaticamente
  logging: false,
  entities: [User, Question, UserAnswer],
  subscribers: [],
});
