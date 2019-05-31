import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";
import mainTheme from "../../themes/mainTheme";
import NavigationFooter from "../NavigationFooter";

function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline>
        <Router>
          <NavigationFooter />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
