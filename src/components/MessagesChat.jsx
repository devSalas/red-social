'use client'
import { useQuery } from '@tanstack/react-query';
import React,{useState,useEffect,useRef} from 'react'
import { useStoreChat, useStoreDataChat, useStoreFriend, useStoreHost, useStoreShowChatMobile } from '../../zustand/store';





const MessagesChat = ({socket}) => {
  const {details}=useStoreDataChat()
  const {host} = useStoreHost()
  const {friend}= useStoreFriend()
 const {messages,setMessages} = useStoreChat() 
 const {showChatMobile,setShowChatMobile}= useStoreShowChatMobile()

 const {chatId} =details


 const chatRef  =useRef("")

const [message, setMessage] = useState("");

  useEffect(() => {
    const reciveMessage= (message) =>setMessages([...messages,message])
    socket.on("message",reciveMessage )

    return(()=>{
      socket.off("message",reciveMessage)
    })

  }, [messages])
  
  const handleSubmit=(evt) => {

     evt.preventDefault();
   

    const {chatId} = details
    const valores ={
	    newDataChat:{
			body: message,
			userId: host._id
		  },
      chatId
    }
    

    socket.emit('datos',valores)

    const newMessage ={
      body:message,
      userId:host._id
    }


    setMessages([...messages,newMessage])
    setMessage("")
  }

  const handleCloseChat =(evt) =>{
    setShowChatMobile(false);

  }

  return (
    <div ref={chatRef} className={`${(showChatMobile) ?'flex' :'hidden'} w-full h-full sm:flex flex-col bg-slate-200  sm:bg-[#23232c] overflow-hidden`}> 

      <div className='relative h-20 bg-white rounded-b-2xl flex justify-start items-center py-2 px-2 gap-4  sm:bg-[#23232c]  sm:border-b-[2px] sm:border-zinc-900 sm:text-white '>
        <img src={friend?.image} alt="" className='rounded-full w-12 h-12' />
        <div>
         <span> {friend?.userFull}</span> <br/>
         <p className="w-2 h-2 bg-green-500 inline-block rounded-full"></p> <span>online</span> 
        </div>
        <div className='absolute self-center right-1 sm:hidden'>
          <img onClick={handleCloseChat} className='w-10 h-10' src="arrow-left-circle.svg"  alt="" />
        </div>
      </div>

      <div className='grow flex flex-col  overflow-auto contenedor-chat'>
        {
          messages.map(({body,userId},id) =>
            ( <div key={id} className={`my-2 p-2 flex ${(userId ===host._id ?'justify-end' :'justify- ' )} `}>
       
              <span className={` p-2 px-4 text-xs text-white ${(userId ===host._id  ? 'rounded-l-xl rounded-tr-xl bg-green-500':'rounded-r-xl rounded-tl-xl bg-blue-500' )}`}> {body}</span>

            
            </div> 
            )

            
            

          )
        }
      </div>
        
      <form onSubmit={handleSubmit}  className="w-100 h-20 py-2 sm:py-4 bg-white sm:bg-[#23232c]  sm:border-t-[2px] sm:border-zinc-900 grid grid-cols-[80%,20%] justify-center items-center rounded-t-2xl">
        <input onChange={e=> setMessage(e.target.value)} type="text" value={message} className="h-10 rounded-2xl mx-2 bg-slate-200 pl-2 sm:bg-zinc-700" placeholder='Escribe aqui...'/>
        <button className="h-10 w-10 rounded-full bg-slate-200 m-auto flex justify-center items-center sm:bg-zinc-700"> 
          <img src="send.svg" alt="" />
        </button>
      </form>

   </div>
  )
}

export default MessagesChat