import {useQuery} from '@apollo/client';
import {USERS} from '../services/post/graphql-query';

export function useUsers() {

  const result = useQuery(USERS)

  return result
}