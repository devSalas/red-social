import {useQuery} from '@apollo/client';
import {POSTS} from '../services/posts/graphql-query';

export function usePosts() {

  const result = useQuery(POSTS)

  return result
}
