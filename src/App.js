import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.scss';
import Character from './components/3d/Character';
import Track from './components/3d/Track';

function App() {
  const fogColor = new THREE.Color(0xffe7bd);
  const fogDensity = 0.068;

  return (
    <div className="scene">
      <Canvas
        camera={{
          fov: 55,
          near: 0.01,
          far: 1000,
          position: [ 0, 0.5, -3 ],
        }}
        onCreated={({ gl, scene }) => {
          gl.sortObjects = false;
          scene.background = fogColor;
          scene.fog = new THREE.FogExp2(fogColor, fogDensity);
        }}
      >
        <hemisphereLight />
        <pointLight position={[ 10, 10, 10 ]} />
        <Suspense fallback={null}>
          <Track />
        </Suspense>
        <Suspense fallback={null}>
          <Character />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
