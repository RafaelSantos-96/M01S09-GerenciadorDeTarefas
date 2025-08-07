import { useState } from 'react';
import NovaTarefa from './components/NovaTarefa';
import Tarefas from './components/Tarefas';




function App() {
const [tarefas, setTarefas] = useState([]);

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



