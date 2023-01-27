import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../services/posts/graphql-mutation';

export function useAddComment() {

  const [ addComment ] = useMutation(ADD_COMMENT)

  return addComment
}
