import Meta from "../../components/Meta";
import { Grid } from "@material-ui/core";
import Menubar from "../../components/Menubar/Menubar";
import img from "../../public/assets/pngPoster.png";
import Image from "next/image";
import styles  from './Login.module.css'
import FormTabs from '../../parts/FormTabs'

const Login = () => {
  return (
    <div className={styles.formControl}>
      <Meta title="Login page" />
      <div className={styles.container}>
        <Menubar />
        <Grid container style={{marginTop:30}}>
          <Grid item sm={12} xs={12} md={6}>
            <Image src={img} alt="me" />
          </Grid>
          <Grid item sm={12} xs={12} md={6} style={{padding: "0 20px"}}>
            <FormTabs />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
