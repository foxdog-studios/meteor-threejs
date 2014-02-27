Package.describe({
  summary: "JavaScript 3D library. With controls and loaders."
});

Package.on_use(function (api) {
  where = ['client'];

  //
  api.add_files('lib/typedarray.js', where);

  // core
  api.add_files('lib/three.js', where);

  // controls
  files = [
    'EditorControls',
    'FirstPersonControls',
    'FlyControls',
    'OculusControls',
    'OrbitControls',
    'PathControls',
    'PointerLockControls',
    'TrackballControls',
    'TransformControls'
  ];
  for (i = 0; i < files.length; i++) {
    fileName = files[i];
    api.add_files('lib/controls/' + fileName + '.js', where);
  }

  // loaders
  loaders = [
    'MTLLoader',
    'OBJLoader2',
    'OBJLoader',
    'OBJMTLLoader'
  ];
  for (var i = 0; i < loaders.length; i++) {
    loader = loaders[i];
    api.add_files('lib/loaders/' + loader + '.js', where);
  }

});

