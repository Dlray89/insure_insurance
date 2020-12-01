import React from 'react'
import {makeStyles, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        border:'solid 2px red',
        display:'flex',
        boxSizing:'border-box',
        width:'100%',
        justifyContent:'space-between'
    },
    navLogo:{
        border:'solid 2px blue',
        width:'20%',
        boxSizing:'border-box',
        margin:'0%',
        padding:'2%'
    },
    navLinks:{
        border:'solid 2px yellow',
        display:'flex',
        width:'50%',
        justifyContent:'space-evenly',
        boxSizing:'border-box',
    },
    links:{
        border:'solid 2px blue',
        width:'20%',
        textAlign:'center',
        boxSizing:'border-box',
        padding:'2%',
        color:'hsl(216, 30%, 68%)',
        '&:hover':{
            color:'black'
        }
        

    },
    button:{
        border:'solid 2px blue',
        boxSizing:'border-box',
        margin:'2%',
        width:'20%',
        background:'hsl(256, 26%, 20%)',
        color:'white',
        '&:hover':{
            color:'black'
        }
    }
}))

const NavBar = () => {
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
            <div className={classes.navLogo}>
                INSURE
            </div>

            <div className={classes.navLinks}>
                <p className={classes.links}>How we work</p>
                <p className={classes.links}>Blog</p>
                <p className={classes.links}>Account</p>
                <Button variant='outlined' className={classes.button} >
                    View Plans
                </Button>
            </div>
        </div>
    )
}

export default NavBar