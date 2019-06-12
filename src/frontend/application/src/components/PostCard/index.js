import React, { PureComponent } from "react";
import { Grid, Typography, withStyles, Paper } from "@material-ui/core";

import { mockBigDescription, mockDescription, mockImageURL } from "./mocks";
import styles from "./styles";

class PostCard extends PureComponent {
  descriptionitem = (key, description) => {
    return (
      <Typography variant="caption" component="p" key={key}>
        <strong> {key} </strong>
        <Typography variant="inherit" color="textSecondary" component="span">
          {" "}
          {description}
        </Typography>
      </Typography>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Grid container>
          <Grid container item xs direction="column">
            <Typography variant="h5" component="h2">
              Found
            </Typography>
            <div className={classes.content}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                {mockBigDescription}
              </Typography>
              {mockDescription.map(item =>
                this.descriptionitem(item.key, item.description)
              )}
            </div>
            <Typography variant="overline" color="textSecondary">
              11:23 a.m.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={4}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <img src={mockImageURL} alt="Pet" className={classes.img} />
            <Typography variant="h5">Firulais</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(PostCard);
