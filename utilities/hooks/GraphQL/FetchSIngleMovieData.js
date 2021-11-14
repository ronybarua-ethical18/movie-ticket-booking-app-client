import gql from "graphql-tag";

export const FETCH_SINGLE_MOVIE_QUERY = gql`
  query ($movieId: ID!) {
    getMovie(movieId: $movieId) {
      id
      title
      desc
      genre
      likes {
        id
        username
      }
      comments {
        id
        body
        username
        createdAt
      }
      likeCount
      commentCount
      duration
      img
      createdAt
    }
  }
`;
