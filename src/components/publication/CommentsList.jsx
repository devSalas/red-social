import React from 'react'
import Comment from './Comment'

export default function CommentsList ({ comments }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ul>
      <form className='' onSubmit={handleSubmit}>
        <input className='border p-1' type='text' />
        <button className='bg-neutral-200 p-1 rounded'>comment</button>
      </form>
      {
        comments?.map(({ id, user, date, text }) => (
          <Comment key={id} user={user} date={date} text={text} />
        ))
      }
    </ul>
  )
}
