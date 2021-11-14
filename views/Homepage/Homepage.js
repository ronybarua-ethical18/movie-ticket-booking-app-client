import { Divider } from "@material-ui/core";
import { useContext } from "react";
import Menubar from "../../components/Menubar/Menubar";
import { AuthContext } from "../../context/authContext";
import HomeContent from "../HomeContent/HomeContent";
import LatestMovies from "../LatestMovies/LatestMovies";
import "./Homepage";
import styles from './Homepage.module.css'
const Homepage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Menubar />
        <HomeContent />
       {user && <LatestMovies />}
      </div>
    </div>
  );
};

export default Homepage;
