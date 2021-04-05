
const dataScienceStyles = theme => ({
    layout: {
        backgroundColor: "rgba(22,30,46,255)",
        // backgroundColor: "rgb(10, 2, 1)",
    //   backgroundColor: "rgb(245, 243, 242)",
    //   background:'linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%, url(tech-rings.svg) )',

        // backgroundImage: 'linear-gradient(rgba(245, 243, 242, 0.95), rgba(245, 243, 242, 0.95) ), url(tech-rings.svg)',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'left top',
        // backgroundSize: '70% 70%',
      // height: "100vh"
      paddingBottom: '2em'
    },
    content: {
        width: '55%',
        margin: '0 auto',
        paddingTop: '3rem',
        textAlign: 'center',
        color: 'white',
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
        // backgroundColor: 'red',
        paddingBottom: '2.5em'
    },
    contactHolder: {
        // display: 'flex',
        // justifyContent: 'space-evenly',
        // flexWrap: 'wrap', 
        margin: 'auto',
        // backgroundColor: 'red',
        paddingBottom: '0.5em',
        marginTop: '0.8em',
        marginBottom: '0.8em'
    },
    contact: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column',
        color: 'white'
        /* Column | row */
    },
    contactdetail: {
        paddingLeft: '0.8em'
    },
    socials: {
        width: '220px',
        margin: 'auto',
        border: '1px solid white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50px',
        fontSize: '3em',
        marginBottom: '0.2em'
        // marginBottom: '2em'
    },
    socialItem: {
        fontSize: '0.8em',
        marginLeft: '0.3em',
        marginRight: '0.3em'
    },
    serviceContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        margin: 'auto',
        // backgroundColor: 'red',
        paddingBottom: '0.5em',
        marginTop: '1em'
    },
    service: {
        margin: '0.8em',
        marginLeft: '2em',
        marginRight: '2em',
    },
    serviceName: {
        borderBottom: '1px solid rgb(214, 214, 214)',
        paddingBottom: '0.2em',
        marginBottom: '0.5em',
        fontSize: '1.1em'
    },
    serviceList: {
        color: 'rgb(217, 218, 222)',
        fontSize: '1em'
    },
    about: {
        // backgroundColor: 'red',
        fontSize: '1em'
    },
    abn: {
        // backgroundColor: 'red',
        fontSize: '0.8em'
    }



})


export default dataScienceStyles
