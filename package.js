Package.describe({
  summary: 'JavaScript 3D library with controls & loaders'
});

Package.on_use(function (api) {
  // If you change the array below, yopu must also change build.zsh.
  api.add_files([
    // Polyfiller (must be loaded first)
    'build/typedarray.js',

    // THREE.js Core
    'build/three.min.js',

    // THREE.js Controls
    'build/DeviceOrientationControls.js',
    'build/EditorControls.js',
    'build/FirstPersonControls.js',
    'build/FlyControls.js',
    'build/OculusControls.js',
    'build/OrbitControls.js',
    'build/PathControls.js',
    'build/PointerLockControls.js',
    'build/TrackballControls.js',
    'build/TransformControls.js',

    // THREE.js Loaders
    'build/MTLLoader.js',
    'build/OBJLoader.js',
    'build/OBJLoader2.js',
    'build/OBJMTLLoader.js',
  ],[
    'client'
  ]);

  api.export(['THREE'], ['client']);
});

