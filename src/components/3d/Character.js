import * as THREE from 'three';
import React from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PropTypes from 'prop-types';

export default function Character({ animationName, position }) {
  const model = useLoader(GLTFLoader, 'models/character.glb');
  const mixer = new THREE.AnimationMixer(model.scene);
  const clips = model.animations;

  useFrame((state, delta) => mixer.update(delta));

  const clip = THREE.AnimationClip.findByName(clips, animationName);
  const action = mixer.clipAction(clip);

  action.play();

  return (
    <group
      position={position}
      dispose={null}
    >
      <primitive object={model.scene} />
    </group>
  );
}

Character.propTypes = {
  position: PropTypes.instanceOf(Array),
  animationName: PropTypes.string,
};

Character.defaultProps = {
  position: [ 0, -1.2, 0 ],
  animationName: 'Running.001',
};
