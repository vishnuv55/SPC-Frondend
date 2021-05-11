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
  overrides: {
    MuiButton: {
      text: {
        borderRadius: '1rem',
        padding: '.6rem 3rem',
        textTransform: 'capitalize',
        background: '#00d86b',
        color: '#fff',
        '&:hover': {
          background: '#00c95d',
        },
      },
    },
  },
});

export default theme;
