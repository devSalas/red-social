import React from 'react'
import CreatePost from '../../components/CreatePost'
import {posts} from './data';
import { Navigate, redirect } from 'react-router-dom';

export default function Home () {

  const isAuthenticated = false
  console.log(isAuthenticated)

  if(isAuthenticated) return <Navigate to="/signup" /> 

  return (
    <div className='min-w-full min-h-screen bg-black text-white flex flex-col justify-center items-center font-sans'>
      <div className='mt-20'>
        <h1 className='text-4xl font-extrabold mb-8'>TU PROPIO CHAT</h1>
        <p className='text-center'>Converse con tus amigos </p>
      </div>
        <div className='grow flex justify-center items-center'>
      <img src="chat_sin_fondo.png" alt="" className='w-32' />
      </div>
    </div>
  )
}
