import React from 'react'
import {makeStyle, Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import HeaderPic from '../../images/header_pic.jpg'
import bg_right_pattern from '../../images/bg-pattern-intro-right-desktop.svg'

const useStyles = makeStyles((theme) => ({
    headerContainer:{
        background: theme.palette.common.veryDarkViolet,
        backgroundImage:'url(' + bg_right_pattern +')',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100%',
        zIndex: 1302
    },
    headerTextContainer:{
        width: '40%',
        marginRight: '38em',

    },
    headerDivider:{
        color: theme.palette.common.white,
        marginTop: '2em'
    },
    headerTitle:{
        fontSize: '5em',
        ...theme.typography.header,
        marginBottom: '0.25em'
    },
    headerSubTitle:{
        fontSize: '1em',
        color: theme.palette.common.white,
        marginBottom: '2em'
    },
    headerButton:{
        border: ' solid 2px white',
        color: theme.palette.common.white,
        marginBottom: '5em',
        '&:hover':{
            background: theme.palette.common.white,
            color: 'hsl(270, 9%, 17%)',
            border: 'solid 1px white',
            
        }
    },
    picContainer:{
        width: '20%',
        position: 'absolute',
        marginTop:'3.2em',
        marginLeft: '25em',
    },  
    img:{
        height: '40em',
        height: '40em',
       
    }   
}))

const LandingPage = () => {
    const classes = useStyles()
    return(
        <React.Fragment className={classes.mainContainer}>
            <Grid container direction justify='center' className={classes.headerContainer}>

                <Grid container direction='column' justify='space-around' className={classes.headerTextContainer}>
                    <Grid item className={classes.headerDivider}>
                        ________________________
                    </Grid>
                    <Grid item className={classes.headerTitle}>
                        Humanize <br />your insurance.
                    </Grid>

                    <Grid item className={classes.headerSubTitle}>
                        Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
                    </Grid>

                    <Grid item>
                        <Button className={classes.headerButton} color='primary' variant='outlined'> View Plans</Button>
                    </Grid>
                </Grid>

                <Grid container className={classes.picContainer}>
                    <Grid item className={classes.PicBox}>
                        <img className={classes.img} alt='picture of a family' src={HeaderPic}  />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default LandingPage