import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';

// icons
import LanguageIcon from '@material-ui/icons/Language';

import Image from "next/image";
import styles from "../../assets/jss/components/dataScienceStyles";

// import Platform from './Platform';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(styles);


export default function DataScienceProcess(props) {
  const classes = useStyles();
  const images = {
      1: require('../../public/preprocessing.jpeg'),
      2: require('../../public/visualisation.jpg'),
      3: require('../../public/learning3.jpg'),
      4: require('../../public/decision2.jpg')
  }
//   const images = {
//       1: '../../public/preprocessing.jpeg',
//       2: '../../public/visualisation.jpg',
//       3: '../../public/learning2.png',
//       4: '../../public/decision.png'
//   }
  // const { children } = props;

//src={p.src} key={p.src} 
// console.log(images[props.src])
  return (     
    <ThemeProvider theme={theme}>
            
         
        <Grid item item md={6} xs={12} 
            // lg={3} 
            className={classes.gridItems}>
            <Card className={classes.root2} elevation={5}>
                <div className={classes.cardHeader}>
                    <Typography gutterBottom variant="h5">
                        {props.title}
                    </Typography>
                    <Typography 
                        gutterBottom 
                        variant="subtitle1" 
                        // color="textSecondary"
                        className={classes.mutedColor}
                    >
                        Data cleaning and preparation
                    </Typography>
                </div>
                <CardMedia
                    className={classes.media2}
                    image={images[props.src]}
                    title={props.title}
                />
                <CardContent>
                    <Typography variant="body2" 
                        align="left" 
                        component="p" 
                        // color='textSecondary'
                        className={classes.mutedColor}
                    >
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </ThemeProvider>
  );
}

   {/* <Card className={classes.root}>
                <CardContent className={classes.content2}>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.cover}
                    image={images[props.src]}
                    title="Live from space album cover"
                />
            </Card> */}


