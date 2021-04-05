import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

// icons
import LanguageIcon from '@material-ui/icons/Language';
import AppleIcon from '@material-ui/icons/Apple';
import { DiAndroid } from 'react-icons/di'
import { AiFillWindows } from 'react-icons/ai'
import { MdHttp } from 'react-icons/md'
import { AiFillApple } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

import Image from "next/image";
import styles from "../../assets/jss/components/platformStyles";

const useStyles = makeStyles(styles);
// const useStyles = makeStyles(styles);
// const useStyles = makeStyles({
//   layout: {
//     backgroundColor: "#cfe8fc",
//     height: "100vh"
//   }
// });

export default function Platform(props) {
  const classes = useStyles();
  const icons = {
      1: <CgWebsite />,
    //   1: <LanguageIcon />,
      2: <AiFillApple />,
    //   2: <AppleIcon />,
      3: <DiAndroid />,
      4: <AiFillWindows />
  }
  // const { children } = props;
  return (     
        <Card className={classes.root}>
          <CardContent >
            {/* <LanguageIcon /> */}
            <div className={classes.icon}>
                {icons[props.icon]}
            </div>
            <Divider />
            <Typography className={classes.title}>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
  );
}

// Warning.propTypes = {
//   children: PropTypes.node
// };
