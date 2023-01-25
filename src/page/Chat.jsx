import io from 'socket.io-client'
import ChatUsers from '../components/ChatUsers'
import EmpiezaChatear from '../components/EmpiezaChatear'
import MessagesChat from '../components/MessagesChat'
import AuthenticateUser from '../components/AuthenticateUser'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../services/Fetch'
import { useStoreChat, useStoreFriend, useStoreHost } from '../../zustand/store'



const Chat = () => {
  const {host}=useStoreHost()
  const { messages,limpiarChat} =useStoreChat()
  const {_id} = host
  const {data:userData,isError,isLoading}=useQuery(["user",_id],()=>getUser(_id))
  
  if(isError) return ( <div><img className="m-auto" src="https://cdn.dribbble.com/users/4174206/screenshots/16831422/media/94d29474875d173706b59dd856c4012d.jpg?compress=1&resize=840x630&vertical=top" alt="" /></div>  )

  if(isLoading) return( <div>cargando...</div> )
  


  const socket =  io('https://red-social-back.onrender.com')

  

  return (
    <div className=" h-screen w-screen sm:grid sm:grid-cols-[30%,70%] max-w-6xl m-auto sm:p-2 ">
{/*       <AuthenticateUser/> */}
      <ChatUsers  userData={userData}/>
     {(Object.keys(messages).length === 0) ?<EmpiezaChatear userData={userData}/>
      :<MessagesChat socket={socket} />}
    </div>
  )
}

export default Chat