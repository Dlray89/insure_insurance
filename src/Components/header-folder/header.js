import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import Header_pic from '../../images/header_pic.jpg'
import rightPattern from '../../images/bg-pattern-intro-right-desktop.svg'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        border: 'solid 2px blue',
        background: 'hsl(256, 26%, 20%)',
        color: 'white',
        display:'flex',
        boxSizing:'border-box',
        justifyContent:'space-evenly'

    },
    firstBox:{
        border: 'solid 2px blue',
        width:'100%',
        boxSizing:'border-box',
        marginLeft:'5%',
        marginRight:'5%'
    },
    fbText1:{
        border: 'solid 2px red',
        width:'70%',
        margin:'0 auto',
        textAlign:'start',
        boxSizing:'border-box',
        marginTop:'15%'
    },
    fbText2:{
        border: 'solid 2px red',
        width:'70%',
        margin:'0 auto',
        fontSize:'50px',
        textAlign:'start',
        boxSizing:'border-box'
    },
    fbText3:{
        border: 'solid 2px red',
        width:'70%',
        margin:'0 auto',
        boxSizing:'border-box',
        textAlign:'start',
    },
    fbButton:{
        border:'solid 2px red',
        width:'70%',
        margin:'0 auto',
        textAlign:'start',
        boxSizing:'border-box'
    },
    button:{
        
        background:'white',
        color:'black',
        '&:hover':{
            background:'black',
            color:'white'
        },
        
    },

    secondBox:{
        border: 'solid 2px green',
        color:'white',
        boxSizing:'border-box',
        marginLeft:'20%',
        width:'70%'
    },
    sbImg:{
        border: 'solid 2px blue',
        width:'25%',
        position:'relative',
        top:'40%'
       
    },
    rightpattern:{
        width:'20%',
        
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>

            <div className={classes.firstBox}>
                <div className={classes.fbText1}>
                    ______________________
            </div>

                <div className={classes.fbText2}>
                    Humanizing Your Insurance.
            </div>

                <div className={classes.fbText3}>
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
            </div>
                <div className={classes.fbButton}>
                    <Button className={classes.button} variant='outlined'>View Plans</Button>
                </div>
            </div>



           
                
               
                <img className={classes.sbImg} src={Header_pic} alt='man holding child hands' />
                
               

           

         
            <img className={classes.rightpattern} src={rightPattern} alt='design lines' />
            

        </div>
    )
}

export default Header