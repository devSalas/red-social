import CreatePost from '../../components/CreatePost'
import MainPost from '../../components/publication/MainPost';

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
    <div>
      
      <CreatePost />
      <MainPost/>

    </div>
  )
}
