import { createMuiTheme } from '@material-ui/core';

const getMuiTheme = (darkMode) => {
  const themeObject = {
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
          borderRadius: '.5rem',
          padding: '.5rem 1.5rem',
          fontSize: '.85rem',
          textTransform: 'capitalize',
          background: '#00d86b',
          color: '#fff',
          fontWeight: 600,
          '&:hover': {
            background: '#00c95d',
          },
        },
      },
    },
  };

  if (darkMode === true) {
    themeObject.palette.type = 'dark';
  }

  const theme = createMuiTheme(themeObject);

  return theme;
};

export default getMuiTheme;
