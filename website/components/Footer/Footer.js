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



const useStyles = makeStyles(styles);


export default function Footer(props) {
  
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        
      <div className={classes.layout}>
          <div className={classes.content}>
          <Typography variant="h3" align="center">
            Get in touch
          </Typography>
          <Typography variant="h2" align="center">
            Leave us a message and we'll be in touch shortly (our contact details as an alternative)
          </Typography>
          <div className='headerLine'></div>
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
          {/* <EmailIcon /> */}

          Our socials
          <Box className={classes.socials}>
            <LinkedInIcon fontSize='large' />
            <TwitterIcon />
            <GitHubIcon />
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
