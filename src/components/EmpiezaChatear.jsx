import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const EmpiezaChatear = () => {
  const {user} = useAuth0()

  if(!user) return (<div> cargando ....</div>)

  return (
    <div className='w-full h-full bg-zinc-900 text-white grid place-content-center text-xl'>
      <span>Vamos {user.name}</span>
        <span className='text-center'>Empieza a chatear</span>
      <img className='w-32 m-auto' src="chat.png" alt="" />
    </div>
  )
}

export default EmpiezaChatear