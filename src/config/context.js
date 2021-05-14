import createRhinoState from 'react-rhino';

const { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState } = createRhinoState({
  user: { is_user_logged_in: false },
  toastMessage: {
    severity: 'success',
    message: '',
  },
});

export { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState };
