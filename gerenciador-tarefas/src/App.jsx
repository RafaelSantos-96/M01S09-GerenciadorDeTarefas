import { useState } from 'react';
import NovaTarefa from './components/NovaTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.descricao} - <strong>{tarefa.periodo}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



