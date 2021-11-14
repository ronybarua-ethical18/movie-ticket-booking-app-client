import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { FETCH_MOVIE_QUERY } from "../../utilities/hooks/GraphQL/FetchMovieData";
import styles from "./GetAllMovies.module.css";
const GetAllMovies = () => {
  const { loading, data } = useQuery(FETCH_MOVIE_QUERY);
  return (
    <div>
      {data?.getMovies?.map((movie) => (
        <div
          key={movie.id}
          className={styles.commonStyle}
          style={{ marginBottom: "20px" }}
        >
          <div>
            <img
              src={movie.img}
              alt="posterMini"
              className={styles.moviePosterMedium}
            />
          </div>
          <div style={{ marginLeft: 40, cursor: "pointer" }}>
            <Link href={`/singleMovie/${movie.id}`}>
              <h5 className={styles.fontSizeMini}>{movie.title}</h5>
            </Link>
            <small style={{ color: "gray" }}>{movie.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllMovies;
