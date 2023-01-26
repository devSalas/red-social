import React from 'react'
import { useQuery, gql } from '@apollo/client';
import PostLoader from './postLoader';
import PostList from './PostList';

const getPosts = gql`
  query GetPosts {
    posts {
      id
      user{
        id
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

  if (loading) return (<PostLoader />)

  return (
    <div>
      <PostList posts={data.posts} />
    </div>
  )
}
