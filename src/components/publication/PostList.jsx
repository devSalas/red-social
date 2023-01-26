import React from 'react'
import Post from './Post';

export default function PostList({posts}) {
  return (
    <div className='grid gap-4'>
      {
        posts?.map(({id, user, date, text, image, likes, comments})=>(
          <Post
            key={id}
            id={id}
            user={user}
            date={date}
            text={text}
            image={image}
            likes={likes}
            comments={comments}
          />
        ))
      }
    </div>
  )
}
