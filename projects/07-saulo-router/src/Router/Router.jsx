import { EVENTS } from "../consts"
import { useEffect, useState, Children } from "react"
import { match } from 'path-to-regexp'
import { Route } from "./Route"


export function Router({ children , routes = [], defaultComponent: DefaultComponet = () => <h1>404 Sintaxis Error xD</h1> }) {  

  const [currentPath, setCurrenPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrenPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {} 

  //add las rutas que viene como children del <Route /> Component
  const routesFromChildren = Children.map(children, ({props, type}) => {     
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null    
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    //hemos usado path-tp-regexp 
    //para poder detectar rutas dinamicas
    const matcherURL = match(path, { decode: decodeURIComponent })
    const matched = matcherURL(currentPath)
    if (!matched) return false
    
    //guardar los paremetros de la url que eran dinamicos    
    routeParams = matched.params //{query: 'javascript'}
    return true
    
  })?.Component
      
  return Page ? <Page routeParams={routeParams} /> : <DefaultComponet routeParams={routeParams} />

}
