import { useState } from "react"
import './GameBoard.css';

function GameSquare({ val }) {
    return (
        <div className="game-square">
            {val}
        </div> 
    )
}

export default function GameBoard() {
    const [ board, setBoard ] = useState([...Array(4)].map(e=>Array(4).fill(0)));

    return (
        <div className="game-board">
            {
                [...board].map(row => row.map(cell => <GameSquare val={cell}/>))
            }
        </div>
    )
}