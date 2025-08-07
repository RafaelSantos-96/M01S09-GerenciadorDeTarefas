import { useState, useEffect } from 'react';
import NovaTarefa from './components/NovaTarefa';
import Tarefas from './components/Tarefas';
import BarraProgresso from './components/BarraProgresso';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (tarefa) => {
    setTarefas(prevTarefas => [...prevTarefas, { ...tarefa, status: false }]);
  };

  const alternarStatus = (id) => {
    setTarefas(prevTarefas =>
      prevTarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
      )
    );
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <Tarefas tarefas={tarefas} onAlternarStatus={alternarStatus} />
      <BarraProgresso
        totalTarefas={tarefas.length}
        tarefasConcluidas={tarefas.filter(t => t.status).length}
      />
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




