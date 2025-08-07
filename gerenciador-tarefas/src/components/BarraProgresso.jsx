export default function BarraProgresso({ totalTarefas, tarefasConcluidas }) {
  // Evitar divisão por zero
  const progresso = totalTarefas === 0 ? 0 : (tarefasConcluidas / totalTarefas) * 100;

  return (
    <div style={{ marginTop: '20px' }}>
      <div 
        style={{ 
          height: '20px', 
          width: '100%', 
          backgroundColor: '#eee', 
          borderRadius: '10px', 
          overflow: 'hidden',
          boxShadow: 'inset 0 0 5px #ccc'
        }}
      >
        <div 
          style={{ 
            height: '100%', 
            width: `${progresso}%`, 
            backgroundColor: '#4caf50', 
            transition: 'width 0.3s ease' 
          }} 
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '5px' }}>
        Progresso: {progresso.toFixed(0)}%
      </p>
    </div>
  );
}
