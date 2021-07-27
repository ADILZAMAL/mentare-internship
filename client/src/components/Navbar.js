import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonFontSize: {
    fontSize: "0.9rem",
  },

  AppBar: {
    height: 90,
    backgroundColor: "#fff",
    backgroundSize: "cover",
    color: "#023e8a",
  },
  portal: {
    color: "#000",
    fontWeight: 600,
    fontSize: "1rem",
  },
  mainLogo: {
    justifyContent: "left",
    color: "#023e8a",
    fontWeight: 600,
    fontSize: "1.3rem",
    "&:hover": {
      background: "transparent",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar >
            <Grid className={classes.grow}>
              <Link to="/">
                <Button className={[classes.mainLogo]}>SALT</Button>
              </Link>
            </Grid>
            <Button color="inherit" className={classes.buttonFontSize}>
              HOME
            </Button>
            <Button color="inherit" className={classes.buttonFontSize}>
              PRODUCT
            </Button>
            <Button color="inherit" className={classes.buttonFontSize}>
              FEATURES
            </Button>
            <Button color="inherit" className={classes.buttonFontSize}>
              SOA
            </Button>
            <Button color="inherit" className={classes.buttonFontSize}>
              NEWS
            </Button>

            <Link to="/home">
              <Button color="inherit" className={classes.portal}>
                PORTAL
              </Button>
            </Link>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
