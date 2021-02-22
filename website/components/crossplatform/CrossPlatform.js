import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

// icons
import LanguageIcon from '@material-ui/icons/Language';

import Image from "next/image";
import styles from "../../assets/jss/components/crossPlatformStyles";

import Platform from './Platform';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(styles);
// const useStyles = makeStyles(styles);
// const useStyles = makeStyles({
//   layout: {
//     backgroundColor: "#cfe8fc",
//     height: "100vh"
//   }
// });

export default function CrossPlatform(props) {
  const classes = useStyles();
  const platformDetails = [
    {
      name: 'Websites & Web Apps',
      icon: 1
    },
    {
      name: 'Apple / iOS',
      icon: 2
    },
    {
      name: 'Android',
      icon: 3
    },
    {
      name: 'Microsoft Windows',
      icon: 4
    }
  ]
  const platform = platformDetails.map(p => <Platform name={p.name} icon={p.icon} key={p.icon} />)
  
  // const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <section className={classes.layout} id='crossPlatform'>
        <div className={classes.content}>
          <Typography variant="h3" align="center">
            Applications for all Platforms
          </Typography>
          
          <div className='headerLine'></div>
        
          <Typography variant="body1" align="center" gutterBottom>
            Our team of developments are specialised in developing cross-platform applications. 
            Name which platforms you want your application to support and we will support it. 
          </Typography>

          <Paper 
            elevation={0} 
            className={classes.moreHolder}>
            <Typography variant="body2" component='p' align="left" gutterBottom className={classes.more}>
              Dream your product, we'll help you to build it
            </Typography>
            <Typography variant="body2" component='p' align="left" gutterBottom className={classes.more}>
              Do you want to better product, we'll help evolve and improve your product
            </Typography>
            <Typography variant="body2" component='p' align="left" gutterBottom className={classes.more}>
              Do you want learn how to build and improve your product yourself, we'll teach you how to, 
              regardless of your skill level
            </Typography>
          </Paper>
          {/* <Typography variant="body1" align="center" gutterBottom>
            Our team of developments are specialised in developing cross-platform applications. 
            Name which platforms you want your application to support and we will support it. 
          </Typography> */}
          {/* <Typography variant="body1" align="center"> */}


          {/* <Card className={classes.root}>
            <CardContent>
              <LanguageIcon />
              <Divider />
              <Typography className={classes.title}>
                Websites &amp; Web Apps
              </Typography>
            </CardContent>
          </Card> */}
          {/* <Typography variant='h4' color="textSecondary" className={classes.subheader}>
            Responsive designs for all screen types
          </Typography> */}
          <Paper 
            className={classes.screenHolder} 
            elevation={0} >
            <Typography 
              variant='h4'
              // color="textSecondary" 
              className={classes.subheader}>
              Responsive designs for all screens & platforms
            </Typography>
            <div className={classes.platformContianer}>
              {platform}
            </div>
          </Paper>

          {/* <Typography variant="body2" align="center">
            Responsive designs for all screen types
          </Typography>
          <Image
            src="/Asset12.png"
            alt="Picture of the author"
            width={800}
            height={500}
          />           */}
        </div> 
      </section>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
