
const dataScienceStyles = theme => ({
    layout: {
        backgroundColor: "rgba(235, 236, 239, 1)",
      paddingBottom: '2em'
    },
    content: {
        width: '55%',
        margin: '0 auto',
        paddingTop: '3rem',
        textAlign: 'center',
        color: 'black',
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
    formControl: {
        // margin: theme.spacing(1),
        width: '100%',
        backgroundColor: 'rgba(152, 229, 250,0.5)',
        border: 'none'
    },
    title: {
        // color: 'rgba(22,30,46,255)'
        color: 'rgba(17, 158, 214)',
        fontSize: '3em',
        paddingBottom: '0.4em'
    },
    form: {
        marginTop: '1.5em',
        marginBottom: '1.5em',
    },
    paper: {
        padding: '16px',
        paddingTop: '50px'
    },
    fieldStyle: {
        // height: '10px',
        fontSize: '1.1em',
        // backgroundColor: 'rgb(237, 245, 252)'
        backgroundColor: 'rgba(152, 229, 250,0.5)',
        // borderRadius: 0
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: '0.8em'
          },
    },
    labelStyle: {
        // color: 'rgb(184, 124, 4)'
        color: 'rgb(154, 155, 156)'
    }



})


export default dataScienceStyles
