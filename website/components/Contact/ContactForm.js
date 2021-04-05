import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import {
    TextField,
    Select,
    Paper,
    Button,
    MenuItem
  } from '@material-ui/core';
import emailjs from 'emailjs-com'



import InputLabel from '@material-ui/core/InputLabel';

import styles from "../../assets/jss/components/contactStyles";


import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';



const useStyles = makeStyles(styles);


export default function Contact(props) {
  
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: '',
    enquiry: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  // const formSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(data)
  // }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target)

    const templateParams = {
        from_name: data.name + " (" + data.email + ") and (" + data.phone + ")" ,
        to_name: 'johnwondoh@gmail.com',
        message_html: data.enquiry
      };

    emailjs.send('gmail', 'template_T2w1yx1v', templateParams, 'user_NGECXC5mrzzRi4tQAUhzw')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            resetForm()
            setTimeout(() => {
                setSuccess(false);
           },5000); 
        }, (error) => {
            console.log(error.text);
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false);
           },5000); 
        });
  }

  const resetForm = (e) => {
    setData({
      name: '',
      email: '',
      phone: '',
      company: '',
      enquiryType: '',
      enquiry: ''
    })
  }
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
                      label="Name"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='text'
                      // onChange={changeName}
                      name="name"
                      value ={data.name}
                      onChange={handleChange}
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
                      label="Email address"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='email'
                      name="email"
                      value={data.email}
                      onChange={handleChange}
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
                      label="Phone number"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='tel'
                      name='phone'
                      value={data.phone}
                      onChange={handleChange}
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
                      label="Company name"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='text'
                      name='company'
                      value={data.company}
                      onChange={handleChange}
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
                        name='enquiryType'
                        value={data.enquiryType}
                        onChange={handleChange}
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
                      name='enquiry'
                      value={data.enquiry}
                      onChange={handleChange}
                      // defaultValue="Default Value"
                      />
                  </Grid>             
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={resetForm}
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
                      onClick={sendEmail}
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
