import { useEffect, useState } from "react"
import { getRandomFact } from "../services/fact"

export function useCatFact() {
    const [fact, setFact] = useState()    
    const refreshFact = () => {
       getRandomFact().then(newFact => setFact(newFact)) 
    }  
    //efecto para recuperar la cita
    useEffect(refreshFact, [])
    return {fact,refreshFact}
}