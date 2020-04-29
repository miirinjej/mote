import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.scss';
import Character from './components/3d/Character';

function App() {
  return (
    <div className="scene">
      <Canvas
        camera={{
          fov: 55,
          near: 0.01,
          far: 1000,
          position: [ 0, 0.5, -3 ],
        }}
        onCreated={({ gl }) => gl.setClearColor(0xffe7bd)}
      >
        <hemisphereLight />
        <pointLight position={[ 10, 10, 10 ]} />
        <Suspense fallback={null}>
          <Character />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
