// const patternPath = process.env.PUBLIC_URL + '/public/intersection/intersection.png'
const patternPath = require('../../../public/intersection/intersection.png')
// const patternPath = '../../public/intersection/intersection.png'
// console.log(patternPath)
const dataScienceStyles = theme => ({
    layout: {
        // backgroundColor: "#595858",
        // backgroundColor: "rgb(37, 150, 190)",
        // backgroundColor: "rgb(4,124,172)",
        // backgroundColor: "rgb(64,75,90)",
        // backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.6), rgba(10,83,108,0.6)), url(${patternPath})`,
        // backgroundColor: `rgba(10,83,108,0.6)`,
        backgroundColor: `rgba(5,43,61,1)`,
        // backgroundImage: `linear-gradient(0deg, rgba(64,75,90,0.7), rgba(64,75,90,0.7)), url(${patternPath})`,
        backgroundSize: '100em',
        paddingBottom: '4em'
        
    },
    content: {
        width: '50%',
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
    dsCards: {
        width: '50%',
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
            width: '85%'
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

    // root: {
    //     // position: 'relative'
    //     marginTop: '1em',
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     // alignItems: 'stretch',
    //     ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
    //         flexWrap: 'nowrap',
    //         flexDirection: 'column'
    //       }
    // },
    // details: {
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    content2: {
        width: '70%',
        margin: 'auto auto',
        paddingTop: '1rem',
        textAlign: 'left'
    },
    cover: {
        width: '30%',
        // height: 200
    },
    header: {
        textAlign: 'left'
    },

    avatar: {
        width: '5em',
        height: '5em'
    },
    // twos
    root2: {
        // maxWidth: 345,
        maxWidth: 400,
        height: '100%',
        margin: 'auto auto',
        // marginBottom: '10px',
        // backgroundColor: 'rgb(232, 237, 237)'
        // backgroundColor: 'rgb(96,110,122)',
        // backgroundColor: 'rgb(94, 106, 117)',
        backgroundColor: 'rgba(10,83,108,1)',
        // backgroundColor: 'transparent',
        color: 'white',
        // border: '1px solid white'
    },
    media2: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        paddingTop: '40%', // 16:9
        opacity: 0.6
    },
    avatar2: {
        backgroundColor: 'red',
    },
    cardHeader: {
        padding: '1em',
        paddingTop: '1.5em'
    },
    gridItems: {
        // alignItems: 'stretch',
        // gridAutoRows: '1fr'
        marginBottom: '25px',
        padding: '2px',
        [theme.breakpoints.down('xs')]: {
            padding: '2px'
          },
    },
    mutedColor: {
        color: 'rgb(227, 228, 230)'
    }

})


export default dataScienceStyles
