import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import Logo from "../../../images/logo.svg";
import mobilePattern from "../../../images/mobile.svg";
const useStyles = makeStyles((theme) => ({
  logo: {
    marginLeft: "7.2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "3em",
    },
  },
  tabsContainer: {
    marginLeft: "3.5em",
  },
  tabs: {
    ...theme.typography.nav,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },
  draweritem: {
    ...theme.typography.nav,
    opacity: 0.7,
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  drawerItemSelectedStyle: {
    opacity: 1,
  },
  drawerIcon: {
    border: "solid 2px hsl(256, 26%, 20%)",
    height: "1.55em",
    width: "1.55em",
    color: "hsl(256, 26%, 20%)",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      background: "transparent",
    },
  },
  viewPlanContinaer: {
    border: "solid 1px white",
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    background: theme.palette.common.white,
  },
  drawer: {
    background: theme.palette.common.darkViolet,
    width: "50%",
    backgroundImage: "url(" + mobilePattern + ")",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "100%",
    backgroundSize: "20em",
    backgroundPositionX: "-3em",
  },
  viewPlansButton: {
    border: "solid 2px hsl(256, 26%, 20%)",
    color: theme.palette.common.darkViolet,
    fontFamily: "DM Serif Display",
    background:'white',
    "&:hover": {
      background: "hsl(256, 26%, 20%)",
      border: "solid 2px white",
      color: theme.palette.common.white,
    },
  },
}));

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const iOS = process.browser && /iPad|iPhone| iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "How it works", to: "/howitworks" },
    { id: 3, name: "Blogs", to: "/blogs" },
    { id: 4, name: "Accounts", to: "/accounts" },
  ];

  // const valueHandler = (e, newValue) => {
  //   setValue(newValue);
  // };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/howitworks":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/blogs":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/accounts":
        if (value !== 3) {
          setValue(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const deskTopTabs = (
    <Grid item container direction='row' justify='space-evenly' alignItems='center'>
      <Grid item>
        <Tabs className={classes.tabsContainer} value={value}>
          {navLinks.map((item) => (
            <Tab
              className={classes.tabs}
              key={item.id}
              label={item.name}
              component={Link}
              to={item.to}
            />
          ))}
        </Tabs>
      </Grid>

      <Grid item>
        <Button className={classes.viewPlansButton}  variant='contained'>View Plans</Button>
      </Grid>
    </Grid>
  );

  const mobileDrawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          {navLinks.map((links) => (
            <ListItem key={links.id}>
              <ListItemText>
                <Typography className={classes.draweritem} variant="h5">
                  {links.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <img
              alt="Logo of insure insurance"
              src={Logo}
              className={classes.logo}
            />
            {matches ? mobileDrawer : deskTopTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default NavBar;
