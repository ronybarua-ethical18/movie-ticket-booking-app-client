import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./SingleMovie.module.css";
import Menubar from "../../components/Menubar/Menubar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FormInput from "../../components/FormInput/FormInput";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import LikeButton from "../../components/LikeButton/LikeButton";
import GetAllMovies from "../../views/GetAllMovies/GetAllMovies";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_SINGLE_MOVIE_QUERY } from "../../utilities/hooks/GraphQL/FetchSingleMovieData";
import { CREATE_COMMENT_MUTATION } from "../../utilities/hooks/GraphQL/CreateCommentMutation";
import { AuthContext } from "../../context/authContext";
import moment from "moment";

const SingleMovie = () => {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const { movieId } = router.query;
  const { user } = useContext(AuthContext);

  const { data } = useQuery(FETCH_SINGLE_MOVIE_QUERY, {
    variables: { movieId },
  });
  console.log(data);

  const [createComment] = useMutation(CREATE_COMMENT_MUTATION, {
    update() {
      setComment("");
    },
    variables: {
      movieId: movieId,
      body: comment,
    },
  });

  //   const { id, likes, likeCount, comments, commentCount, img, title, desc,  genre } = data?.getMovie
  return (
    <div className={styles.container}>
      <Menubar />
      <div className={styles.movieDetails}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className={styles.bgShade}>
              <img
                src={data?.getMovie?.img}
                alt="moviePoster"
                className={styles.movieImage}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <SectionTitle title={data?.getMovie?.title} />
            <span>5th July 2021</span>
            <div style={{ marginTop: 50 }}>{data?.getMovie?.desc}</div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.movieFooter}>
        <div className={styles.commonStyle}>
          <LikeButton
            movie={{
              id: data?.getMovie?.id,
              likes: data?.getMovie?.likes,
              likeCount: data?.getMovie?.likeCount,
            }}
          />
        </div>
        <div className={styles.commonStyle}>
          <ChatBubbleIcon style={{ color: "white", marginRight: 10 }} />
          <h4 className={styles.fontSizeCommon}>
            {data?.getMovie?.commentCount}
          </h4>
        </div>
        <div className={styles.commonStyle}>
          <img
            src={data?.getMovie?.img}
            // layout="fill"
            alt="posterMini"
            className={styles.moviePosterMini}
          />
        </div>
        <div className={styles.commonStyle}>
          <h4 className={styles.fontSizeCommon}>Duration</h4>
          <span className={styles.title}>3 Hours</span>
        </div>
        <div className={styles.commonStyle}>
          <h4 className={styles.fontSizeCommon}>Genre</h4>
          <span className={styles.title}>{data?.getMovie?.genre}</span>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <div className={styles.commentBox}>
            <h4 className={styles.titleTwo}>Post a comment</h4>
            <div className={styles.writeComment}>
              <FormInput
                placeholder="Post a comment"
                className={styles.input}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                name="comment"
              />
              <button
                className={styles.playBtn}
                onClick={createComment}
                disabled={comment.trim() === ""}
              >
                Post
              </button>
            </div>
            {data?.getMovie?.comments?.map((comment) => (
              <div key={comment.id} className={styles.allComments}>
                <div>
                  <strong style={{ fontSize: 18 }}>{comment.username}</strong>
                  <br />
                  <small style={{ color: "gray" }}>{moment(comment.createdAt).fromNow()}</small>
                  <p>{comment.body}</p>
                </div>
                {user && user.username === comment.username && (
                  <DeleteButton
                    movieId={data?.getMovie?.id}
                    commentId={comment.id}
                  />
                )}
              </div>
            ))}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={styles.commentBox}>
            <h4 className={styles.titleTwo}>See more</h4>
            <GetAllMovies />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleMovie;
