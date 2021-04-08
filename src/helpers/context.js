import createRhinoState from 'react-rhino';

const { RhinoProvider, useRhinoState, useSetRhinoState } = createRhinoState({ user: false });

export { RhinoProvider, useRhinoState, useSetRhinoState };
