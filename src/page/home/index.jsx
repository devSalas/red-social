import CreatePost from '../../components/post/CreatePost'
import MainPost from '../../components/post/MainPost';

import { useStore } from '../../zustand/usuario'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export default function Home () {

  const navigate = useNavigate()
  const store = useStore()

  useEffect(()=>{
    if (store.user === null) navigate("/")
  },[store.user])

  return (
    <div className='md:max-w-xl m-auto'>
      
      <div className='grid gap-4 md:py-4'>
        <CreatePost />
        <MainPost/>
      </div>

    </div>
  )
}
