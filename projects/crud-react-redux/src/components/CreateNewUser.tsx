import {Badge,Button, Card, TextInput, Title}from '@tremor/react'
import { useUserActions } from '../hooks/useUsersActions'
import {useState} from 'react'

export function CreateNewUser (){


    const [result, setResult] = useState<'ok' |'ko'|null>(null)

    const {addUser} = useUserActions()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        setResult(null)
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if(!name || !email ||!github){            
            return setResult('ko')
        }        

        addUser({name,email,github});
        setResult('ok')
        form.reset()
    }

    return (
        <Card style={{marginTop:'16px'}}>
            <Title>
                Crear Nuevo Usuario
            </Title>
            <form  onSubmit={handleSubmit} style={{gap:"20px"}}>
                <TextInput name='name' placeholder='Aqui el nombre' />
                <TextInput name='email' placeholder='Aqui el email' />
                <TextInput name='github' placeholder='Aqui el usuario de github' />
                <br/>
                <Button type='submit'>Crear usuario</Button>                
                <br/>
                <div>
                    {result === 'ok' && <Badge style={{marginLeft:"10px",backgroundColor:"green",color:"blue"}}>Guardado Correctamente </Badge>}
                    {result === 'ko' && <Badge style={{marginLeft:"10px",backgroundColor:"red", color:'white'}}>Error con los campos </Badge>}
                </div>
                
                
            </form>
        </Card>
    )
}


















