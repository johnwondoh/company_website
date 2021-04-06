import React from "react";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/welcomeStyle.js";

import Image from "next/image";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import Navbar from './Navbar'

// icons
import { AiFillApple } from "react-icons/ai";
import { CgAppleWatch } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";

const useStyles = makeStyles(styles);

import { Link, animateScroll as scroll } from "react-scroll";

export default function Welcome() {
  const classes = useStyles();
  // const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <section 
        id='welcome'
        className={classes.layout}>
          <Navbar />
          <div className={classes.nameContainer}>
            <div className={classes.compLogo}>
              <img src='kcLogo.png' alt='Kwik Coder'/>
              {/* <Typography variant="h2" align="center">
                We Build Applications
              </Typography> */}
            </div>
          </div>
          <div className={classes.content}>
            <div className='titleAnimation'>
              <div className={classes.introDiv}>
                <Typography variant="h6" align="center" className={classes.introMessage}> 
                  Solutions {' '}
                  <span className={classes.introMessageSub}> 
                    that 
                  </span>
                   {' '} Matter 
                </Typography>
              </div>
            </div>
            {/* <div className='titleAnimation'>
                <Typography variant="h6" align="left" className={classes.introMessage}> 
                  Solutions
                </Typography>
                <Typography variant="h6" align="left" className={classes.introMessageSub}> 
                  that 
                </Typography>
                <Typography variant="h6" align="left" className={classes.introMessage}> 
                  Matter 
                </Typography>
            </div> */}
              {/* <Typography variant="h3" align="center">
                Welcome to
                </Typography> */}
                
                <div className='usAnimation '>
                  <Typography variant="body1" align="center" className={classes.us}>
                  We’ll build your product with care
                  </Typography>
                </div>

                <div className='buttonAnimation'>
                  <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      // containerId="process" 
                    >
                      {/* Get in touch */}
                      <Button variant="contained" 
                        // color="primary" 
                        startIcon={<BsPeopleFill />}
                        className={classes.button}
                        // href='#contact'
                        >
                        Get in touch
                      </Button> 
                  </Link>
                </div>
          </div>
      </section>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
