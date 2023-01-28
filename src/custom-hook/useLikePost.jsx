import {useMutation} from '@apollo/client';
import {LIKE_POST} from '../services/post/graphql-mutation';
import {POSTS, USER_LIKE} from '../services/post/graphql-query';

export function useLikePost() {

  const [ likePost ] = useMutation(LIKE_POST,{
    refetchQueries:[{query:POSTS}]
  })

  return likePost
}
