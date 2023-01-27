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
  userLike(postId: $postId, userId: $userId)
  }
`