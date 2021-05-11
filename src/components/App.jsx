import React from 'react';

import '../config/index.scss';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from '../config/theme';
import Layout from './layout';
import { RhinoProvider } from '../config/context';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RhinoProvider>
          <Layout>
            <Routes />
          </Layout>
        </RhinoProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
