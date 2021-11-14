import gql from "graphql-tag";

export const FETCH_MOVIE_QUERY = gql`
  {
    getMovies {
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
