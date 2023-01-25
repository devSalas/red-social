import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useStore} from '../../zustand/usuario'

export default function Avatar({id, name, image}) {

  const store = useStore()
  const navigate = useNavigate()

  const handleClick = (e) => {
    //guardar usuario en zustand
    store.addUser({
      id,
      name,
      image
    })
    //ir a home
    navigate("/home")
  }


  return (
    <div className='border flex flex-col justify-center'>
      <div className='w-32 h-32 rounded-full overflow-hidden'>
        <img src={image} alt="" />
      </div>
      <p className='text-center'>{name}</p>
      <button onClick={handleClick} className='bg-sky-300 p-2 rounded hover:bg-sky-400'>entrar</button>
    </div>
  )
}
