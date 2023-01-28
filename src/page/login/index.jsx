import React from 'react'
import Avatar from './Avatar'
import {useUsers} from '../../custom-hook/useUsers'



export default function Login() {

  const {data, loading, error} = useUsers()

  if (loading) return (<p>loading...</p>)

  return (
    <div>
      <ul className='flex'>
        {
          data.users.map(({id, name, picture})=>(
            <Avatar key={id} id={id} name={name} image={picture} />
          ))
        }
      </ul>
    </div>
  )
}
