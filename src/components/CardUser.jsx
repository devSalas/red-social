/* import { useAuth0 } from "@auth0/auth0-react" */
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useStoreChat, useStoreDataChat, useStoreHost } from "../../zustand/store"
import {  getOneAmigo,getChat } from "../services/Fetch"



const CardUser = ({chat,host}) => {
  const {setDetails} =useStoreDataChat()
  const { setMessages,messages } =  useStoreChat()
  const{setHost,host:hostStore}=useStoreHost()
 
const {friendId,chatId} = chat
const {data:amigo,isLoading} = useQuery(["user",friendId],()=>getOneAmigo(friendId)) 

const {data:message,isLoading:isLoadingChat,refetch,isError,isFetched,fetchStatus} = useQuery(["chat",chatId],()=>getChat(chatId),{enabled:false}) 

//console.log({isLoadingChat,refetch,isError,isFetched,fetchStatus})
console.log("cardUser")
useEffect(()=>{
  if(isLoadingChat==false){
    setDetails(chat)
    //console.log({isLoadingChat,refetch,isError,isFetched,fetchStatus})
    setMessages(message.data.messages)
  }

},[isLoadingChat])

  if(isLoading  ) return(<div>cargando...</div> )






  const handleClick =async(evt)=>{
    refetch()
/*     const data =await message.data.messages
    setHost(hostStore)
     setMessages(data)
    console.log(host) */

  }


  return (

    <li onClick={handleClick} className='flex  items-center gap-3 border-[1px] p-4  sm:border-b-[2px] sm:border-zinc-900 cursor-pointer'>
      <img  className='w-12 h-12 rounded-full' src={amigo.image} alt="" />
      <span className=''>{amigo.user}</span>
      <span className='text-cyan-300'></span>

    </li>
  )
}

export default CardUser