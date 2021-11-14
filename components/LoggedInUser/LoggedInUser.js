import React, { useContext } from "react";
import styles from './LoggedInUser.module.css'
import { AuthContext } from "../../context/authContext";

const LoggedInUser = () => {
    const {user} = useContext(AuthContext)
  return <strong className={styles.loggedInUser}>{user?.username}</strong>;
};

export default LoggedInUser;
