export default function BarraProgresso({ totalTarefas, tarefasConcluidas }) {
  const progresso = totalTarefas === 0 ? 0 : (tarefasConcluidas / totalTarefas) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fg"
          style={{ width: `${progresso}%` }}
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '5px' }}>
        Progresso: {progresso.toFixed(0)}%
      </p>
    </div>
  );
}
