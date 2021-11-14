import gql from "graphql-tag";

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($movieId: ID!, $commentId: ID!) {
    deleteComment(movieId: $movieId, commentId: $commentId) {
      id
      comments {
        id
        username
        body
        createdAt
      }
      commentCount
    }
  }
`;
