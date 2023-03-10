import { useState } from 'react'
import CommentsList from './CommentsList'

export default function Post ({ user, date, text, image, like, comments }) {
  const [commentState, setCommentState] = useState(false)
  const [likeState, setLikeState] = useState(false)

  const ClickComment = () => setCommentState(!commentState)
  const ClickLike = () => setLikeState(!likeState)

  return (
    <div className='border'>
      <div className='flex justify-between p-3'>
        <div className='flex gap-2'>
          <img className='w-12 h-12 rounded-full' src={user.image} alt={user.name} />
          <div>
            <p className='font-semibold'>{user.name}</p>
            <p className='text-neutral-500'>{date}</p>
          </div>
        </div>
        <button className='p-2'>
          <svg className='h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'><path d='M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z' /></svg>
        </button>
      </div>
      <div>
        <p className='p-2'>{text}</p>
        <div className='p-1'>
          <img className='rounded-3xl' src={image} alt={text} />
        </div>
      </div>
      <div className='flex gap-8 p-4'>
        <button onClick={ClickLike} className='flex gap-2'>
          <svg className='fill-neutral-400 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' /></svg>
          <span>{like.length}</span>
        </button>
        <button onClick={ClickComment} className='flex gap-2'>
          <svg className='fill-neutral-400 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z' /></svg>
          <span>{comments.length}</span>
        </button>
      </div>
      {
        commentState
          ? <CommentsList comments={comments} />
          : null
      }
    </div>
  )
}
