import { Grid } from "@material-ui/core";
import withAuth from "../../../components/HOC/withAuth";
import AdminSidebar from "../../../parts/admin/SideBar/AdminSidebar";
import styles from "./AdminLayout.module.css";

const AdminLayout = (props) => {
  return (
    <Grid container style={{background: "white"}}>
      {/* sidebarLeft */}
      <Grid item md={2}>
        <AdminSidebar />
      </Grid>
      {/* body */}
      <Grid item md={10}>
        <div className={styles.layoutContent_wrapper}>{props.children}</div>
      </Grid>
    </Grid>
  );
};

export default withAuth(AdminLayout);
