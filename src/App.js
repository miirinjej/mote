import React from 'react';
import { Canvas } from 'react-three-fiber';
import './App.scss';

function App() {
  return (
    <div className="scene">
      <Canvas
        camera={{
          fov: 75,
          near: 0.01,
          far: 1000,
          position: [ 0, 0, 70 ],
        }}
      />
    </div>
  );
}

export default App;
