import { useState } from "react"
import Square from "./square"
import './Board.css'

const Board = () => {
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

    const handleSquareClick = (i) => {
        console.log(i)
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
        console.log(result)
        if (result.length === 0) {
            return "Tie"
        }
        return null
    }

    return (
        <div>
            <label className="status">{status}</label>
            <div className="board-row">
                <Square value={squares[0]} handleSquareClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} handleSquareClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} handleSquareClick={() => handleSquareClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleSquareClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} handleSquareClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} handleSquareClick={() => handleSquareClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleSquareClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} handleSquareClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} handleSquareClick={() => handleSquareClick(8)} />
            </div>
        </div>
    )
}

export default Board;