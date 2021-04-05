// search muitheme in material UI
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: purple[500]
    // },
    secondary: {
      main: green[500]
    }
  }
});

theme.typography.h6 = {
  fontSize : '1.2rem'
}
theme.typography.h2 = {
  fontSize : '2rem'
}

theme.typography.h3 = {
  fontSize : '3rem',
  // fontFamily: 'Helvetica Neue',
  // fontFamily: 'IBM Plex Sans',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal'
}

theme.typography.h5 = {
  fontSize : '1.5rem',
  // fontFamily: 'Helvetica Neue',
  fontStyle: 'normal'
}

theme.typography.subtitle1 = {
  fontSize : '1rem',
  // fontFamily: 'Helvetica Neue',
  // fontStyle: 'normal'
}
theme.typography.h4 = {
  fontFamily: 'IBM Plex Sans',
  fontSize : '1.8rem',
  fontStyle: 'bold'
  // fontFamily: 'Helvetica Neue',
  // fontStyle: 'normal'
}

theme.typography.body1 ={
  fontFamily: 'IBM Plex Sans',
  fontSize: '1.3em',
  // fontStyle: 'italic',
  lineHeight: '1.5em'
}
theme.typography.body2 ={
  fontSize: '1',
  fontFamily: 'Roboto',
  // fontFamily: 'IBM Plex Sans',
  fontWeight: 400,
  // fontSize: '1.1em',
  lineHeight: '1.5em'
  // color: 'black'
  // fontStyle: 'italic'
}

export default theme;
