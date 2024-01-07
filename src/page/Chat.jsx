import io from 'socket.io-client'
import ChatUsers from '../components/ChatUsers'
import EmpiezaChatear from '../components/EmpiezaChatear'
import MessagesChat from '../components/MessagesChat'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../services/Fetch'
import { useStoreChat, useStoreHost } from '../../zustand/store'
import Loading from '../components/Loading'
import { Navigate } from 'react-router-dom'




const Chat = () => {
  const {host}=useStoreHost()
  const { messages,limpiarChat,showChat} =useStoreChat()
  const {_id} = host
  const {data:userData,isError,isLoading}=useQuery(["user",_id],()=>getUser(_id))
  
  if(isError) return  <Navigate to="/error" />

  if(isLoading) return(  <Loading/>)
  
console.log({port:import.meta.env.VITE_PORT})

  const socket =  io(import.meta.env.VITE_PORT)

  

  return (
    <div className=" h-screen w-screen sm:grid sm:grid-cols-[30%,70%] max-w-6xl m-auto sm:p-2 md:rounded-md gap-1 ">
      <ChatUsers  userData={userData}/>
     {(showChat)?<MessagesChat socket={socket} />
      :<EmpiezaChatear userData={userData}/>}
    </div>
  )
}

export default Chat