import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import Header_pic from '../../images/header_pic.jpg'
import rightPattern from '../../images/bg-pattern-intro-right-desktop.svg'
import LeftPattern from '../../images/leftPattern.svg'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
       
        background: 'hsl(256, 26%, 20%)',
        color: 'white',
        display:'flex',
        boxSizing:'border-box',
        width:'100%',justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            border:'solid 2px red',
            flexDirection:'column',
            marginTop:'30%'
        }
        

    },
    firstBox:{
      
        width:'60%',
        boxSizing:'border-box',
       
    },
    fbText1:{
        
        width:'70%',
        margin:'5% auto',
        textAlign:'start',
        boxSizing:'border-box',
        
    },
    fbText2:{
        
        width:'70%',
        margin:'2% auto',
        fontSize:'50px',
        textAlign:'start',
        boxSizing:'border-box',
        fontFamily:'DM Serif Display, serif',
    },
    fbText3:{
        
        width:'70%',
        margin:'2% auto',
        boxSizing:'border-box',
        textAlign:'start',
        fontFamily:'DM Serif Display, serif',
    },
    fbButton:{
      
        width:'70%',
        margin:'0 auto',
        textAlign:'start',
        boxSizing:'border-box'
    },
    button:{
        
        background:'hsl(256, 26%, 20%)',
        color:'white',
        border:'solid 2px white',
        fontFamily:'DM Serif Display, serif',
        '&:hover':{
            background:'white',
            color:'hsl(256, 26%, 20%)'
        },
        
    },

    secondBox:{
      
        color:'white',
        boxSizing:'border-box',
        width:'30%',
        height:'75vh',
        backgroundImage:'url('+ Header_pic+')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        position:'absolute',
        left:'54%',
        top:'24%',
        [theme.breakpoints.down('xs')]:{
            border:'solid 2px yellow',
            position:'absolute',
            top:'20%',
            width:'100%',
            left:'0%'
        }
    },
   
    rightpattern:{
        width:'60%',
        
    },
    rightPatternBox:{
        width:'40%', 
        textAlign:'right',
        zIndex:1
    },
    leftPatternBox:{
      
        position:'absolute',
        left:'0%',
        top:'60%'
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <div className={classes.leftPatternBox}>
                <img src={LeftPattern} alt='left pattern' />
            </div>
            <div className={classes.firstBox}>
                <div className={classes.fbText1}>
                    ______________________
            </div>

                <div className={classes.fbText2}>
                    Humanizing <br />Your Insurance.
            </div>

                <div className={classes.fbText3}>
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
            </div>
                <div className={classes.fbButton}>
                    <Button className={classes.button} variant='outlined'>View Plans</Button>
                </div>
            </div>



           
                
               <div className={classes.secondBox}>
               
               </div>
                
               

           
            <div className={classes.rightPatternBox}>
            <img className={classes.rightpattern} src={rightPattern} alt='design lines' />
            
            </div>
            
            

        </div>
    )
}

export default Header