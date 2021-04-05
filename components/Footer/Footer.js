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

import { FormControl } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { Form, Field } from 'react-final-form';
// import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
    TextField,
    Select,
    Paper,
    // Link,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControlLabel,
    Box,
    Link
  } from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker,
  } from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// icons
import LanguageIcon from '@material-ui/icons/Language';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import Image from "next/image";
import styles from "../../assets/jss/components/footerStyles";


import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

import Service from './Service'

const services = [
  {
    type: 'Software & Apps',
    provisions: [
      'Application development',
      'Application evolution',
      'Testing'],
    key: 1
  },
  {
    type: 'Data Science',
    provisions: ['Data analysis',
      'Data engineering',
      'Machine learning'],
    key: 2
  },
  {
    type: 'Education & Training',
    provisions: ['Programming basics', 
      'Data science', 
      'Application development'],
    key: 3
  }
]

const useStyles = makeStyles(styles);


export default function Footer(props) {
  
    const classes = useStyles();

    const ourProvisions = services.map(s => <Service type={s.type} provisions={s.provisions}/>)
  return (
    <ThemeProvider theme={theme}>
        
      <div className={classes.layout}>
          <div className={classes.content}>
          {/* <Typography variant="h3" align="center">
            Get in touch
          </Typography> */}
          <Typography variant="body1" align="center" className={classes.about}>
          We are a group of software engineers and data scientist working together to develop 
          the perfect cross-platform solutions for our clients.  
          Our services include:
          {/* Ours services include developing and evolving 
          software applications, providing data analytic solutions, and providing software engineering 
          and data science training. */}
           
          </Typography>
          <div className={classes.serviceContainer}>
            {ourProvisions}
          </div>
          {/* <Service /> */}
          {/* <div className='headerLine'></div>
          <Typography>
              Our contact details
            </Typography> */}
          <div className={classes.contactHolder}>
            
            <Box >
              <Link component='button' href="tel:123-456-7890" className={classes.contact}>
                <PhoneIcon />
                <Box component='span' className={classes.contactdetail}>
                123-456-7890
                </Box>
              </Link>
            </Box>
            <Box >
              <Link component='button' href="tel:123-456-7890" className={classes.contact}>
                <EmailIcon />
                <Box component='span' className={classes.contactdetail}>
                  someemail@somedomain.com
                </Box>
              </Link>
            </Box>
          </div>
          {/* <EmailIcon /> */}

          {/* Our socials */}
          <div className={classes.socials}>
            <LinkedInIcon className={classes.socialItem}/>
            <TwitterIcon className={classes.socialItem}/>
            <GitHubIcon className={classes.socialItem}/>
          </div>

          <Box>
              <Typography variant='body1' className={classes.abn}>
                ABN: 123236789
              </Typography>
            </Box>
          {/* <Typography variant="body2" align="center">
            We design informative dashboards for visualising and summarising your data. 
            We develop data science &amp; machine learning solutions for discovering insightful 
            knowledge in your data to address various business needs/problems.
          </Typography> */}
        
          
          </div>
      </div>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
