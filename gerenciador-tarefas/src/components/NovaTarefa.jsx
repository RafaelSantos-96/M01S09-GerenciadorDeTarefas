import { useState } from 'react';

export default function NovaTarefa({ onAdicionar }) {
const [descricao, setDescricao] = useState('');
const [periodo, setPeriodo] = useState('Manhã');

const handleAdicionar = () => {
if (descricao.trim() === '') return;

const nova = {
descricao,
periodo,
id: Date.now()
};

onAdicionar(nova);
setDescricao('');
setPeriodo('Manhã');
};

return (
<div>
<input
type="text"
placeholder="Descrição da tarefa"
value={descricao}
onChange={(e) => setDescricao(e.target.value)}
/>
<select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
<option>Manhã</option>
<option>Tarde</option>
<option>Noite</option>
</select>
<button onClick={handleAdicionar}>Adicionar</button>
</div>
                                                                                                                                                    );
                                                                                                                                                    }
