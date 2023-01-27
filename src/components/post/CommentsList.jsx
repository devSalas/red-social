import Comment from './Comment'
import {useStore} from '../../zustand/usuario';
import {useAddComment} from '../../custom-hook/useAddComment'

export default function CommentsList ({ idPost, comments }) {

  const addComment = useAddComment()

  const store = useStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    addComment({
      variables:{
        comment: e.target.comment.value,
        postId: idPost,
        userId: store.user.id
      }
    })
  }

  return (
    <ul className='p-2'>
      <form className='flex gap-4 p-2' onSubmit={handleSubmit}>
        <img className='w-10 rounded-full' src={store.user.image} alt="" />
        <input className='border rounded-full px-4 py-2 w-full outline-none focus:border-neutral-600' name='comment' type='text' placeholder='escribe un comentario' required/>
      </form>
      {
        comments?.map(({ id, user, date, text }) => (
          <Comment key={id} user={user} date={date} text={text} />
        ))
      }
    </ul>
  )
}
