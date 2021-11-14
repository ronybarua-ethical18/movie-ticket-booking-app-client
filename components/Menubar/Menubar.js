import styles from "./Menubar.module.css";
import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import LoggedInUser from "../LoggedInUser/LoggedInUser";
const Menubar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className={styles.menubar}>
      <div className={styles.left}>
        <span className={styles.text}>
          <h1 className={styles.brandText}>
            <Link href="/">Ticket Counter</Link>
          </h1>
        </span>
      </div>
      <div className={styles.right}>
        <div className={styles.navLinks}>
          <div className={styles.navMenu}>
            {/* <Link href="/"> Series</Link> */}
            <Link href="/"> Movies</Link>
          </div>
          {user && <LoggedInUser />}
          {user ? (
            <Link href="/">
              <ExitToAppIcon onClick={logout} style={{ marginLeft: 15, cursor: "pointer" }} />
            </Link>
          ) : (
            <div style={{display: "flex", alignItems: "center"}}>
              <Link href="/login">Login</Link>
              <AccountCircleIcon style={{ marginLeft: 15 }} />
            </div>
          )}
          {/* {!user && <AccountCircleIcon style={{ marginLeft: 15 }} />} */}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
