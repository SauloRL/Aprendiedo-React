import { Suspense, lazy } from 'react'
import './App.css'
import { Router } from './Router/Router'
import { Route } from './Router/Route.jsx'
import { appRoutes } from './Router/Routes.jsx'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyPage404 = lazy(() => import('./pages/404.jsx'))


function App() {   
 return (   
   <main>
     <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={LazyPage404} >
          <Route path='/' Component={LazyHomePage}/>
         { /**/}          
            <Route path='/about' Component={LazyAboutPage} />         
        </Router>
      </Suspense>
   </main>
  )
}

//https://youtu.be/K2NcGYajvY4?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=4624
export default App
