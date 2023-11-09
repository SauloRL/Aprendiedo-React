import { Form } from 'react-bootstrap'
import { AUTO_LENGUAGE, SUPPORTED_LANGUAGES } from '../constants' 
import React from 'react'
import {FromLanguage, SectionType, type Language } from '../types'


type Props =
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, onChange: (language: Language) => void }


export const LanguageSelector= ({onChange, type , value}: Props) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>            
            {type === SectionType.From && <option value={ AUTO_LENGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key,literal]) => (
                <option key={key} value={key}>{literal}</option>
            ))}
        </Form.Select>
    )
}