import { useState } from 'react';
import { useStore } from '../../zustand/usuario'
//import { subirArchivos } from '../../firebase/config'
import { useAddPost } from '../../custom-hook/useAddPost'


export default function CreatePost () {

  const [imgSrc, setImgSrc] = useState()
  const [urlFile, setUrlFile] = useState("")

  const addPost = useAddPost()
  const store = useStore()

  const handleChange = (e) => {
    const objectURL = URL.createObjectURL(e.target.files[0])
    setImgSrc(objectURL)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const file = e.target.file.files[0]

    /* if (file) {
      const url = await subirArchivos(file)
      setUrlFile(url)
    } */

    addPost({
      variables:{
        userId: store.user.id,
        text: e.target.text.value,
        image: urlFile
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='border rounded-2xl flex flex-col items-center gap-4 p-4'>
      <div className='flex gap-4 w-full'>
        <img className='w-10 rounded-full' src={store?.user?.image} alt="" />
        <input name="text" className='py-2 px-4 border w-full rounded-full' type='text' placeholder='Compose new post' required/>
      </div>
      <input onChange={handleChange} className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:cursor-pointer" accept="image/*" type="file" name="file" id="" />
      <img className='rounded-2xl' src={imgSrc} alt="" />
      <button className='rounded-full py-2 px-8  bg-sky-500 text-white hover:bg-sky-600'>Publicar</button>
    </form>
  )
}


/*
<div className='flex'>
  <button className='py-2 px-4 flex items-center gap-2'>
    <svg className='w-4 fill-neutral-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z' /></svg>
    <span>Add Photo</span>
  </button>
</div>
*/