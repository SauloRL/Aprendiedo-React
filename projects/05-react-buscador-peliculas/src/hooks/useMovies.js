import { useState,useRef,useMemo,useCallback } from 'react'
import { searchMovies } from '../services/movie.js'

export function useMovies({search,sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch  = useRef(search)
      
  const getMovies = useCallback( async ({ search }) => { 
      if(search === previousSearch.current ) return
      try {
        setLoading(true)
        setError(null)      
        previousSearch.current = search
        const newMovies = await searchMovies({ search })      
        setMovies(newMovies)                  
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)        
      }   
    },[])
      
  const sortedMovies = useMemo(() => {
    
    if (movies) {
       console.log('memoSortedMovies')
      return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies                        
    }
    //else {
    //   return movies
    // }

  }, [sort, movies])  

  //getSortedMovies(movies)
  // :sortedMovies
  return {movies:sortedMovies ,getMovies,loading}
}
