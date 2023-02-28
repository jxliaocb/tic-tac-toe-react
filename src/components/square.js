import './Square.css'
const Square = ({value, handleSquareClick}) => {
    console.log(value)

    return <button className = "square-button" onClick={handleSquareClick}>{value}</button> 
}

export default Square;