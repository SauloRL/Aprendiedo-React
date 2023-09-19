import './App.css'
import { useRef,useState } from 'react'
// useRef permite crear una referancia mutable que persiste durante todo el ciclo de vida de tu componente
import { Movies } from './Movies'
import { useMovies } from './hooks/useMovies'

function App() {  
  const { movies } = useMovies()
  const inputRef = useRef()

  //const para el useState
  //const [fieldsForm, setFields] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    //utilizando referencia 
    /*
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log('Con useRef: ' + value)    
    */
    
    
    //para recuperar un solo dato--------------
    /*
    const field = new FormData(event.target)
    const name = field.get('query')
    console.log('sin useRef: ' + name)
    */
        
    //para recuperar todos los datos como un objeto -------------
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)    
    
    // const ejemFields = [{ query: 'ejemplo1', otro: 'ejemplo2' }]
    
    // console.log(ejemFields)

    // setFields(ejemFields)

    //y si quisiera meter datos al form a los imputs 
  

    
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' ref={inputRef} placeholder='Avengers, Star wars, The Matrix...'/>          
          <button type='submit'>Buscar</button>          
        </form>
      </header>            
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
//https://youtu.be/GOEiMwDJ3lc?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=2460