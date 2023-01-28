import {useQuery} from '@apollo/client';
import {POSTS} from '../services/post/graphql-query';

export function usePosts() {

  const result = useQuery(POSTS)

  return result
}
