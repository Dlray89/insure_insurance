import React from 'react'
import { makeStyles, Button} from '@material-ui/core'

import Snappy_icon from '../../images/snappy-process.svg'
import Affordable_prices from '../../images/affordable-prices.svg'
import People_first from '../../images/people-first.svg'
import How_we_work from '../../images/how-we-work-desktop.svg'

const useStyle = makeStyles((theme) => ({
    mainContainer:{
    
    },
    line:{
       
        marginTop:'17%',
        textAlign:'left',
        marginLeft:'12%'
    },
    title_box:{
       
    },
    body_title:{
   
        marginLeft:'12%',
        textAlign:'left',
        fontSize:'40px'
    },
    Value_options:{
     
        display:'flex',
        boxSizing:'border-box',
        justifyContent:'space-evenly',
        alignContent:'center'
    },
    snappy_process:{
       
        width:'23%',
        boxSizing:'border-box',
        textAlign:'left',
        marginLeft:'5.6%',
    },
    snappy_process_logo:{
      
    },
    icon:{
        width:'25%'
    },
    Affordable_prices:{
        
        width:'23%',
        boxSizing:'border-box',
        textAlign:'left'
    },
    people_first:{
        
        width:'23%',
        boxSizing:'border-box',
        textAlign:'left'
    },
    how_we_work:{
     
        boxSizing:'border-box',
        width:"81.5%",
        marginLeft:'12.1%',
        marginTop:'5%',
        padding:'0.5%',
        display:'flex',
        justifyContent:'space-between',
        alignContent:'center',
        background:'hsl(256, 26%, 20%)',
        backgroundImage:'url('+ How_we_work +')',
        backgroundRepeat:'no-repeat',
        backgroundPositionX:'100%'
    },
    how_we_work_text:{
        
        fontSize:'50px',
        width:'60%',
        textAlign:'left',
        boxSizing:'border-box',
        color:'white',
        marginLeft:'5%'
    },
    how_we_work_button:{
        
        width:'20%',
        boxSizing:'border-box',
        marginRight:'5%'
        
    },
    button:{
       
        marginTop:'44%',
        background:'hsl(256, 26%, 20%)',
        color:'white',
        width:'75%',
        border:'solid 2px white',
        '&:hover':{
            background:'white',
            color:'hsl(256, 26%, 20%)',
            border:'solid 1px white'
        }
    }
}))



const Body_Content = () => {
    const classes = useStyle()

    return(
        <div className={classes.mainContainer}>
                <div className={classes.line}>
                    _____________________
                </div>

                <div className={classes.title_box}>
                    <h1 className={classes.body_title}>
                        We're different
                    </h1>
                </div>


                <div className={classes.Value_options}>
                    <div className={classes.snappy_process}>
                        <div className={classes.snappy_process_logo}>

                            <img className={classes.icon} src={Snappy_icon} alt='icon of dollar sign'  />
                            
                        </div>
                        <h2>
                            Snappy Process
                        </h2>

                        <p>
                            Our Application process can be completed in minutes, not hours. Dont get stuck filling in tedious forms
                        </p>

                    </div>

                    <div className={classes.Affordable_prices}>

                        <div>
                        <img className={classes.icon} src={Affordable_prices} alt='icon of dollar sign'  />

                        </div>

                        <h2>Affordable Prices</h2>

                        <p>We dont want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible</p>

                    </div>

                    <div className={classes.people_first}>

                        <div>
                        <img className={classes.icon} src={People_first} alt='icon of dollar sign'  />

                        </div>

                        <h2>
                            People First
                        </h2>

                        <p>
                            Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.
                        </p>

                    </div>
                </div>

                <div className={classes.how_we_work}>

                    <p className={classes.how_we_work_text}>Find out more <br /> about how we work</p>
                    <div className={classes.how_we_work_button} >

                    <Button className={classes.button} variant='outlined'>How we Work</Button>
                    </div>
                    

                </div>
        </div>
    )
}

export default Body_Content