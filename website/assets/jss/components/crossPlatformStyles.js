const patternPath = require('../../../public/email-pattern/email-pattern.png')

const crossPlatformStyle = theme => ({
    layout: {
        // backgroundColor: "#595858",
        // backgroundColor: "rgb(10, 2, 1)",
        backgroundColor: "rgb(64,75,90)",
        // backgroundImage: `linear-gradient(0deg, rgba(187,187,188,0.6), rgba(187,187,188,0.6)), url(${patternPath})`,
        backgroundImage: `linear-gradient(0deg, rgba(204, 217, 219,0.6), rgba(204, 217, 219,0.6)), url(${patternPath})`,
        backgroundSize: '100em',
        paddingBottom: '1em'
    //   backgroundColor: "rgb(245, 243, 242)",
    //   background:'linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%, url(tech-rings.svg) )',

        // backgroundImage: 'linear-gradient(rgba(245, 243, 242, 0.95), rgba(245, 243, 242, 0.95) ), url(tech-rings.svg)',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'left top',
        // backgroundSize: '70% 70%',
      // height: "100vh"
    },
    content: {
        width: '50%',
        margin: '0 auto',
        paddingTop: '3rem',
        textAlign: 'center',
        // color: 'white'
        [theme.breakpoints.down('lg')]: {
            width: '60%'
          },
        [theme.breakpoints.down('md')]: {
            width: '75%'
          },
        [theme.breakpoints.down('sm')]: {
            width: '80%'
          },
          [theme.breakpoints.down('xs')]: {
            width: '95%'
          },
    },
    platformContianer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        margin: 'auto',
        marginTop: '3em',
        // backgroundColor: 'red',
        paddingBottom: '2.5em'
    },

    more: {
        // leftBorder: '1px solidd red'
        margin: '1em',
        // paddingLeft: '1em',
        padding: '1em',
        fontSize: '1.2em',
        // borderLeft: '4mm ridge rgb(11, 46, 69, .6)',
        borderLeft: '4mm ridge rgb(10, 83, 108, .6)',
        // backgroundColor: 'rgba(10,83,108,1)',
        backgroundColor: 'rgba(4,124,164,1)',
        color: 'white'
    },
    moreHolder: {
        backgroundColor: 'transparent',
        padding: '15px'
    },
    subheader: {
        borderBottom: '5px solid',
        borderImage: 'radial-gradient(rgb(60,62,75), rgb(24, 122, 168)) 1',
        paddingBottom: '1em'
    },
    screenHolder: {
        padding: '2em',
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(10,83,108,0.1)',
        marginBottom: '1.5em',
    }

    // headerLine: {
    //   backgroundColor:'blue',
    //   margin: '0 auto',
    //   marginBottom: '25px',
    //   marginTop: '15px',
    //   height: '5px',
    //   width: '5rem',
    //   borderRadius: '25%'
    // }
})


export default crossPlatformStyle
