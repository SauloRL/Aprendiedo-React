import { AUTO_LENGUAGE } from '../constants';
import { Action, FromLanguage, Language, type State } from '../types';
import { useReducer } from 'react';

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2 -create a reducer 
function reducer (state: State, action: Action){
  
  const { type} = action
  
  if (type === 'INTERCHANGE_LANGUAGES') {

    if (state.fromLanguage === AUTO_LENGUAGE) return state
          
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
  return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
  return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      result: ''
    }
  }
  
  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading:false
    }
  }


  return state

}

export function useStore() {
    const [{ fromLanguage,
        toLanguage,
        fromText,
        result,
        loading     }, dispatch] = useReducer(reducer, initialState);
        
    const interchangeLamguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' }) 
    
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload: Language) => {
        dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload:string) => {
        dispatch({type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload:string) => {
        dispatch({type: 'SET_RESULT', payload})
    }



    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLamguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}