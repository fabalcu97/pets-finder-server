import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withTheme } from "@material-ui/core";

import { Container } from "../../components";
import { LoginScreen } from "../../screens";
import NavigationFooter from "../NavigationFooter";
import { theme } from "../../themes/mainTheme";

class MainNavigator extends React.Component {
  render() {
    return (
      <Router>
        <Container style={{backgroundColor: theme.palette.background.main}}>
          <Route path="/" component={LoginScreen} />
          {/* <Route path="/signup" component={SignUpScreen} /> */}
          <Route path="/application" component={NavigationFooter} />
        </Container>
      </Router>
    )
  }
};

export default withTheme(MainNavigator);