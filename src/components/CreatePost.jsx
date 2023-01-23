import React from 'react'

export default function CreatePost () {
  return (
    <form className='flex flex-col p-4'>
      <input className='p-2' type='text' placeholder='Compose new post' />
      <div className='flex'>
        <button className='py-2 px-4 flex items-center gap-2'>
          <svg className='w-4 fill-neutral-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z' /></svg>
          <span>Add Photo</span>
        </button>
        <button className='py-2 px-4 flex items-center gap-2'>
          <svg className='w-4 fill-neutral-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z' /></svg>
          <span>Add Video</span>
        </button>
      </div>
    </form>
  )
}
