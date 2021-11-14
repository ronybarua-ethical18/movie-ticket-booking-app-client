import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { LIKE_MOVIE_MUTATION } from "../../utilities/hooks/GraphQL/MutationLikeMovie";


const LikeButton = ({ movie: { id, likes, likeCount } }) => {
  const [liked, setLiked] = useState(false);
  const { user } = useContext(AuthContext);
  const likeButton = user ? (
    liked ? (
      <FavoriteIcon style={{ color: "white", marginRight: 10 }} />
    ) : (
      <FavoriteBorderIcon style={{ color: "white", marginRight: 10 }} />
    )
  ) : (
    <FavoriteIcon style={{ color: "white", marginRight: 10 }} />
  );

  const [likeMovie] = useMutation(LIKE_MOVIE_MUTATION, {
      variables: {movieId: id}
  })

  useEffect(() => {
    if (user && likes?.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);
  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={likeMovie}>
        {likeButton}
        <h4 style={{ fontSize: 16, color: "white" }}>{likeCount}</h4>
      </IconButton>
    </div>
  );
};


export default LikeButton;
