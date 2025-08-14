import { AppDataSource } from "./config/data-source";
import { Question } from "./entities/Question";

const questionsData = [
  {
    discipline: "Cardiologia",
    topic: "ECG",
    statement: "Qual é o ritmo cardíaco normal?",
    options: ["Bradicardia", "Taquicardia", "Normal", "Arritmia"],
    correct_option: "Normal",
    explanation: "O ritmo cardíaco normal em repouso é de 60 a 100 bpm.",
  },
  {
    discipline: "Neurologia",
    topic: "Reflexos",
    statement: "Qual reflexo é testado ao bater no joelho?",
    options: ["Bicipital", "Tricipital", "Patelar", "Aquileu"],
    correct_option: "Patelar",
    explanation: "O reflexo patelar é testado ao bater no tendão patelar.",
  },
  {
    discipline: "Gastroenterologia",
    topic: "Fígado",
    statement: "Qual exame avalia a função hepática?",
    options: ["Hemograma", "Bilirrubina", "ECG", "Raio-X"],
    correct_option: "Bilirrubina",
    explanation: "A dosagem de bilirrubina é usada para avaliar função hepática.",
  },
];

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Question);

  for (const q of questionsData) {
    const question = repo.create(q);
    await repo.save(question);
  }

  console.log("Questões de teste inseridas!");
  process.exit();
}

seed();
