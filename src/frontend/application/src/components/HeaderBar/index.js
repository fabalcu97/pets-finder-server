import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {
  MenuSharp,
  FilterList,
  AccountCircle,
  Search
} from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { MenuItem, Menu } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles( theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const HeaderBar = props => {
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();
  const { pathname } = props.location;

  if (pathname !== "/search") {
    return null;
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuSharp />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Front page
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="Search">
            <Search />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Filter"
            onClick={handleClick}
          >
            <FilterList />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>All post</MenuItem>
            <MenuItem onClick={handleClose}>Lost posts</MenuItem>
            <MenuItem onClick={handleClose}>Found posts</MenuItem>
          </Menu>
          <IconButton edge="end" color="inherit" aria-label="Account">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default withRouter(HeaderBar);
