import {  useQuery } from "@tanstack/react-query"
import {getUser } from "../services/Fetch"
import { useStoreHost } from "../../zustand/store"
import CardUser from "./CardUser"

const ChatUsers = ({email,userData}) => {

  if(userData == undefined) return( <div>cargando...</div> )

  return (
    <div className="hidden sm:flex sm:flex-col bg-slate-100 border-2 border-slate-200 overflow-hidden sm:bg-[#23232c]  sm:border-zinc-900 sm:text-white ">
     
     <h2 className='pl-2 pt-2'>Usuario</h2>
      <div className="w-3/5 aspect-square bg-slate-300 rounded-full mx-auto my-2">
       <img className="rounded-full "  src="https://avatars.githubusercontent.com/u/72365664?v=4" alt="" />

      </div>
     <form action="" className='w-full p-2'>
        <input  type="text"  className="h-10 rounded-2xl  bg-slate-200  sm:bg-zinc-700 pl-2 w-full" placeholder='Chatea con Alguien...'/>
      </form>
      

      <ul className="grid overflow-auto">
      {
        userData.chats.map(chat=>{
          return <CardUser key={chat.friendId} chat={chat} host={userData} />
        })
      }
      </ul>
      
      
    </div>
  )
}

export default ChatUsers