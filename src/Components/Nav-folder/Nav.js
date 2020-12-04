import React from 'react'
import {makeStyles, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainContainer:{
    
        display:'flex',
        boxSizing:'border-box',
        width:'100%',
        justifyContent:'space-between'
    },
    navLogo:{
     
        width:'20%',
        boxSizing:'border-box',
        margin:'0%',
        padding:'2%'
    },
    navLinks:{
        
        display:'flex',
        width:'50%',
        justifyContent:'space-evenly',
        boxSizing:'border-box',
    },
    links:{
      
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
      
        boxSizing:'border-box',
        margin:'2%',
        width:'20%',
        background:'white',
        color:'hsl(256, 26%, 20%)',
        border:' solid 2px hsl(256, 26%, 20%)',
        '&:hover':{
            background:'hsl(256, 26%, 20%)',
            color:'white',
            border:'solid 2px white'
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