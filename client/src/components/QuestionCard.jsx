import { useState } from 'react';

export default function QuestionCard({ question, onSubmit }) {
  const [selected, setSelected] = useState('');

  const handleSubmit = () => {
    onSubmit(question.id, selected);
    setSelected('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">{question.text}</h2>
      {question.options.map((option, index) => (
        <div key={index} className="my-2">
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          <label className="ml-2">{option}</label>
        </div>
      ))}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={!selected}
      >
        Enviar
      </button>
    </div>
  );
}