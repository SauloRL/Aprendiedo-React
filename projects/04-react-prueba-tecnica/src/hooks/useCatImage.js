import { useEffect, useState } from "react"
import { getRandomImg } from "../services/fact"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

//custom hooks
export function useCatImage({ fact }) {        
    
    const [imageUrl, setImageUrl] = useState()

    //para recuperar la imagen
    useEffect(() => {
        if (fact) { 
            const threeFirstWords = fact.split(' ', 3).join(' ')        
            getRandomImg(threeFirstWords).then( newUrl => setImageUrl(newUrl))                
        } else {
            setImageUrl(null)
        }        
    }, [fact])                

    return { imageUrl: imageUrl ? `${CAT_PREFIX_IMAGE_URL}${imageUrl}`: null }
}