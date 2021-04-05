import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import theme from "../theme";

import Welcome from "../components/Landing/Welcome";
import Process from "../components/Process/Process";
import CrossPlatform from '../components/Crossplatform/CrossPlatform';
import DataScience from '../components/DataScience/DataScience';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles({
  welcome: {
    fontStyle: "oblique"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div >
      {/* <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      /> */}
      {/* <div
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      ></div> */}
      <Welcome />
      <Process />
      <CrossPlatform />
      <DataScience />
      <Contact />
      <Footer />

      {/* <ThemeProvider theme={theme}>
        <Typography className={classes.welcome} color="primary" variant="h1">
          Welcome
        </Typography>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
        <ul>
          <li>Nav bar</li>
          <li>Welcome</li>
          <li>Other info</li>
        </ul>
        <Button color="primary" variant="outlined">
          First Button
        </Button>
      </ThemeProvider> */}
    </div>
  )
}
