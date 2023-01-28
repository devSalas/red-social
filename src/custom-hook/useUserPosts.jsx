import {useQuery} from '@apollo/client';
import {USER_POSTS} from '../services/post/graphql-query';

export function useUserPosts(userId) {

  const result = useQuery(USER_POSTS, {
    variables:{
      userId:userId
    }
  })

  return result
}