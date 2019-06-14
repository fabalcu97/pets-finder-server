import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, withStyles, IconButton } from "@material-ui/core";
import { Paw, Magnify, Heart, Settings } from "mdi-material-ui";
import "./styles.scss";

const style = {
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    justifyContent: "space-around"
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  selected: {
    width: "40px",
    height: "auto",
    "& svg": {
      width: "100%",
      height: "100%"
    }
  },
  icon: {
    width: "40px",
    height: "100%",
    color: "white"
  },
  button: {
    "&: hover": { backgroundColor: "inherit" }
  }
};

const NavigationFooter = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" aria-label="Search">
          <NavLink
            className={classes.icon}
            activeClassName="selected"
            to="/search"
          >
            <Magnify />
          </NavLink>
        </IconButton>
        <IconButton color="inherit" aria-label="Engage">
          <NavLink
            className={classes.icon}
            activeClassName="selected"
            to="/engage"
          >
            <Heart />
          </NavLink>
        </IconButton>
        <IconButton color="inherit" aria-label="My pets">
          <NavLink
            className={classes.icon}
            activeClassName="selected"
            to="/my-pets"
          >
            <Paw />
          </NavLink>
        </IconButton>
        <IconButton color="inherit" aria-label="Settings">
          <NavLink
            className={classes.icon}
            activeClassName="selected"
            to="/settings"
          >
            <Settings />
          </NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(NavigationFooter);
