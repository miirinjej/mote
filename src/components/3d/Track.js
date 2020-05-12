import * as THREE from 'three';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const geometry = new THREE.BoxGeometry(5, 1, 26);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

export default function Track({ position }) {
  const mesh = useRef();

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
