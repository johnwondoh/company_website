import { red } from "@material-ui/core/colors";
import { Autorenew } from "@material-ui/icons";
import { CgEnter } from "react-icons/cg";


const welcomeStyle = {
    layout: {
        // backgroundImage: "url(tech-rings.svg);",
        // backgroundImage: "url(BusinessTechnology.svg);",
        // backgroundImage: "url(gearpeople.svg);",
        // backgroundImage: "url(cyber-3400789_1920.jpg);",
        backgroundImage: `rgb(10,83,108)`,
        backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.8), rgba(10,83,108,0.8)), url(cyber-3400789_1920.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundPosition: '50% 80%',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // position: 'relative',

        // backgroundColor: "#595858",
        color: "white",
        // height: "80vh",
        paddingTop: '80px',
        // marginTop: '80px',
        height: "100vh",
        width: "100vw",
        //
        position: 'relative'
    },

    nameContainer: {
        paddingTop: '40px',
        paddingLeft: '15%',
        // backgroundColor: 'white'
    },

    compLogo: {
        width: '20%',
        // margin: '10px',
        // marginTop: '50px',
        // maringLeft: '50px',
        // backgroundColor: 'red',
        // border: '2px solid white'
        // borderLeft: '4mm ridge rgb(11, 46, 69, .6)',
        // borderLeft: '4mm ridge rgb(255, 255, 255, .6)'
        // backgroundColor: 'white'
    },

    content: {
        width: "50%",
        // position: "absolute",
        textAlign: 'center',
        // top: "15%",
        // left: "10%",
        margin: "20px auto",
        //
        position: 'absolute',
        left: '50%',
        top: '50%',
        // transform: 'translateY(-50%)'
        transform: 'translate(-50%, -50%)'

    },
    // introDiv: {
    //     width: '100%',
    //     margin: '0 auto',
    //     verticalAlign: 'middle'
    // },
    introMessage: {
        // paddingBottom: "1em",
        fontSize: '5em',
        // fontFamily: 'Open Sans, sans-serif',
        // fontFamily: 'Playfair Display, serif',
        // fontFamily: 'Roboto',
        fontFamily: 'IBM Plex Sans',
        fontWeight: 500,
        paddingTop: '1.2rem'
        // margin: 'auto'
        // transform: 'scale(.8, 1)'
    },
    introMessageSub: {
        // paddingBottom: "1em",
        fontSize: '2rem',
        fontStyle: 'italic',
        color: 'rgb(214, 214, 214)'
    },
    us: {
        fontSize: '1.8em'
        // margin: "25px auto",
        // marginBottom: '100px'
    }, 
    button: {
        marginTop: '8%',
        textAlign: 'center',
        height: '3.5rem',
        width: '50%',
        borderRadius: '25px',
        // border: '2px solid white'
    }
};

export default welcomeStyle;