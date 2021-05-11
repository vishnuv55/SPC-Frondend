import createRhinoState from 'react-rhino';

const { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState } = createRhinoState({
  user: false,
});

export { RhinoProvider, useRhinoState, useRhinoValue, useSetRhinoState };
