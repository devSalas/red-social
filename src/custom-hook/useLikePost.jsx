import {useMutation} from '@apollo/client';
import {LIKE_POST} from '../services/posts/graphql-mutation';

export function useLikePost() {

  const [ likePost ] = useMutation(LIKE_POST)

  return likePost
}
