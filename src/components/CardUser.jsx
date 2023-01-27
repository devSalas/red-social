import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useStoreChat, useStoreDataChat, useStoreFriend, useStoreHost, useStoreShowChatMobile } from "../../zustand/store"
import {  getOneAmigo,getChat } from "../services/Fetch"



const CardUser = ({chat,host, showComponentRef}) => {
  const {setDetails} =useStoreDataChat()
  const { setMessages,messages,setShowChat,showChat} =  useStoreChat()
  const{setHost,host:hostStore}=useStoreHost()
  const {setFriend} = useStoreFriend()
  const {showChatMobile,setShowChatMobile}=useStoreShowChatMobile()
const {friendId,chatId} = chat
const {data:amigo,isLoading} = useQuery(["user",friendId],()=>getOneAmigo(friendId)) 

const {data:message,isLoading:isLoadingChat,refetch,isError,isFetched,fetchStatus,remove} = useQuery(["chat",chatId],()=>getChat(chatId),{enabled:false, cacheTime:0,staleTime:0}) 

useEffect(()=>{
  console.log(isLoadingChat)
  if(isLoadingChat==false){
    setDetails(chat)
    setMessages(message.data.messages)
    remove()
  }

},[isLoadingChat])

  if(isLoading  ) return(<div>cargando...</div> )






  const handleClick =async(evt)=>{
    refetch()
    setFriend(amigo)
    setShowChatMobile(true)
    setShowChat(true)
  }

  return (

    <li onClick={handleClick} className={`  flex  items-center gap-3 border-[1px] p-4  sm:border-b-[2px] sm:border-zinc-900 cursor-pointer`}>
      <img  className='w-12 h-12 rounded-full' src={amigo.image} alt="" />
      <span className=''>{amigo.user}</span>
      <span className='text-cyan-300'></span>

    </li>
  )
}

export default CardUser