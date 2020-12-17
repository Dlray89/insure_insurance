import {createMuiTheme} from '@material-ui/core'

//Primary
const darkViolet = 'hsl(256, 26%, 20%)'
const grayBlue = 'hsl(216, 30%, 68%)'
//Secondary

const veryDarkViolet = 'hsl(270, 9%, 17%)'
const darkGreyViolet =  'hsl(273, 4%, 51%)'

const veryLightGrey = 'hsl(0, 0%, 98%)'


export default createMuiTheme({
    palette: {
        common:{
            darkViolet: darkViolet,
            grayBlue: grayBlue,
            veryDarkViolet: veryDarkViolet,
            darkGreyViolet: darkGreyViolet,
            veryLightGrey: veryLightGrey,
            white: 'white'

        },
        primary:{
            main: darkViolet
        },
        secondary: {
            main: veryDarkViolet
        }
    },
    typography:{
        nav:{
            fontWeight: 400,
            fontFamily: 'DM Serif Display',
            color: darkViolet
        },
        body: {
            fontWeight: 400,
            fontFamily: 'Karla'
        },
        logoTitle:{
            color:veryDarkViolet,
            fontSize: '28px',
            fontFamily: 'DM Serif Display'
        },
        footer:{
            fontFamily: 'DM Serif Display',
            fontWeight: 400
        },
        header:{
            fontFamily: 'DM Serif Display',
            fontWeight: 400,
            color: 'white'
        }
    },

})