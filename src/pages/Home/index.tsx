import React from 'react';
import { HomeContainer } from './styles';
import { Canvas } from '@react-three/fiber';
import TorusKnot from '../../components/TorusKnot';
import { Vector3 } from 'three';
import * as THREE from 'three';

const Home: React.FC = () => {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 300,
    position: new Vector3(10, 10, 15),
  };

  return (
    <HomeContainer>
      <Canvas
        // dpr={[1, 2]} pixel ratio
        // flat is a tonemapping
        gl={{
          antialias: true,
          toneMapping: THREE.NoToneMapping,
        }}
        // linear
        camera={cameraSettings}
      >
        <TorusKnot />
      </Canvas>
    </HomeContainer>
  );
};

export default Home;
