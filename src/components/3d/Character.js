import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PropTypes from 'prop-types';

export default function Character({ position }) {
  const model = useLoader(GLTFLoader, 'models/character.glb');

  return (
    <group
      position={position}
      dispose={null}
    >
      <primitive
        object={model.scene}
      />
    </group>
  );
}

Character.propTypes = {
  position: PropTypes.instanceOf(Array),
};

Character.defaultProps = {
  position: [ 0, -1.2, 0 ],
};
