export default function Tarefas({ tarefas, onAlternarStatus }) {
  // Filtrar por período
  const tarefasManha = tarefas.filter(t => t.periodo === 'Manhã');
  const tarefasTarde = tarefas.filter(t => t.periodo === 'Tarde');
  const tarefasNoite = tarefas.filter(t => t.periodo === 'Noite');

  // Quantidade de tarefas concluídas
  const totalConcluidas = tarefas.filter(t => t.status === true).length;
  const totalTarefas = tarefas.length;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {['Manhã', 'Tarde', 'Noite'].map(periodo => (
        <div key={periodo} style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
          <h3>{periodo}</h3>
          <ul>
            {tarefas
              .filter(t => t.periodo === periodo)
              .map(t => (
                <li key={t.id}>
                  <input type="checkbox" checked={t.status} onChange={() => onAlternarStatus(t.id)} /> 
                </li>
              ))}
          </ul>
        </div>
      ))}

      <div style={{ marginTop: '20px', width: '100%' }}>
        <strong>{`${totalConcluidas} de ${totalTarefas} tarefas concluídas`}</strong>
      </div>
    </div>
  );
}
