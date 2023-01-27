import {useState,useEffect} from 'react'
import { useStoreChat, useStoreDataChat, useStoreFriend, useStoreHost, useStoreShowChatMobile } from '../../zustand/store';
import { createPortal } from 'react-dom';
import { deleteMessageChat } from '../services/Fetch';
import { useMutation, useQueryClient} from '@tanstack/react-query';

  

const MessagesChat = ({socket}) => {
  const {details}=useStoreDataChat()
  const {host} = useStoreHost()
  const {friend}= useStoreFriend()
 const {messages,setMessages} = useStoreChat() 
 const {showChatMobile,setShowChatMobile}= useStoreShowChatMobile()
 const {chatId} =details
const [message, setMessage] = useState("");
const [showModal,setShowModal] = useState(false)

  const queryClient =useQueryClient()

 const {mutate}=useMutation({
  mutationFn:deleteMessageChat,
  onSuccess:(data)=>{
    setMessages([])
  }
})

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

  const handleClickDeleteMessages = ()=> setShowModal(true);
  const handleCancelar =()=>setShowModal(false);
  

  const handleDeleteChat =()=>{
    mutate(chatId)
    setShowModal(false)
  }

  return (
    <div  className={`${(showChatMobile) ?'flex' :'hidden'} w-full h-full sm:flex flex-col bg-slate-200  sm:bg-[#23232c] overflow-hidden`}> 

      <div className='relative h-20 bg-white rounded-b-2xl flex justify-start items-center py-2 px-2 gap-4  sm:bg-[#23232c]  sm:border-b-[2px] sm:border-zinc-900 sm:text-white '>
        <div className=' self-center right-1 sm:hidden'>
          <img onClick={handleCloseChat} className='w-7 h-7' src="chevron-left.svg"  alt="" />
        </div>
        <img src={friend?.image} alt="" className='rounded-full w-12 h-12 ' />
        <div>
         <span className="text-sm sm:text-lg "> {friend?.userFull}</span> <br/>
         <p className="w-2 h-2 bg-green-500 inline-block rounded-full "></p> <span className="text-xs sm:text-sm">online</span> 
        </div>
        <div className='absolute right-2' onClick={handleClickDeleteMessages}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </div>
        {showModal && createPortal(
        <div className="fixed z-10 inset-0 flex justify-center items-center backdrop-brightness-50 ">
          <div className="max-w-md  m-2  bg-slate-700 shadow-lg shadow-slate-500/50 rounded-sm p-4 text-white flex flex-col sm:gap-2">
            <p className="text-lg sm:text-xl">¿Desea eliminar Este chat?</p>
            <p className="text-sm text-slate-500 sm:text-base">
            Tenga en cuenta,que los mensajes se eliminarán por completo en ambos chats, sin posibilidad de recuperlos.
            </p>
            <div className="flex justify-end gap-4 mt-4">
            <button onClick={handleCancelar} className="bg-slate-600 p-2 px-4 rounded-md">Cancelar</button>
            <button onClick={handleDeleteChat}   className="bg-blue-500   p-2 px-4 rounded-md">Eliminar chat</button>
            </div>
          </div>
        </div>,
          document.getElementById("modal-mensaje")
        )}
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
        <input onChange={e=> setMessage(e.target.value)} type="text" value={message} className="h-10 rounded-2xl mx-2 bg-slate-200 pl-2 sm:bg-zinc-700 text-black sm:text-white" placeholder='Escribe aqui...'/>
        <button className="h-10 w-10 rounded-full bg-slate-200 m-auto flex justify-center items-center sm:bg-zinc-700"> 
          <img src="send.svg" alt="" />
        </button>
      </form>

   </div>
  )
}

export default MessagesChat