import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from "./hooks/useCatImage"
import { Otro } from './Components/Otro'

export function App() {    
    const {fact,refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({fact})
                        
    
    const handleClick = async () => {
        refreshFact()
    }
            
    return (
        <main>
            <h1>App de gatitos</h1>            
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p><strong>{fact}</strong></p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for${fact}`} />}            
            
            <Otro />                        
        </main>        
    )
}

//https://youtu.be/XYpadB4VadY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=2959