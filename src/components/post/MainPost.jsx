import PostLoader from './postLoader';
import PostList from './PostList';
import {usePosts} from '../../custom-hook/usePosts'

export default function MainPost() {

  const {data, loading, error} = usePosts()

  if (loading) return (<PostLoader />)

  return (
    <div>
      <PostList posts={data.posts} />
    </div>
  )
}
