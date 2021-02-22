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

import DataScienceProcess from './DataScienceProcess';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

// avatar img
// import myimg2 from "/website/public/data_science.png";
// import myimg from "../../public/data_science.png";

const useStyles = makeStyles(styles);
// const useStyles = makeStyles(styles);
// const useStyles = makeStyles({
//   layout: {
//     backgroundColor: "#cfe8fc",
//     height: "100vh"
//   }
// });

export default function DataScience(props) {
  const classes = useStyles();
  // const platformDetails = [
  //   {
  //     name: 'Websites & Web Apps',
  //     icon: 1
  //   },
  //   {
  //     name: 'Apple / iOS',
  //     icon: 2
  //   },
  //   {
  //     name: 'Android',
  //     icon: 3
  //   },
  //   {
  //     name: 'Microsoft Windows',
  //     icon: 4
  //   }
  // ]
  const dsProcess = [
    { 
      title: 'Data pre-processing',
      content: 'We will process your raw data so that preliminary and advance analysis can be done on it.',
      src: 1
    },
    {
      title: 'Visualisation & data exploration', 
      content: 'We will use your data to better inform you by presenting it to you and your users in a meaningful way. We will uncover previously unknown truths about your data by exploring and using advanced visualisation techniques.', 
      src: 2
    },
    {
      title: 'Machine learning & data mining',
      content: 'We will use machine learning models to discover previously unknown patterns in your data, predict future behaviours of your users and systems, understand causality and the impact of change in your system, among others.',
      src: 3
    },
    {
      title: 'Decision support',
      content: 'We will build models that can be used to either automatically make important decision within your system or application or inform important stakeholders during their decision-making process.',
      src: 4
    }
  ]
//   const platform = platformDetails.map(p => <Platform name={p.name} icon={p.icon} key={p.icon} />)
  
  const process = dsProcess.map(p => <DataScienceProcess title={p.title} 
                                      content={p.content} src={p.src} key={p.src} />)
  return (
    <ThemeProvider theme={theme}>
      <section className={classes.layout} id='dataScience'>
        <div className={classes.content}>
          <Typography variant="h3" align="center" gutterBottom>
            Insight into your Data
          </Typography>
          {/* <Typography variant="h2" align="center">
            We support data-driven decision making through Machine learning &amp; Data Analytics
          </Typography> */}
          <div className='headerLine'></div>
              
          <Typography variant="body1" align="center">
            We design informative dashboards for visualising and summarising your data. 
            We develop data science &amp; machine learning solutions for discovering insightful 
            knowledge in your data to address various business needs/problems.
          </Typography>
          
        </div> 
        <div className={classes.dsCards}>
          <Grid container spacing={3}>
            {process}
          </Grid>
        </div>
      </section>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
