'use client'
import React,{useState,useEffect} from 'react'
import { useStoreChat, useStoreDataChat, useStoreHost } from '../../zustand/store';





const MessagesChat = ({socket}) => {
  const {details}=useStoreDataChat()
  const {host} = useStoreHost()
 const {messages,setMessages} = useStoreChat() 
 

const [message, setMessage] = useState("");


  console.log({details})


  useEffect(() => {
    const reciveMessage= (message) =>setMessages([...messages,message])
    socket.on("message",reciveMessage )

    return(()=>{
      socket.off("message",reciveMessage)
    })

  }, [messages])
  

  const handleSubmit=(evt) => {
    console.log("entra")
     evt.preventDefault();
   
/*     const valores ={
    message,
    userId:host._id,

    } */
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
    console.log(messages)
  }





  return (
    <div className="w-full h-full flex flex-col bg-slate-200  sm:bg-[#23232c] overflow-hidden  "> 

      <div className='h-20 bg-white rounded-b-2xl flex justify-start items-center px-2 gap-4  sm:bg-[#23232c]  sm:border-b-[2px] sm:border-zinc-900 sm:text-white '>
        <img src="https://placeimg.com/50/50/tech" alt="" className='rounded-full' />
        <div>
         <span> Sebastian Rudiger</span> <br/>
         <p className="w-2 h-2 bg-green-500 inline-block rounded-full"></p> <span>online</span> 
        </div>
      </div>

      <div className='grow flex flex-col  overflow-auto'>
        {
          messages.map(({body,userId},id) =>
            ( <div key={id} className={`my-2 p-2 flex ${(userId ===host._id ?'justify-end' :'justify- ' )} `}>
       
              <span className={` p-2 px-4 text-xs text-white ${(userId ===host._id  ? 'rounded-l-xl rounded-tr-xl bg-green-500':'rounded-r-xl rounded-tl-xl bg-blue-500' )}`}> {body}</span>

            
            </div> 
            )

            
            

          )
        }
      </div>
        
      <form onSubmit={handleSubmit}  className="w-100 h-20 bg-white sm:bg-[#23232c]  sm:border-t-[2px] sm:border-zinc-900 grid grid-cols-[80%,20%] justify-center items-center rounded-t-2xl">
        <input onChange={e=> setMessage(e.target.value)} type="text" value={message} className="h-10 rounded-2xl mx-2 bg-slate-200 pl-2 sm:bg-zinc-700" placeholder='Escribe aqui...'/>
        <button className="h-10 w-10 rounded-full bg-slate-200 m-auto flex justify-center items-center sm:bg-zinc-700"> 
          <img src="send.svg" alt="" />
        </button>
      </form>

   </div>
  )
}

export default MessagesChat