import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'Viva Mexico' })

    return (
        <>
           { imageUrl && <img src={imageUrl} />} 
        </>        
    )

}