import { AUTO_LENGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LENGUAGE
export type FromLanguage = Language | AutoLanguage 

export interface State {
  fromLanguage: FromLanguage,
  toLanguage: Language,
  fromText: string,
  result: string,
  loading: boolean // Corrección: debería ser de tipo boolean
}


export type Action =
    | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_TO_LANGUAGE'; payload: Language }
    | { type: 'SET_FROM_TEXT'; payload: string }    
    | { type: 'SET_RESULT'; payload: string }    


export enum SectionType {
  From = 'from',
  To = 'to'  
}