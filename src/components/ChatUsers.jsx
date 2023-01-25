import {  useQuery } from "@tanstack/react-query"
import {getUser } from "../services/Fetch"
import { useStoreChat, useStoreDataChat, useStoreFriend, useStoreHost, useStoreShowChatMobile } from "../../zustand/store"
import CardUser from "./CardUser"
import { useRef } from "react"

const ChatUsers = ({userData}) => {
  const {host,setHost} = useStoreHost()
  const {details}=useStoreDataChat()
  const { messages,limpiarChat} =useStoreChat()
  const {friend,setFriend}=useStoreFriend()
  const {showChatMobile,setShowChatMobile}=useStoreShowChatMobile()

  if(userData == undefined) return( <div>cargando...</div> )

  const showComponentRef = useRef(false)

  const handleClick = () => {
    console.log({messages})
    setFriend(userData)

    if(Object.keys(friend).length === 0){
      setHost({_id:"63cb48972fb2fbe7805de2da"})
      console.log(host)
    }else{
      setHost(friend)
    }
    limpiarChat()
    console.log({messages})

  }


  return (
    <div ref={showComponentRef} className={`${(showChatMobile) ?'hidden' :'flex'} sm:flex flex-col sm:flex-col bg-slate-100 border-2 border-slate-200 overflow-hidden sm:bg-[#23232c]  sm:border-zinc-900 sm:text-white `}>
     
     <h2 className='pl-2 pt-2'>Usuario</h2>
      <div className="w-3/5 aspect-square bg-slate-300 rounded-full mx-auto my-2">
       <img className="rounded-full "  src={userData.image} alt="" />

      </div>
      <button onClick={handleClick} className="bg-slate-500 rounded-lg  self-center px-2 py-1 mb-4">
        Cambiar Usuario
      </button>

     <form action="" className='w-full p-2'>
        <input  type="text"  className="h-10 rounded-2xl  bg-slate-200  sm:bg-zinc-700 pl-2 w-full" placeholder='Chatea con Alguien...'/>
      </form>
      

      <ul className="grid overflow-auto">
      {
        userData.chats.map(chat=>{
          return <CardUser key={chat.friendId} chat={chat} host={userData} showComponentRef={showComponentRef} />
        })
      }
      </ul>
      
      
    </div>
  )
}

export default ChatUsers