import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62ff9b',
      main: '#00d86b',
      dark: '#00a53d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#639dff',
      main: '#006fe6',
      dark: '#0045b3',
      contrastText: '#fff',
    },
  },
});

export default theme;
