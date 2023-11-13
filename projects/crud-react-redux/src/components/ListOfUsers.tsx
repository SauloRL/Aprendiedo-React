import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,  
} from "@tremor/react";

import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUsersActions";

export function ListOfUsers() {  
  
  const users = useAppSelector(state => state.users);
  const {removeUser} = useUserActions()
  

  return (
    <Card>
      <div style={{display: 'flex'}}>
        <h4>
          <strong>
            Usuarios          
          </strong>         
        </h4>
        <span style={{marginLeft:'8px', color:'blue'}}><strong>{users.length}</strong></span>
      </div>        
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell style={{display: "flex", alignItems:"center"}}>
                <img style={{width:"32px", height: "32px" , borderRadius:"50%", marginRight: "8px" }} src={`https://unavatar.io/github/${user.github}`} alt={user.name}/>
                {user.name}
                </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <button type="button">
                {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                  aria-label="Edit Element"
                  >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                </button>
                <button type="button" onClick={()=>removeUser(user.id)}>
                  {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                    aria-label="Remove Element"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}