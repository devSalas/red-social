import React from 'react'
import {useParams} from 'react-router-dom';
import PostList from '../../components/post/PostList';
import {useUser} from '../../custom-hook/useUser'
import {useUserPosts} from '../../custom-hook/useUserPosts'

export default function Perfil() {

  let {id} = useParams()

  const {data:dataUser, loading, error} = useUser(id)
  const {data:dataPosts} = useUserPosts(id)

  console.log(dataPosts)

  const user = dataUser?.userById
  const posts = dataPosts?.userPosts

  return (
    <div>
      {/* <img src={user?.picture} alt="" /> */}
      <div className='flex flex-col items-center gap-4 py-8'>
        <img className='w-32 rounded-full' src={user?.picture} alt="" />
        <p className='text-xl font-bold'>{user?.name}</p>
        <p>descripcion</p>
      </div>
      <div className='md:max-w-xl m-auto'>
        {
          posts 
          ? (<PostList posts={posts} />)
          : null
        }
      </div>
    </div>
  )
}
