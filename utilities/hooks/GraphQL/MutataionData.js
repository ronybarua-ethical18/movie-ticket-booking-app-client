import gql from "graphql-tag";
export const ADD_MOVIE_DATA = gql`
  mutation addMovie(
    $title: String!
    $img: String!
    $duration: String!
    $desc: String!
    $trailer: String!
    $limit: String!
    $year: String!
    $genre: String!
    $isSeries: String!
  ) {
    addMovie(
      movieInput: {
        title: $title
        img: $img
        duration: $duration
        desc: $desc
        trailer: $trailer
        limit: $limit
        year: $year
        genre: $genre
        isSeries: $isSeries
      }
    ) {
      id
      title
      img
      duration
      desc
      trailer
      limit
      year
      genre
      isSeries
      createdAt
    }
  }
`;
