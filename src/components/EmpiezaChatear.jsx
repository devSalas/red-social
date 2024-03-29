
import React from 'react'
import { useStoreHost } from '../../zustand/store'

const EmpiezaChatear = ({userData}) => {

  return (
    <div className='w-full h-full bg-zinc-800 text-white sm:grid sm:rounded-r-lg place-content-center text-xl hidden'>
      <span>Vamos {userData.userFull}</span>
        <span className='text-center'>Empieza a chatear</span>
      <img className='w-32 m-auto' src="chat.png" alt="" />
    </div>
  )
}

export default EmpiezaChatear