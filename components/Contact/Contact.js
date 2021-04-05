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
    Box
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

import Image from "next/image";
import styles from "../../assets/jss/components/contactStyles";

import ContactForm from './ContactForm';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';


import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
const useStyles = makeStyles(styles);


export default function Contact(props) {
  
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        
      <section className={classes.layout} id='contact'>
          <div className={classes.content}>
            <Typography variant="h3" align="center" className={classes.title}>
              Let's have a chat
            </Typography>
            <Typography variant="body1" align="center" className={classes.mySub}>
              Leave us a message and we'll be in touch shortly. 
            </Typography>
            <Typography variant="body1" align="center" className={classes.mySub}>
              We'll love to have a chat with you &#128522;
            </Typography>
            

            <ContactForm />
            {/* <Typography variant='body1' gutterBottom>
            Or call or email us directly
            </Typography >
            <Box>
              <Fab color="primary" aria-label="add" m={1}>
                <CallIcon />
              </Fab>
            </Box>
            <Fab color="primary" aria-label="add">
              <EmailIcon />
            </Fab> */}
            <Typography variant="body2" align="center" color='textSecondary' className={classes.mySub}>
              To call or email us directly, the footer for our contact details
            </Typography>
          </div>
      </section>
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
