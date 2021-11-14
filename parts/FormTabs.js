import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import LoginForm from '../views/Login/LoginForm'
import RegisterForm from '../views/Login/RegisterForm'
import styles from './FormTabs.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
         {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"transparent",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* tabs */}
      <Grid spacing={3} container>
        <Grid item xs={10}>
          <AppBar position="static">
            <Grid item xs={12} style={{display:"flex", justifyContent: "center"}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="simple tabs example"
                >
                  <Tab label="Login" className={styles.fontFamily} {...a11yProps(0)} />
                  <Tab label="Register" className={styles.fontFamily} {...a11yProps(1)} />
                </Tabs>
            </Grid>
          </AppBar>
        </Grid>
      </Grid>

      <TabPanel value={value} index={0}>
       <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterForm />
      </TabPanel>
    </div>
  );
}
