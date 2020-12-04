import React from 'react'
import {makeStyles, Divider} from '@material-ui/core'

import FB from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'
import footerPattern from '../../images/footer-desktop.svg'


const usestyles = makeStyles((theme) => ({
    mainContainer:{
        
        background:'hsl(0, 0%, 98%)',
        marginTop:'5%',
        backgroundImage:'url('+ footerPattern +')',
        backgroundRepeat:'no-repeat'
    },
    
    logoandSocial:{
       
        display:'flex',
        justifyContent:'space-between',
        alignContent:'center',
        boxSizing:'border-box'
    },
    Title:{
       
        width:'30%',
        textAlign:'left',
        marginLeft:'12%',
        boxSizing:'border-box',
        fontSize:'30px',
        color:'hsl(256, 26%, 20%)'
    },
    iconsContainer:{
       
        width:'15%',
        textAlign:'right',
        marginRight:'6%',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'space-evenly'
    },
    icons:{
        width:'10%',
        height:'28%',
        marginTop:'14%',
        '&:hover':{
            color:'hsl(256, 26%, 20%)'
        }
    },
    linksContainer:{
      
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'space-evenly',
        boxSizing:'border-box'
    },
    ourcompany:{
        
        width:'15%',
        marginLeft:'5.3%',
        textAlign:'left',
        boxSizing:'border-box',
        color:'hsl(256, 26%, 20%)'
       
    },
    helpme:{
        
        width:'15%',
        textAlign:'left',
        boxSizing:'border-box',
        color:'hsl(256, 26%, 20%)'
    },
    contact:{
        
        width:'15%',
        textAlign:'left',
        boxSizing:'border-box',
        color:'hsl(256, 26%, 20%)'
    },
    others:{
        
        width:'15%',
        textAlign:'left',
        boxSizing:'border-box',
        color:'hsl(256, 26%, 20%)'
    },
    divider:{
        background:'hsl(216, 30%, 68%)',
        width:'81.7%',
        margin:'1% 0% 2% 12.3%',
        
    },
    links:{
        '&:hover':{
            textDecoration:'underline'
        }
    }
}))


const Footer = () => {
    const classes = usestyles()
    return(
        
        <div className={classes.mainContainer}>

            <div className={classes.logoandSocial}>
                <h3 className={classes.Title}>Insure</h3>

                <div className={classes.iconsContainer} >
                    <img  className={classes.icons} src={FB} alt='Facebook icon'  />
                    <img className={classes.icons} src={Twitter} alt='Twitter icon'  />
                    <img className={classes.icons} src={Pinterest} alt='Pinterest icon'  />
                    <img className={classes.icons} src={Instagram} alt='instagram icon'  />
                </div>
                
            </div>
            <Divider className={classes.divider} />
            <div className={classes.linksContainer}>

<div className={classes.ourcompany}>
    <h4>Our Company</h4>

    <div>
        <p className={classes.links}>HOW WE WORK </p>
        <p className={classes.links}>WHY INSURE? </p>
        <p className={classes.links}>VIEW PLANS</p>
        <p className={classes.links}>REVIEWS</p>
    </div>
</div>


<div className={classes.helpme}>
    <h4>HELP ME</h4>

    <div>
        <p className={classes.links}>FAQ</p>
        <p className={classes.links}>TERMS OF USE</p>
        <p className={classes.links}>PRIVACY POLICY</p>
        <p className={classes.links}>COOKIES</p>
    </div>
</div>

<div className={classes.contact}>
    <h4>
        CONTACT
    </h4>

    <div>
        <p className={classes.links}>SALES</p>
        <p className={classes.links}>SUPPORT</p>
        <p className={classes.links}>LIVE CHAT</p>
    </div>
</div>

<div className={classes.others}>
    <h4>OTHERS</h4>
    <div>
        <p className={classes.links}>CAREERS</p>
        <p className={classes.links}>PRESS</p>
        <p className={classes.links}>LICENSES</p>
      
    </div>
</div>


</div>

        </div>
    )
}

export default Footer