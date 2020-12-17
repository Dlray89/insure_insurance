import React, { useState, useEffect } from "react";
import {
  makeStyles,
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
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import mobilePattern from '../../images/mobile.svg'
const useStyles = makeStyles((theme) => ({
  
  logo: {
    marginLeft: "10em",
    [theme.breakpoints.down('md')]:{
        marginLeft: '3em'
    }
  },
  tabsContainer: {
    marginLeft: "20.5em",
  },
  tabs: {
    ...theme.typography.nav,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]:{
        marginBottom: '1em'
    }
  },
  draweritem: {
    ...theme.typography.nav,
    opacity: 0.7,
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]:{
        textAlign:'center'
    }
  },
  drawerItemSelectedStyle: {
    opacity: 1,
  },
  drawerIcon: {
    border: 'solid 2px hsl(256, 26%, 20%)',
    height: '1.55em',
    width:'1.55em',
    color:'hsl(256, 26%, 20%)',
    
  },
  drawerIconContainer: {
    border: 'solid 2px red',
    '&:hover':{
        background: 'transparent'
    }
  },
  viewPlanContinaer:{
    border: 'solid 1px white',
  },
  appBar: {
      zIndex: theme.zIndex.modal + 1,
      background: theme.palette.common.white,
  },
  drawer:{
      background: theme.palette.common.darkViolet,
      width:'50%',
      backgroundImage: 'url(' + mobilePattern +')',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: '100%',
      backgroundSize: '20em',
      backgroundPositionX:'-3em'

  },
  viewPlansButton: {
      border: 'solid 2px hsl(256, 26%, 20%)',
      color: theme.palette.common.darkViolet,
      marginLeft: '1.55rem',
      '&:hover':{
          background: 'hsl(256, 26%, 20%)',
          border: 'solid 2px white',
          color: theme.palette.common.white
      }
  }
  
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const iOS = process.browser && /iPad|iPhone| iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);



  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

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
      case "/viewplans":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);


  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "How it works", to: "/howitworks" },
    { id: 3, name: "Blogs", to: "/blogs" },
    { id: 4, name: "Accounts", to: "/accounts" },
  ];

  const deskTopTabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleTabChange}
        className={classes.tabsContainer}
      >
        {navLinks.map((link) => (
          <Tab
            key={link.id}
            className={classes.tabs}
            component={Link}
            to={link.to}
            label={link.name}
          />
        ))}
        <Button  className={classes.viewPlansButton} variant="outlined" component={Link} to="viewplans">
          View Plans
        </Button>
      </Tabs>
      
    </React.Fragment>
  );

  const mobileTabs = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
          <div className={classes.toolbarMargin}  />
        <List disablePadding>
          <ListItem
            selected={value === 0}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            selected={value === 1}
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/howitworks"
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              How it works
            </ListItemText>
          </ListItem>

          <ListItem
            selected={value === 2}
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/blogs"
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Blogs
            </ListItemText>
          </ListItem>

          <ListItem
            selected={value === 3}
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/accounts"
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Accouns
            </ListItemText>
          </ListItem>

          <ListItem
          className={classes.viewPlanContinaer}
            selected={value === 4}
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/viewplans"
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              View Plans
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        style={{marginLeft: 'auto'  }}
        disableRipple
        disableRippleTouch
        onClick={() => setOpenDrawer(!openDrawer)}
        classes={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  
  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar disableGutters>
          <img
            alt="Logo of insure insurance"
            src={Logo}
            className={classes.logo}
          />
          {matches ? mobileTabs : deskTopTabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default NavBar;
