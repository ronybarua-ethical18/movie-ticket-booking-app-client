import gql from "graphql-tag";

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($movieId: ID!, $body: String!) {
    createComment(movieId: $movieId, body: $body) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;
