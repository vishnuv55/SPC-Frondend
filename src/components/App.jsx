/* eslint-disable no-unused-vars */
import React from 'react';

import '../config/index.scss';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Routes from './routes';
import Toast from './utils/toast';
import useDarkMode from '../hooks/useDarkMode';
import getMuiTheme from '../config/theme';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode('dark');

  return (
    <BrowserRouter>
      <ThemeProvider theme={getMuiTheme(darkMode)}>
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Routes />
        </Layout>
        <Toast />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
