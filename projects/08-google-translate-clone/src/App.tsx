import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect} from 'react'
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Stack} from 'react-bootstrap'
import { AUTO_LENGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types';
import { TextArea } from './components/TextArea';
import { translate } from './services/translate';

function App() {    
  
  const {
    fromLanguage,
    loading,
    toLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    setFromLanguage,
    setToLanguage,
    interchangeLamguages } = useStore()
  
  useEffect(() => {
    if (fromText === '') return
    
    translate({fromLanguage, toLanguage, text: fromText}).then( result => {
      if (result === '') return
      setResult(result)
    })
      .catch(() => { setResult('Error!!') })
  },[fromText])
  
  return (
    <Container fluid>      
      <h2>Goole Translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>                        
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />          
            <TextArea type={SectionType.From} value={fromText} onChange={setFromText}/>
          </Stack>
        </Col>  
        
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LENGUAGE} onClick={interchangeLamguages}>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            {/*<h2>To</h2>*/}
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />          
            <TextArea loading={loading} type={SectionType.To} value={result} onChange={setResult}/>
          </Stack>
        </Col>        

      </Row>       
    </Container>    
  )
}

export default App
//https://youtu.be/kZhabulNCUc?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=1809
