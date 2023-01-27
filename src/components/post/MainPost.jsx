import PostList from './PostList';
import { usePosts } from '../../custom-hook/usePosts'

export default function MainPost() {

  const {data, loading, error} = usePosts()

  if (loading) return (<h1>cargando</h1>)

  return (
    <div>
      <PostList posts={data.posts} />
    </div>
  )
}
