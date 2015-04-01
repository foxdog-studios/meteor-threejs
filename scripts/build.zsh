#!/usr/bin/env zsh

setopt ERR_EXIT NO_UNSET PIPE_FAIL


readonly ROOT=$0:A:h:h


function main()
{
    local build=$ROOT/build
    rm --force --recursive --verbose $build
    mkdir --verbose $build
    cp --verbose $srcs $build
    sed -i '2 s/var //' $build/three.min.js
}


# If you change the array below, you must also change package.js.
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
    'lib/three.js/examples/js/controls/MouseControls.js'
    'lib/three.js/examples/js/controls/OrbitControls.js'
    'lib/three.js/examples/js/controls/OrthographicTrackballControls.js'
    'lib/three.js/examples/js/controls/PointerLockControls.js'
    'lib/three.js/examples/js/controls/TrackballControls.js'
    'lib/three.js/examples/js/controls/TransformControls.js'
    'lib/three.js/examples/js/controls/VRControls.js'

    # THREE.js Loaders
    'lib/three.js/examples/js/loaders/AssimpJSONLoader.js'
    'lib/three.js/examples/js/loaders/AWDLoader.js'
    'lib/three.js/examples/js/loaders/BabylonLoader.js'
    'lib/three.js/examples/js/loaders/BinaryLoader.js'
    'lib/three.js/examples/js/loaders/ColladaLoader.js'
    'lib/three.js/examples/js/loaders/DDSLoader.js'
    'lib/three.js/examples/js/loaders/MTLLoader.js'
    'lib/three.js/examples/js/loaders/OBJLoader.js'
    'lib/three.js/examples/js/loaders/OBJMTLLoader.js'
    'lib/three.js/examples/js/loaders/PDBLoader.js'
    'lib/three.js/examples/js/loaders/PLYLoader.js'
    'lib/three.js/examples/js/loaders/PVRLoader.js'
    'lib/three.js/examples/js/loaders/RGBELoader.js'
    'lib/three.js/examples/js/loaders/STLLoader.js'
    'lib/three.js/examples/js/loaders/SVGLoader.js'
    'lib/three.js/examples/js/loaders/TGALoader.js'
    'lib/three.js/examples/js/loaders/UTF8Loader.js'
    'lib/three.js/examples/js/loaders/VRMLLoader.js'
    'lib/three.js/examples/js/loaders/VTKLoader.js'
)

main $@

