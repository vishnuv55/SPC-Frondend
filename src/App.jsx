import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import Layout from './components/layout';
import { RhinoProvider } from './helpers/context';
import Button from './components/utilites/button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RhinoProvider>
          <Layout />
          <Button color="primary">Button</Button>
        </RhinoProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
