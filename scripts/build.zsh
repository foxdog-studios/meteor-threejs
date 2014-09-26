#!/usr/bin/env zsh

setopt ERR_EXIT
setopt NO_UNSET

# If you change the array below, yopu must also change package.js.
srcs=(
    # Polyfiller
    'lib/polyfill/typedarray.js'

    # THREE.js
    'lib/three.js/build/three.min.js'

    # THREE.js Controls
    'lib/three.js/examples/js/controls/DeviceOrientationControls.js'
    'lib/three.js/examples/js/controls/EditorControls.js'
    'lib/three.js/examples/js/controls/FirstPersonControls.js'
    'lib/three.js/examples/js/controls/FlyControls.js'
    'lib/three.js/examples/js/controls/OculusControls.js'
    'lib/three.js/examples/js/controls/OrbitControls.js'
    'lib/three.js/examples/js/controls/PointerLockControls.js'
    'lib/three.js/examples/js/controls/TrackballControls.js'
    'lib/three.js/examples/js/controls/TransformControls.js'

    # THREE.js Loaders
    'lib/three.js/examples/js/loaders/MTLLoader.js'
    'lib/three.js/examples/js/loaders/OBJLoader.js'
    'lib/three.js/examples/js/loaders/OBJLoader2.js'
    'lib/three.js/examples/js/loaders/OBJMTLLoader.js'
)

repo=$(realpath "$(dirname "$(realpath -- $0)")/..")
build=$repo/build
rm --force --recursive --verbose $build
mkdir --verbose $build
cp --verbose $srcs $build
patch $build/three.min.js three.min.js.patch

