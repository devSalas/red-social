import {useQuery} from '@apollo/client';
import {USER_LIKE} from '../services/posts/graphql-query';

export function useUserLike(postId, userId) {

  const result = useQuery(USER_LIKE, {
    variables:{
      postId,
      userId
    }
  })

  return result
}
