
import theme from '../../../theme';

const processStyle = theme => ({
    layout: {
      backgroundColor: "rgb(245, 243, 242)",
    //   background:'linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%, url(tech-rings.svg) )',
      
        // backgroundImage: 'linear-gradient(rgba(245, 243, 242, 0.95), rgba(245, 243, 242, 0.95) ), url(tech-rings.svg)',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 1) ), url(tech-rings.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
        // backgroundSize: '70% 70%',
        paddingBottom: '3em'
      // height: "100vh"
    },
    content: {
        width: '50%',
        margin: '0 auto',
        // marginTop: '-5%',
        paddingTop: '3rem',
        textAlign: 'center',
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
        // backgroundColor: 'white',
        // zIndex: '1'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        margin: 'auto',
        // backgroundColor: 'red',
        paddingBottom: '0.5em',
        marginTop: '2em'
    },
    more: {
      // leftBorder: '1px solidd red'
      margin: '1em',
      // paddingLeft: '1em',
      // borderLeft: '4mm ridge rgb(11, 46, 69, .6)',
      borderLeft: '4mm ridge rgb(10, 83, 108, .6)',

      padding: '1em',
      // fontSize: '1em',
      // backgroundColor: 'rgba(96,110,122,0.8)',
      // color: 'white'
    },

    // headerLine: {
    //   backgroundColor:'blue',
    //   margin: '0 auto',
    //   marginBottom: '25px',
    //   marginTop: '15px',
    //   height: '5px',
    //   width: '5rem',
    //   borderRadius: '25%'
    // },

    orange: {
      // color: 'white',
      backgroundColor: 'white',
      // border: '1px solid green'
    },
    purple: {
      // color: 'black',
      backgroundColor: 'white',
    },

    card: {
      // maxWidth: '400px',
      // minWidth: '400px',
      minWidth: '345px',
      maxWidth: '345px',
      margin: '1.5em',
      [theme.breakpoints.down('xs')]: {
        minWidth: '300px',
        maxWidth: '300px',
      },
    },
    media: {
      width: "auto",
      maxHeight: "200px",
    },
    cardImg: {
      display: 'flex',
      justifyContent: 'center'
  
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
})


export default processStyle
