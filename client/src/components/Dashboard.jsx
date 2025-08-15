export default function Dashboard({ performance }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">Desempenho</h2>
      <p>Total de Questões: {performance.total}</p>
      <p>Respostas Corretas: {performance.correct}</p>
      <p>Acurácia: {performance.percentage.toFixed(2)}%</p>
    </div>
  );
}