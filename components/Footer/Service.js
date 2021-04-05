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




import styles from "../../assets/jss/components/footerStyles";


import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';


    
const services = ['Programming basics', 
      'Data science', 
      'Application development']



const useStyles = makeStyles(styles);


export default function Service(props) {
  
    const classes = useStyles();

    const ourServices = props.provisions.map(s => <Typography 
                                                    variant='body1' 
                                                    align='left' 
                                                    className={classes.serviceList}>{s}</Typography>)
  return (
    <ThemeProvider theme={theme}>
        <Box className={classes.service}>
            <Typography variant='h4' className={classes.serviceName}>{props.type}</Typography>
            {ourServices}
        </Box>
      
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
