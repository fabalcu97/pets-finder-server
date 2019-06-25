import { theme } from "../../themes/mainTheme";
// @import '../../constants.scss';

export default {
  container: {
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    height: "150px",
    width: "150px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  svg: {
    fontSize: "125px",
  },
  buttonsGrid: {
    marginTop: "8vh",
  },
  button: {
    margin: '1vh',
  }
}