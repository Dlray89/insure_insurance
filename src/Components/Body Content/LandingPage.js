import React from "react";
import {
  makeStyles,
  Grid,
  Button,
  Divider,
  Typography,
  theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import HeaderPic from "../../images/header_pic.jpg";
import bg_right_pattern from "../../images/bg-pattern-intro-right-desktop.svg";
import LeftPattern from "../../images/leftPattern.svg";
import SnappyProcess from "../../images/snappy-process.svg";
import AffordablePrices from "../../images/affordable-prices.svg";
import PeopleFirst from "../../images/people-first.svg";
import Howwework from "../../images/how-we-work-desktop.svg";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: theme.palette.common.veryDarkViolet,
    backgroundImage: "url(" + bg_right_pattern + ")",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "100%",
    zIndex: 1302,
  },
  headerTextContainer: {
    width: "40%",
    marginRight: "38em",
  },
  headerDivider: {
    color: theme.palette.common.white,
    marginTop: "2em",
  },
  headerTitle: {
    fontSize: "5em",
    ...theme.typography.header,
    marginBottom: "0.25em",
  },
  headerSubTitle: {
    fontSize: "1em",
    color: theme.palette.common.white,
    marginBottom: "2em",
    fontFamily: "DM Serif Display",
  },
  headerButton: {
    border: " solid 2px white",
    color: theme.palette.common.white,
    marginBottom: "5em",
    fontFamily: "DM Serif Display",
    "&:hover": {
      background: theme.palette.common.white,
      color: "hsl(270, 9%, 17%)",
      border: "solid 1px white",
    },
  },
  picContainer: {
    width: "30%",
    position: "absolute",
    marginTop: "3.2em",
    marginLeft: "25em",
  },
  img: {
    height: "40em",
  },
  LeftPattern: {
    position: "absolute",
    top: "75%",
  },
  leftPatternIimg: {
    width: "13em",
  },
  mainValueContainer: {
    width: "90%",
    marginLeft: "7.2em",
    marginTop: "3em",
  },

  valueTitleCOntainer: {
    width: "30%",
    marginBottom: "4em",
    
  },
  vaulueIcons: {
    height: "4em",
    textAlign: "left",
  },
  snappyProcessContainer: {
    width: "26%",
  },
  valueContainers: {
    width: "29.6%",
    marginRight: "2em",
  },
  valueTitleContainer: {
    marginRight: "auto",
    marginBottom: "1em",
  },
  valueTitle: {
    fontFamily: "DM Serif Display",
    fontSize:'2em'
  },
  valuedetails:{
    fontFamily: "DM Serif Display",
    fontWeight: 0,
    fontSize:'0.85em'
  },
  findoutMoreContainer: {
    padding: "3%",
    width: "83.5%",
    margin: "9% auto",
    background: theme.palette.common.darkViolet,
    backgroundImage: "url(" + Howwework + ")",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "100%",
    backgroundSize: "33%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MobileMD = useMediaQuery(theme.breakpoints.down("md"));

  const valuesInsure = [
    {
      id: 1,
      name: "Snappy Process",
      details:
        "Our application process can be completed in minutes, not hours dont get stuck filling in tedious forms.",
      icon: SnappyProcess,
      iconAlt: "",
    },
    {
      id: 2,
      name: "Affordable Prices",
      details:
        "We dont want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible",
      icon: AffordablePrices,
      iconAlt: "",
    },
    {
      id: 3,
      name: "People First",
      details:
        "Our plans aren't full of conditions and clauses to prevent payouts we make sure your're covered when you need it",
      icon: PeopleFirst,
      iconAlt: "",
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center" className={classes.headerContainer}>
        <Grid
          container
          direction="column"
          justify="space-around"
          className={classes.headerTextContainer}
        >
          <Grid item className={classes.headerDivider}>
            ________________________
          </Grid>
          <Grid item className={classes.headerTitle}>
            Humanize <br />
            your insurance.
          </Grid>

          <Grid item className={classes.headerSubTitle}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </Grid>

          <Grid item>
            <Button
              className={classes.headerButton}
              color="primary"
              variant="outlined"
            >
              {" "}
              View Plans
            </Button>
          </Grid>
        </Grid>

        <Grid container className={classes.picContainer}>
          <Grid item className={classes.PicBox}>
            <img className={classes.img} alt="family" src={HeaderPic} />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.LeftPattern} item container>
        <img
          className={classes.leftPatternIimg}
          alt="left pattern"
          src={LeftPattern}
        />
      </Grid>

      <Divider
        style={{
          background: theme.palette.common.darkViolet,
          marginTop: "30%",
          width: "10%",
          marginLeft: "7.2em",
        }}
      />

      <Grid container className={classes.mainValueContainer}>
        <Grid item container className={classes.valueTitleCOntainer}>
          <Typography variant="h3">We're different</Typography>
        </Grid>

        <Grid
          className={classes.valueContainer}
          item
          container
          direction={MobileMD ? "column" : "row"}
          alignItems="center"
        >
          {valuesInsure.map((value) => (
            <Grid
              direction="column"
              justify="center"
              alignItems="center"
              item
              container
              className={classes.valueContainers}
              key={value.id}
            >
              <Grid item style={{ marginRight: "auto", marginBottom: "2em" }}>
                <img
                  className={classes.vaulueIcons}
                  src={value.icon}
                  alt={value.iconAlt}
                />
              </Grid>

              <Grid className={classes.valueTitleContainer} item>
                <Typography className={classes.valueTitle} variant="h6">
                  {value.name}
                </Typography>
              </Grid>

              <Grid item className={classes.valueDetailContainer}>
                <Typography
                  className={classes.valuedetails}
                  variant="subtitle1"
                >
                  {value.details}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item container className={classes.findoutMoreMainContainer}>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          item
          container
          className={classes.findoutMoreContainer}
        >
          <Grid
            className={classes.findoutmoreTitleContainer}
            item
            style={{ width: "50%" }}
          >
            <Typography
              className={classes.findoutmoreTitle}
              style={{ color: "white", fontFamily: "DM Serif Display" }}
              variant="h4"
            >
              Find out more <br /> about how we work
            </Typography>
          </Grid>

          <Grid item>
            <Button
              style={{
                borderColor: "white",
                color: "white",
                fontFamily: "DM Serif Display",
              }}
              variant="outlined"
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
