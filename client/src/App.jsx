import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Dashboard from './components/Dashboard';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [performance, setPerformance] = useState({ total: 0, correct: 0, percentage: 0 });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://medwise-topaz.vercel.app';
    fetch(`${apiUrl}/api/questions`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error('Erro ao buscar questões:', err));
    fetch(`${apiUrl}/api/performance/1`)
      .then(res => res.json())
      .then(data => setPerformance(data))
      .catch(err => console.error('Erro ao buscar desempenho:', err));
  }, []);

  const handleSubmitAnswer = async (questionId, selected) => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://medwise-topaz.vercel.app';
    try {
      await fetch(`${apiUrl}/api/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 1, questionId, selected }),
      });
      const res = await fetch(`${apiUrl}/api/performance/1`);
      setPerformance(await res.json());
    } catch (err) {
      console.error('Erro ao submeter resposta:', err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">MedWise</h1>
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} onSubmit={handleSubmitAnswer} />
      ))}
      <Dashboard performance={performance} />
    </div>
  );
}