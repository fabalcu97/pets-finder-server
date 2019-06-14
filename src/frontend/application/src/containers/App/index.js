import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";
import mainTheme from "../../themes/mainTheme";
import NavigationFooter from "../NavigationFooter";
import HeaderBar from "../../components/HeaderBar";
import {
  SearchScreen,
  EngageScreen,
  MyPetsScreen,
  SettingsScreen
} from "../../screens";

function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Router>
        <HeaderBar />
        <Container fixed style={{ height: "100%" }}>
          <Route path="/search" component={SearchScreen} />
          <Route path="/engage" component={EngageScreen} />
          <Route path="/my-pets" component={MyPetsScreen} />
          <Route path="/settings" component={SettingsScreen} />
        </Container>
        <NavigationFooter />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
