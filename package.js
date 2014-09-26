Package.describe({
  summary: "JavaScript 3D library with controls & loaders",

  // To make the Meteor version, take to three.js release number
  // (without the leading "r") and use that as MINOR version. Use "1"
  // as the MAJOR version and "0" as the PATCH version. Finally, append
  // the packaging version "_X".
  version: "1.67.0_1",

  git: "https://github.com/foxdog-studios/meteor-threejs"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');

  // If you change the array below, yopu must also change build.zsh.
  api.addFiles(
    [
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
    ],
    'client'
  );

  api.export('THREE', 'client');
});

