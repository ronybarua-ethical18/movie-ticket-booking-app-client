import React from "react";
import { useRouter } from "next/router";
import styles from "./LogOutButton.module.css";

const LogOutButton = ({ style }) => {
  const router = useRouter();
  const logOutHandle = () => {
    // const user = 'adminUser' ? 'adminUser' : 'seekerUser' ? 'seekerUser' : 'generatorUser'
    sessionStorage.clear();
    localStorage.clear();
    router.push("/");
  };
  return (
    <button
      style={style}
      className={styles.logoutButton}
      onClick={logOutHandle}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
