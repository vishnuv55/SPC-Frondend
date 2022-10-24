/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import { useSetRhinoState } from 'react-rhino';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import '../config/index.scss';
import Layout from './layout';
import Routes from './routes';
import Toast from './utils/toast';
import getMuiTheme from '../config/theme';
import useDarkMode from '../hooks/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode('dark');

  const setInstallable = useSetRhinoState('installable');

  /* eslint-disable */
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Update UI notify the user they can install the PWA
      // Stash the event so it can be triggered later.
      setInstallable({
        installable: true,
        deferredPrompt: e,
      });
    });
    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('INSTALL: Success');
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={getMuiTheme(darkMode)}>
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Routes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Layout>
        <Toast />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
