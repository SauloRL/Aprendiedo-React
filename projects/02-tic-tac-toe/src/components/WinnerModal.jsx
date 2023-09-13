import { Square } from "./Square"
export function WinnerModal ({resetGame,winner}) {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó: '
    
    return(       
        <section className='winner'>
            <div className='tex'>
                <h2 className="Wm-title">
                    {winnerText}
                </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de Nuevo</button>
                </footer>
            </div>            
        </section>
    )     
}