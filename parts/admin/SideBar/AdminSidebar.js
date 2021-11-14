import styles from "./AdminSidebar.module.css";
import Link from "next/link";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WorkIcon from "@material-ui/icons/Work";
import PaymentIcon from "@material-ui/icons/Payment";
import WarningIcon from "@material-ui/icons/Warning";
import SettingsIcon from "@material-ui/icons/Settings";
import LogOutButton from '../../../components/LogOutButton/LogOutButton'
const adminNavs = [
  {
    logo: <DashboardIcon style={{marginRight: 15}} />,
    text: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    logo: <RecentActorsIcon style={{marginRight: 15}} />,
    text: "User List",
    link: "/admin/dashboard/user-control",
  },
  {
    logo: <PersonIcon style={{marginRight: 15}} />,
    text: "Add Movie",
    link: "/admin/dashboard/addMovie",
  },
  {
    logo: <PersonOutlineIcon style={{marginRight: 15}} />,
    text: "Movie List",
    link: "/admin/dashboard/value-seeker",
  },
  {
    logo: <WorkIcon style={{marginRight: 15}} />,
    text: "Movie Approvals",
    link: "/admin/dashboard/job-aprovals",
  },
  {
    logo: <PaymentIcon style={{marginRight: 15}} />,
    text: "Payment",
    link: "/admin/dashboard/payments",
  },
  {
    logo: <WarningIcon style={{marginRight: 15}} />,
    text: "Reports",
    link: "/admin/dashboard/reports",
  },
  {
    logo: <SettingsIcon style={{marginRight: 15}} />,
    text: "Settings",
    link: "/admin/dashboard/settings",
  },
];

const AdminSidebar = () => {
  return (
    <div className={styles.dashboard__sidebarLeft}>
      <div style={{marginBottom: 20, padding: "0 20px"}}>
        <Link href="/" passHref><h2 className={styles.brandLogo}>Ticket Counter</h2></Link>
      </div>
      {/* navs */}
      <div className={styles.dashboard_navwrapper}>
        {adminNavs.map((nav, i) => (
          <div className={styles.dashboard_navitem} key={i}>
            {nav.logo} <Link href={nav.link}>{nav.text}</Link>
          </div>
        ))}
      </div>
      {/* bottom */}
      <div className={styles.dashboard__sidebarLeftBottom}>
        <div className={styles.dashboard__sidebarLeft_logout}>
          <ExitToAppIcon style={{marginRight: 15}} />
          <LogOutButton style={{color: '#fff'}} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
