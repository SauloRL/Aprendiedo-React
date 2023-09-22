import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMovies} from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import debounce from 'just-debounce-it'

function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFisrstInput = useRef(true)

    useEffect(() => {

        if (isFisrstInput.current) {
            isFisrstInput.current = search === ''
            return
        }

        if (search === '') {
            setError('No se puede buscar una pelicula vacía')            
            return
        }

        if (search.match(/^\d$/)) {
            setError('No se puede buscar una pelicula con un numero') 
            return
        }

        if (search.length < 3) {
            setError('La búsqueda debe de tener al menos 3 caracteres')
            return
        }

        setError(null)

    }, [search])

    return {search,updateSearch,error}
    
}


function App() {    
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch()
    const { movies,loading , getMovies } = useMovies({search,sort})
    const debounceGetMovies = useCallback( debounce(search => {
        console.log('search', search)        
        getMovies({search})
    }, 500)
    ,[])
        
    const handleSubmit = (event) => {
        event.preventDefault()
        // const { query } = Object.fromEntries(new window.FormData(event.target))
        getMovies({ search })
    }

    const handleSort = () => {
        setSort(!sort)
    }

    const handleChange = (event) => {                
        //para que no guarde espacios en blanco
        const newSearch = event.target.value
        if(newSearch.startsWith(' '))return
        updateSearch(newSearch)        
        debounceGetMovies(newSearch)
    }
    
    return (
        <div className='page'>
            <header>
                <h1>Buscador de películas</h1>                
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        style={{
                            border: '3px solid transparent',
                            borderColor: error ? 'red' : 'transparent'
                        }}
                        onChange={handleChange}
                        value={search}
                        name='query'
                        placeholder='Avengers, Star Wars, The Matrix' type="text"
                    />
                    
                    {movies ? <input type="checkbox" onChange={handleSort} checked={sort} /> : <></>}

                    <button type='submit'>Buscar</button>
                </form>
                {error && <p><strong style={{ color: 'red'}}>{error}</strong></p>}
            </header>            
            <main>
                {
                    loading ? <p>Cargando...</p> : <Movies movies={movies} />
                }                
            </main>
        </div>        
    )
}

export default App