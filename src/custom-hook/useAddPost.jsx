import {useMutation} from '@apollo/client';
import {ADD_POST} from '../services/posts/graphql-mutation';

export function useAddPost() {

  const [ addPost ] = useMutation(ADD_POST)

  return addPost
}
