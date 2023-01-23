import io from 'socket.io-client'
import ChatUsers from '../components/ChatUsers'
import EmpiezaChatear from '../components/EmpiezaChatear'
import MessagesChat from '../components/MessagesChat'
import AuthenticateUser from '../components/AuthenticateUser'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../services/Fetch'
import { useStoreHost } from '../../zustand/store'



const Chat = ({user}) => {
  const email = user.email

  const {data:userData,isError,isLoading}=useQuery(["user",email],()=>getUser(email))
  
  if(isError) return ( <div><img className="m-auto" src="https://cdn.dribbble.com/users/4174206/screenshots/16831422/media/94d29474875d173706b59dd856c4012d.jpg?compress=1&resize=840x630&vertical=top" alt="" /></div>  )

  if(isLoading) return( <div>cargando...</div> )
  

  console.log(userData)


  const socket =  io('http://localhost:4000')

  

  return (
    <div className=" h-screen w-screen sm:grid sm:grid-cols-[30%,70%] max-w-6xl m-auto sm:p-2 ">
      <AuthenticateUser/>
      <ChatUsers email={user.email} userData={userData}/>
      {/* <EmpiezaChatear/> */}
      <MessagesChat socket={socket} />
    </div>
  )
}

export default Chat