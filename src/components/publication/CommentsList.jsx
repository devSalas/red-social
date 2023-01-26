import {useState, useEffect} from 'react'
import Comment from './Comment'
import {useMutation, gql} from '@apollo/client';
import {useStore} from '../../zustand/usuario';

const ADD_COMMENT = gql`
  mutation addComentarios($comment: String, $postId: String, $userId: String) {
    addComment(comment: $comment,postId: $postId,userId: $userId) {
      text
      id
      user {
        name
        picture
        id
      }
    }
  }
`

export default function CommentsList ({ idPost, comments }) {

  const [commnetsArr, setCommentsArr] = useState([])
  const [addComment, {data, loading, error}] = useMutation(ADD_COMMENT)

  const store = useStore()

  console.log(commnetsArr)

  useEffect(()=>{
    if (commnetsArr.length === 0) {
      setCommentsArr(comments)
    }
  },[commnetsArr])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const comment = await addComment({
      variables:{
        comment: e.target.comment.value,
        postId: idPost,
        userId: store.user.id
      }
    })

    setCommentsArr(comment.data.addComment)
  }

  return (
    <ul className='p-2'>
      <form className='flex gap-4 p-2' onSubmit={handleSubmit}>
        <img className='w-10 rounded-full' src={store.user.image} alt="" />
        <input className='border rounded-full px-4 py-2 w-full outline-none focus:border-neutral-600' name='comment' type='text' placeholder='escribe un comentario' required/>
      </form>
      {
        commnetsArr?.map(({ id, user, date, text }) => (
          <Comment key={id} user={user} date={date} text={text} />
        ))
      }
    </ul>
  )
}
