import { gql } from '@apollo/client';


export const POSTS_ALL_DETAIL = gql`
  fragment postsAllDetail on Post {
    id
    user{
      id
      name
      picture
    }
    date
    text
    image
    likes{
      user{
        name
      }
    }
    comments{
      id
      user{
        name
        picture
      }
      text
    }
  }
`

export const POSTS = gql`
  query posts {
    posts {
      ...postsAllDetail
    }
  }

  ${POSTS_ALL_DETAIL}
`

export const USER_LIKE = gql`
  query userLike($postId: String, $userId: String) {
  userLike(postId: $postId, userId: $userId){
      id
      user {
        id
        name
      }
    }
  }
`

export const USERS = gql`
  query users {
    users {
      id
      name
      picture
    }
}
`

export const USER = gql`
  query user($userId: String) {
    userById (userId: $userId){
      id
      name
      picture
    }
  }
`

export const USER_POSTS = gql`
  query userPosts($userId: String){
    userPosts(userId: $userId) {
      ...postsAllDetail
    }
  }

  ${POSTS_ALL_DETAIL}
`