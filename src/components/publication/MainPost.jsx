import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Post from './Post';

const getPosts = gql`
  query GetPosts {
    posts {
      id
      user{
        name
        picture
      }
      date
      text
      image
      likes{
        user{
          name
        }
      }
      comments{
        id
        user{
          name
          picture
        }
        text
      }
    }
  }
`

export default function MainPost() {

  const {data, loading, error} = useQuery(getPosts)

  console.log(data);

  if (loading) return (<h2>loading...</h2>)

  return (
    <div>
      <ul>
        {
          data.posts.map(({id, user, date, text, image, likes, comments})=>(
            <Post
              key={id}
              user={user}
              date={date}
              text={text}
              image={image}
              likes={likes}
              comments={comments}
            />
          ))
        }
      </ul>
    </div>
  )
}
