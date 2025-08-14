import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import questionRoutes from "./routes/question.routes";
import answerRoutes from "./routes/answer.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com PostgreSQL estabelecida!");
  })
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
