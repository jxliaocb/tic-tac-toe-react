import Square from "./square"
import './Board.css'

const Board = ({squares, handleOnPlay}) => {

    return (
        <div>
            <div className="board-row">
                <Square value={squares[0]} handleSquareClick={() => handleOnPlay(0)} />
                <Square value={squares[1]} handleSquareClick={() => handleOnPlay(1)} />
                <Square value={squares[2]} handleSquareClick={() => handleOnPlay(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleSquareClick={() => handleOnPlay(3)} />
                <Square value={squares[4]} handleSquareClick={() => handleOnPlay(4)} />
                <Square value={squares[5]} handleSquareClick={() => handleOnPlay(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleSquareClick={() => handleOnPlay(6)} />
                <Square value={squares[7]} handleSquareClick={() => handleOnPlay(7)} />
                <Square value={squares[8]} handleSquareClick={() => handleOnPlay(8)} />
            </div>
        </div>
    )
}

export default Board;