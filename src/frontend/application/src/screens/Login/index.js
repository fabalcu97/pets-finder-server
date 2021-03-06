import React from "react";
import { Pets } from "@material-ui/icons";

import styles from "./styles.js";
import { TextField, Container, FormControl, withTheme, Button, Grid, Avatar } from "../../components";
import { connection } from '../../api';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: '',
        password: '',
      },
    };

    this.login = this.login.bind(this);

  }

  login($ev) {
    $ev.preventDefault();
    console.log(this.state);
    connection.post('/user/login', this.state.form).then(token => {
      console.log(token);
    }).catch(err => {
      console.error(err);
    });
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
              onChange={v => this.setState({ ...this.state, form: { email: v.target.value } })}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={v => this.setState({ ...this.state, form: { password: v.target.value } })}
            />
          </FormControl>
          <Grid
            container
            style={styles.buttonsGrid}
          >
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              style={styles.button}> Login </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              style={styles.button}> Register </Button>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default withTheme(LoginScreen);
