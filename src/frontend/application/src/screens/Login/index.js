import React from "react";
import { Pets } from "@material-ui/icons";

import { TextField, Container, FormControl, withTheme, Button, Grid, Avatar } from "../../components";
import styles from "./styles.js";

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.login = this.login.bind(this);

  }

  login($ev) {
    $ev.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Avatar style={styles.avatar} color="primary">
          <Pets style={styles.svg}></Pets>
        </Avatar>
        <form style={styles.form} onSubmit={this.login}>
          <FormControl fullWidth>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              value={this.state.email}
              onChange={v => this.setState({ ...this.state, email: v.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={v => this.setState({ ...this.state, password: v.target.value })}
            />
          </FormControl>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={styles.buttonsGrid}
          >
            <Button
              variant="contained"
              color="secondary"
              style={styles.button}>
              Register
              </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={styles.button}>
              Login
              </Button>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default withTheme(LoginScreen);
