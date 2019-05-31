import React from "react";
import logo from "../../images/logo.svg";
import { MuiThemeProvider } from "@material-ui/core/styles";
import mainTheme from "../../themes/mainTheme";
import "./styles.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload. pepe
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
