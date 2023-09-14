import { useState, useEffect } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkEndGame } from './logic/board'
import { saveGameToStorage, resetGameStorage } from './logic/Storage.js'

function App() {

  //cargar del localstorage los estados iniciales para recuperar la partida.
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)
  //null no hay ganador , false hay empate


  //para resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updatedBoard = (index) => {
    //si ya existe algo no sobreescribas termina la funcion
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si existe ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  //para guardar la partida
  useEffect(() => {
    saveGameToStorage({
      board: board,
      turn: turn
    })

  }, [turn, board])

  return (
    <main className='board'>
      <h1>Tiac Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updatedBoard={updatedBoard} >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />



    </main>
  )
}

//https://youtu.be/qkzcjwnueLA?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=3584

export default App

