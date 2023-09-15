import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export function App() {    
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => res.json()).then(data => {
            const { fact } = data
            setFact(fact)  
            
            const threeFirstWords = fact.split(' ',3).join(' ')
            //const firstWord = fact.split(' ').slice(0, 3).join(' ')
            //const firstWord = fact.split(' ')[0]
            //console.log(firstWord)
            console.log(threeFirstWords)
            
            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`).then(res => res.json()).then(response => {
                const { url } = response                
                console.log(response.url)
                setImageUrl(`https://cataas.com/${url}`)                
            })

        })
    }, [])
    
    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for${fact}`} />}
        </main>        
    )
}

//https://youtu.be/XYpadB4VadY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=2629