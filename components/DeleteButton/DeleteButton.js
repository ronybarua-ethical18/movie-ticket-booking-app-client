import React from "react";
import { useMutation } from "@apollo/client";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { DELETE_COMMENT_MUTATION } from "../../utilities/hooks/GraphQL/DeleteCommentMutation";
import styles from  './DeleteButton.module.css'

const DeleteButton = ({ movieId, commentId }) => {
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: { movieId, commentId },
  });
  return (
    <div>
      <DeleteOutlineIcon onClick={deleteComment} fontSize="large" className={styles.iconStyle} />
    </div>
  );
};

export default DeleteButton;
