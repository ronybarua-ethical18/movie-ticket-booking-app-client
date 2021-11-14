import React, { useContext } from "react";
import styles from "./SectionTitle.module.css";
import Link from "next/link";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AuthContext } from '../../context/authContext'
import LoggedInUser from "../LoggedInUser/LoggedInUser";
import { useRouter } from "next/router";

const SectionTitle = ({ title }) => {
  const {user, logout} = useContext(AuthContext)
  const router = useRouter()
  return (
    <div style={{display: "flex", alignItems: "baseline", justifyContent:"space-between"}}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {!router.pathname === '/singleMovie' &&<div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
        <LoggedInUser />
        <Link href="/"><ExitToAppIcon onClick={logout} style={{ marginLeft: 15, cursor: "pointer" }} /></Link>
      </div>}
    </div>
  );
};

export default SectionTitle;
