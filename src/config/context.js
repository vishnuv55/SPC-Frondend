import createRhinoState from 'react-rhino';

const { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState } = createRhinoState({
  user: { is_user_logged_in: false },
  apiError: '',
});

export { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState };
