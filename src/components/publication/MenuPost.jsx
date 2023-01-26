import React from 'react'

export default function MenuPost() {
  return (
    <div className='fixed md:absolute md:top-12 bottom-0 left-0 right-0'>
      <div className='border md:w-40 rounded-2xl shadow-3xl bg-white p-2 flex flex-col'>
        <button className='p-2 hover:bg-neutral-200 rounded-full'>Editar Post</button>
        <button className='p-2 hover:bg-neutral-200 rounded-full'>Eliminar Post</button>
      </div>
    </div>
  )
}
