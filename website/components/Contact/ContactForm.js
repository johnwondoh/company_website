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
    Link,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControlLabel,
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


import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';



const useStyles = makeStyles(styles);


export default function Contact(props) {
  
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>       
          <form 
              // onSubmit={handleSubmit} 
              noValidate className={classes.form}>
              <Paper  elevation={0} className={classes.paper}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.fieldStyle}
                      disableUnderline={true} 
                      required
                      id="filled-required"
                    //   variant="standard"
                    variant="filled"
                      fullWidth
                      name="name"
                      label="Name"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='text'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.fieldStyle}
                      required
                      id="filled-required"
                    //   variant="standard"
                    variant="filled"
                      fullWidth
                      name="email"
                      label="Email address"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='email'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // required
                      className={classes.fieldStyle}
                      id="filled-required"
                    //   variant="standard"
                    variant="filled"
                      fullWidth
                      name="phoneNumber"
                      label="Phone number"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='tel'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // required
                      className={classes.fieldStyle}
                      id="filled-required"
                    //   variant="standard"
                    variant="filled"
                      fullWidth
                      name="companyName"
                      label="Company name"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='text'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl 
                        className={classes.formControl} 
                        variant="filled">
                      <InputLabel id="demo-simple-select-label" className={classes.labelStyle}
                      >Enquiry</InputLabel>
                      <Select
                        // className={classes.fieldStyle}
                        disableUnderline
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>General</MenuItem>
                        <MenuItem value={20}>Let's discuss your idea</MenuItem>
                        <MenuItem value={30}>Improve your product</MenuItem>
                        <MenuItem value={40}>Data and business analysis</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      className={classes.fieldStyle}
                      name="enquiry"
                      size="small"
                      id="standard-multiline-static"
                      label="Optional Enquiry"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      variant="filled"
                      multiline
                      rows={5}
                      // defaultValue="Default Value"
                      />
                  </Grid>             
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      // onClick={reset}
                      // disabled={submitting || pristine}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      // disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
       
    </ThemeProvider>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
