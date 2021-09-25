import React from 'react';
import ReactDOM from 'react-dom';
import { RhinoProvider } from 'react-rhino';

import App from './components/App';
import store from './config/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <RhinoProvider store={store}>
      <App />
    </RhinoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
