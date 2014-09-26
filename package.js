Package.describe({
  summary: "[DON'T USE] JavaScript 3D library with controls & loaders",

  // As three.js releases may contain breaking changes, each release
  // is a major version in semver terms. To derive the Meteor package
  // version from the three.js release tag:
  //
  //   rX -> X.0.0_Y
  //
  // where Y is the packaging version.
  //
  version: "67.0.0_2",

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

