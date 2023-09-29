import { createContext, useState } from "react";

//Singleton --> Modulo de JavaScript

//Este es el que consumimos 
export const FiltersContext = createContext() //solo se crea una vez

//Este es el que nos provee el acceso a los datos
export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({category:'all', minPrice:0})
    return (
        <FiltersContext.Provider value={{filters,setFilters}}>
        {
        children
        }
        </FiltersContext.Provider>
    )
}

