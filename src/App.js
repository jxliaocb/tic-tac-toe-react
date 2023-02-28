import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import { useState } from 'react';
function App() {
  const [restart, setRestart] = useState(false)

  const handleRestart = ()=> {
    setRestart(true)

  }
  return (
    <div className="App">
      <title>Tic Tae Toe</title>
      <Board restart></Board>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
