import {gql} from '@apollo/client';
import {POSTS_ALL_DETAIL} from './graphql-query';

export const ADD_POST = gql`
mutation crearPost ($userId: String, $text: String, $image: String) {
  addPost(userId: $userId, text: $text, image: $image) {
      ...postsAllDetail
    }
  }

  ${POSTS_ALL_DETAIL}
`

export const ADD_COMMENT = gql`
  mutation addComment($comment: String, $postId: String, $userId: String) {
    addComment(comment: $comment,postId: $postId,userId: $userId) {
      text
      id
      user {
        name
        picture
        id
      }
    }
  }
`

export const LIKE_POST = gql`
  mutation likePost($postId: String, $userId: String){
    likePost(postId: $postId userId: $userId) {
      id
      user {
        id
        name
      }
    }
  }
`