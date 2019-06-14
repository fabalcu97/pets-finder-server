import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import "./styles.scss";
import mainTheme from "../../themes/mainTheme";
import MainNavigator from "../MainNavigator";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MainNavigator />
    </ThemeProvider>
  );
}

export default App;
