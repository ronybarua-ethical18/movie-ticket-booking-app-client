import { Container } from "@material-ui/core";
import styles from '../styles/Home.module.css'
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <Meta />
        <main className="">{children}</main>
    </div>
  );
};

export default Layout;
