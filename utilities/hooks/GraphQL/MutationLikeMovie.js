import gql from "graphql-tag";

export const LIKE_MOVIE_MUTATION = gql`
  mutation likeMovie($movieId: ID!) {
    likeMovie(movieId: $movieId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;
