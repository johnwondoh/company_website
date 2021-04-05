import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {FcWorkflow} from 'react-icons/fc'
import {FcFinePrint} from 'react-icons/fc'

import Paper from '@material-ui/core/Paper';
// core components
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import ProcessCard from "./ProcessCard";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme'

import styles from "../../assets/jss/components/processStyle.js";


// import Image from "next/image";

// icons

const useStyles = makeStyles(styles);
// const useStyles = makeStyles({
//   layout: {
//     backgroundColor: "green"
//     // height: "100vh"
//   } 
// });

export default function Process(props) {
  const classes = useStyles();
  const cardDetails = [
    {
      topic: "Listen & Understand",
      key: 1,
      position: 1,
      details:
        "We want to understand what you need for your application so that we can provide the right service with maximum satisfaction for you. Different clients have different requirements on their products, the platforms they want their application to run on, the target audience among others. We treat each client with respect we make sure that we correctly understand their goal, the objective of their project, the feature set - basically, everything necessary to build a worthwhile application."
    },
    {
      topic: "Research & Design",
      key: 2,
      position: 2,
      details:
        "We are a team of experienced researchers and developers working hand-in-hand to ensure that the best and state-of-the-art techniques are used to build your application to ensure longevity, robustness and security. To effectively build the application for our clients, we focus on research to determine the best approach we should use, the longevity of those approaches for each application, and existing solutions that can be adopted or leveraged for faster and robust development. "
    },
    {
      topic: "Implement, Test, & Deploy",
      key: 3,
      position: 3,
      details:
        "We will build your application on any existing platforms that you want including the Web, iOS for iPhones, Android, desktops among others. Our team of developers are specialised in building applications across platforms. State your application type, and we will build it. If you want a prototype to determine marketability, we can prototype quickly for that. If you want a production-ready application, we can also build that. In most cases, the prototype is built and then a production-ready application is built later. "
    }
  ];
  // const { children } = props;
  const cards = cardDetails.map((d) => (
    <ProcessCard topic={d.topic} icon={d.icon} details={d.details} key={d.key} position={d.position} />
  ));
  return (
    <ThemeProvider theme={theme}>
      <section className={classes.layout} id='process'>
        <div className={classes.content}>
          <Typography variant="h3">About our process</Typography>
          <div className='headerLine'></div>
          <Typography variant="body1">
            We follow three important steps iteratively to 
            understand and develop applications that meets our clients requirements, 
            and are of the highest standard
          </Typography>
        </div>
        <div className={classes.cardContainer} >
          {cards}
        </div>
        <div className={classes.content}>
          <Typography variant='body1' component='p' gutterBottom align='left' className={classes.more}>
            Our design principle is to collaborate effectively with our clients to design 
            the perfect app that is user-friendly and effective for their users.
          </Typography>
          <Typography variant='body1' component='p' gutterBottom align='left' className={classes.more}>
            We refine and improve our designs based on feedback by putting the focus of 
            the design on our clients and their users"
          </Typography>

          {/* I'll remove this but I am going set set the expan for the card to expand all cards if the screen is large */}
        </div>
        {/* <List className={classes.content}>
          <ListItem>
            <Avatar className={classes.orange}>
              <FcWorkflow />
            </Avatar>
            <ListItemText primary="Our design principle is to collaborate effectively with our clients to design the perfect app that is user-friendly and effective for their users." />
          </ListItem>
          <ListItem>
            <Avatar className={classes.purple}>
              <FcFinePrint />
            </Avatar>
            <ListItemText primary="We refine and improve our designs based on feedback by putting the focus of the design on our clients and their users" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List> */}
      </section>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
