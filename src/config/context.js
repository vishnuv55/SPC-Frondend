import createRhinoState from 'react-rhino';

const { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState } = createRhinoState({
  user: { is_user_logged_in: false },
  pageTitle: '',
  toastMessage: {
    severity: 'success',
    message: '',
  },
  reload: false,
  darkMode: false,
  installable: {
    installable: false,
    deferredPrompt: null,
  },
});

export { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState };
