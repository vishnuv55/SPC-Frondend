import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { RhinoProvider } from './config/context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <RhinoProvider>
      <App />
    </RhinoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
