import {useMutation} from '@apollo/client';
import { POSTS } from '../services/post/graphql-query';
import {ADD_POST} from '../services/post/graphql-mutation';

export function useAddPost() {

  const [ addPost ] = useMutation(ADD_POST,{
    refetchQueries:[{query:POSTS}]
  })

  return addPost
}
