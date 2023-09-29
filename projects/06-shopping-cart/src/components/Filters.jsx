import { useState,useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const {filters,setFilters} = useFilters()
    
    const minPriceFilterId = useId()    
    const categoryFilterId = useId()

    console.log(
        minPriceFilterId, categoryFilterId
    )
    
    const handleChangeMinPrice = (event) => {
        //aqui halgo huele mal    
        setFilters(prevState => ({
          ...prevState,  minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>                
            </div>   
            <div>
                <label htmlFor="category">Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='home-decoration'>Decoración</option>
                    <option value='fragrances'>Perfumes</option>
                    <option value='skincare'>Cuidado de la Piel</option>
                    <option value='groceries'>Comestibles</option>
                </select>
            </div>
       </section> 
    )
}