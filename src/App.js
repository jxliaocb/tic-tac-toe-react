import './App.css';
import Board from './components/Board'

function App() {

  const handleRestart = () => {
    //Todo
  }
  return (
    <div className="App">
      <title>Tic Tae Toe</title>
      <Board></Board>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
