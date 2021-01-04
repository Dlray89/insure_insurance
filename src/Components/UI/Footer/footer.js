import React from "react";
// import {Link} from 'react-router-dom'
import { makeStyles, Grid, useTheme, useMediaQuery } from "@material-ui/core";
import Logo from "../../../images/logo.svg";
import FB from "../../../images/icon-facebook.svg";
import Twitter from "../../../images/icon-twitter.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import Instagram from "../../../images/icon-instagram.svg";
import footerPattern from "../../../images/footer-desktop.svg";

const useStyles = makeStyles((theme) => ({
  gridLinkContainer: {
    width: "10em",
    margin: '4.75em',
    height: '12em',
    [theme.breakpoints.down('md')]:{
        marginLeft: '4em',
        marginBottom: 0,

    }
  },
  LinkTitle:{
      marginBottom: '1em',
      ...theme.typography.footer,
      color:'hsl(273, 4%, 51%)',
      [theme.breakpoints.down('sm')]:{
        textAlign: 'center',
        width:'100%' 
    }
      
      
  },
  linkItems:{
      marginBottom: '0.75em',
      ...theme.typography.footer,
      [theme.breakpoints.down('md')]:{
          textAlign: 'center'
      }
  },
  divider: {
      borderBottom: 'solid 1px hsl(216, 30%, 68%)',
      margin: '0 auto',
      width: '80%'
  },
  logoContainer:{
    [theme.breakpoints.down('sm')]:{
      margin: 0,
      width:'100%',
      textAlign:'center',
      marginBottom:'1em'
    }
  },
  footerLogo:{
      marginLeft: '10em',
      [theme.breakpoints.down('sm')]:{
        margin: 0,
        width:'8em'
      }
      
  },
  logoAndSocial:{
      marginTop:'3em',
  },
  mainGridContainer:{
      backgroundImage: 'url(' + footerPattern +')',
      backgroundRepeat: 'no-repeat',
      background: theme.palette.common.veryLightGrey
  },
  socialMediaContainer:{
      width: 200,
      marginRight:'8.5em',
      [theme.breakpoints.down('md')]:{
          marginRight: '7%',
          marginLeft: '8em',
          
      }
  },
  gridLinksContainer:{
    width:'95%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]:{
      width:'100%',
      margin: 0
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme()
  const mobileSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div>
      <Grid container className={classes.mainGridContainer} >
        <Grid justify='space-between' className={classes.logoAndSocial} container>

            <Grid item className={classes.logoContainer}>
            <img className={classes.footerLogo} alt="Logo for insure insurance" src={Logo} />
            </Grid>

            
            <Grid container justify='space-evenly' className={classes.socialMediaContainer}>
            <Grid item><img src={FB} alt='FAcebook logo'  /></Grid>
            <Grid item><img src={Twitter} alt='Twitter logo'  /></Grid>
            <Grid item> <img src={Pinterest} alt='Pinterest logo'  /></Grid>
            <Grid item><img src={Instagram} alt='Instagram logo'  /></Grid> 
                
               
                
            </Grid>
        </Grid>

        <Grid   container className={classes.divider} >
        
        </Grid>

            <Grid direction={mobileSM ? 'column' :'row'} justify='center' className={classes.gridLinksContainer}  container>

        <Grid  alignItems='center' justify='center' item  container>
          <Grid direction="column" container  className={classes.gridLinkContainer}>
            <Grid className={classes.LinkTitle} >Our Company</Grid>
            <Grid item className={classes.linkItems} >Why insure</Grid>
            <Grid item className={classes.linkItems}> View Plans</Grid>
            <Grid item className={classes.linkItems}> Review</Grid>
          </Grid>

          <Grid container item className={classes.gridLinkContainer}>
            <Grid className={classes.LinkTitle} item>Help Me</Grid>
            <Grid container direction="column">
              <Grid item className={classes.linkItems}>FAQ</Grid>
              <Grid item className={classes.linkItems}>Terms of use</Grid>
              <Grid item className={classes.linkItems}>Privacy Policy</Grid>
              <Grid item className={classes.linkItems}>Cookies</Grid>
            </Grid>
          </Grid>

          <Grid item container className={classes.gridLinkContainer}>
              <Grid className={classes.LinkTitle} item>
                  Contact
              </Grid>
              <Grid container direction='column'  >
                  <Grid item className={classes.linkItems}>Sales</Grid>
                  <Grid item className={classes.linkItems}>Support</Grid>
                  <Grid item className={classes.linkItems}>Live Chat</Grid>
              </Grid>
          </Grid>

          <Grid item container className={classes.gridLinkContainer}>
              <Grid className={classes.LinkTitle} item>
                  Others
              </Grid>
              <Grid container direction='column'  >
                  <Grid item className={classes.linkItems}>Careers</Grid>
                  <Grid item className={classes.linkItems}>Press</Grid>
                  <Grid item className={classes.linkItems}>Licenses</Grid>
              </Grid>
          </Grid>

          </Grid>



        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
