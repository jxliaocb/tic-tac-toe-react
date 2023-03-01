import { useState } from "react"
import './App.css';
import Board from './components/Board'

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const [nexPlayer, setNextPlayer] = useState('X')
  let status;
  
  if (winner) {
      if (winner === 'Tie') {
          status = winner;
      } else {
          status = 'Winner: ' + winner;
      }
  } else {
      status = 'Next player: ' + (nexPlayer);
  }

  const handleOnPlay= (i) => {
      console.log(i)
      if(winner){
        return
      }
      const nextSquares = squares.slice();
      if (nextSquares[i]){
          return
      }
      if (nexPlayer === 'X') {
          nextSquares[i] = "X";
      }
      else {
          nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      console.log(winner)
      const result = checkWinner(nextSquares)
      if (result) {
          setWinner(result)
          console.log(winner)
          return
      }
      setNextPlayer((prev) => prev === 'X' ? 'O' : 'X')

  }

  const checkWinner = (squares) => {
      const winnerLines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 4, 8],
          [2, 4, 6],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8]
      ]
      for (const [a, b, c] of winnerLines) {
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a]
          }
      }
      const result = squares.filter(square => square === null)
      if (result.length === 0) {
          return "Tie"
      }
      return null
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setNextPlayer('X')
  }


  return (
    <div className="App">
      <h1>Tic Tae Toe</h1>
      <label className="status">{status}</label>
      <Board squares={squares} handleOnPlay={handleOnPlay}/>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
