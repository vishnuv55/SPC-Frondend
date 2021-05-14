import React from 'react';

import '../config/index.scss';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from '../config/theme';
import Layout from './layout';
import Routes from './routes';
import Toast from './utils/toast';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes />
        </Layout>
        <Toast />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
