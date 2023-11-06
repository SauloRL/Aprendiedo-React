import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title:'Sobre nosostros',
    button:'Ir a la home',
    description: '¡Hola! me llamo saulo y estoy creando un clon de React Router'
  },
  en:{
    title:'About us',
    button:'Go to home page',
    description:'Hi¡ My name is saulo and i am creating a clone of React Router.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams}) {

  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{ i18n.title}</h1>
      <div>      
        <img src='https://grupoimagensoft.bitrix24.mx/b25641017/resize_cache/208/7acf4cadf975128573a8b1c2766af5d8/main/3e6/3e63c38a6954cbe4438015d22f77f291/SAULO%203.jpg.png' alt='Foto de Saulo'/>
        <p>{i18n.description }</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )  
}