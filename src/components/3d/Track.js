import * as THREE from 'three';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useFrame, useLoader } from 'react-three-fiber';

const geometry = new THREE.BoxGeometry(5, 1, 26);

export default function Track({ position }) {
  const mesh = useRef();
  const texture = useLoader(THREE.TextureLoader, 'textures/Lava_001_COLOR.png');
  const material = new THREE.MeshBasicMaterial({ map: texture });

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 16);


  useFrame(() => {
    texture.offset.y -= 0.03;
  });

  return (
    <group
      position={position}
      dispose={null}
    >
      <mesh
        ref={mesh}
        geometry={geometry}
        material={material}
      />
    </group>
  );
}

Track.propTypes = {
  position: PropTypes.instanceOf(Array),
};

Track.defaultProps = {
  position: [ 0, -1.7, 12 ],
};
