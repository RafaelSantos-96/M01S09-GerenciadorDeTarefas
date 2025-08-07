export default function Tarefas({ tarefas, onAlternarStatus }) {
  // Quantidade de tarefas concluídas
  const totalConcluidas = tarefas.filter(t => t.status === true).length;
  const totalTarefas = tarefas.length;
  

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {['Manhã', 'Tarde', 'Noite'].map(periodo => (
        <div
          key={periodo}
          style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}
        >
          <h3>{periodo}</h3>
          <ul>
            {tarefas
              .filter(t => t.periodo === periodo)
              .map(t => (
                <li key={t.id}>
                  <input
                    type="checkbox"
                    checked={t.status}
                    onChange={() => onAlternarStatus(t.id)}
                  />{' '}
                  <span
                    style={{
                      textDecoration: t.status ? 'line-through' : 'none',
                      color: t.status ? 'lightgray' : 'black'
                    }}
                  >
                    {t.descricao}
                  </span>
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
