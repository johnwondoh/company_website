import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme'

import styles from "../../assets/jss/components/processStyle.js";

const useStyles = makeStyles(styles);



export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imgs = {
    1: "ClipartKey_1288014.png",
    2: "data_science.png",
    3: "dev4.png"
  }

  return (
    // <Grid item sm={6}>
    <ThemeProvider theme={theme}>
      <Card className={classes.card} elevation={5}>
        <div className={classes.cardImg}>
          <CardMedia
            className={classes.media}
            component="img"
            image={imgs[props.position]}
            title="Paella dish"
          />
        </div>
        <CardContent>
          <Typography variant="h5">
            {" "}
            {/* <HiOutlineLightBulb />  */}
            {props.topic}
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.details}
            </Typography>
          </CardContent>
        </Collapse>

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
    // </Grid>
  );
}
