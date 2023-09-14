import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardToCheck) => {
  //revisamos todas las combinaciones ganadores 
  //para ver si es x u o
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a] //x u o 
    }
  }
  return null
}


export const checkEndGame = (newBoard) => {
  //regresamos empate si no hay mas espacios en el tablero
  return newBoard.every((square) => square != null)
}