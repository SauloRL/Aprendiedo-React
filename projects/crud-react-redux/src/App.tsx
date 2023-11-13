import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import {ListOfUsers}  from './components/ListOfUsers'



function App() {
  
  return(
    <>
        <ListOfUsers/>
        <CreateNewUser/>
        <Toaster richColors/>
    </>
  )
}

export default App
//https://youtu.be/bEEjuwujbbU?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=5581
