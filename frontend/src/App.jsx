import { useState } from 'react';
import axios from 'axios';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');
  const [logs, setLogs] = useState([]);

  const handleOperation = async (op) => {
    const res = await axios.post(`http://localhost:3000/${op}`, { a: +a, b: +b });
    setResult(res.data.result);
  };

  const fetchLogs = async () => {
    const res = await axios.get('http://localhost:3000/logs');
    setLogs(res.data);
  };

  return (
    <div>
      <h2>Microservice Calculator</h2>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="A" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="B" />
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subtract</button>
      <h3>Result: {result}</h3>
      <button onClick={fetchLogs}>View Logs</button>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log.operation}({log.a}, {log.b}) = {log.result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
