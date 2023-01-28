import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../services/post/graphql-mutation';
import { POSTS } from '../services/post/graphql-query';

export function useAddComment() {

  const [ addComment ] = useMutation(ADD_COMMENT,{
    refetchQueries:[{query:POSTS}]
  })

  return addComment
}
