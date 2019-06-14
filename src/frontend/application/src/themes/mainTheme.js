import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  typography: {
    useNextVariants: true,
  },
  // Here you can set or override all your variables and settings related to styling.
  // https://material-ui.com/customization/themes/
  palette: {
    primary: {
      main: "#574339",
    },
    secondary: {
      main: "#F1C40F",
    },
    error: {
      main: '#F73E22',
    },
    background: {
      main: "#F4ECDE",
    },
    action: {
      main: "#0285CC",
    },
  },
}

export default createMuiTheme(theme);
