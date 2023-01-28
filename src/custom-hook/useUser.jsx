import {useQuery} from '@apollo/client';
import {USER} from '../services/post/graphql-query';

export function useUser(id) {

  const result = useQuery(USER,{
    variables:{
      userId:id
    }
  })

  return result
}