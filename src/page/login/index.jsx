import React from 'react'
import Avatar from './Avatar'
import {useQuery, gql} from '@apollo/client';

const getUsers = gql`
  query getUser {
    users {
      id
      name
      picture
    }
}
`

export default function Login() {

  const {data, loading, error} = useQuery(getUsers)

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
