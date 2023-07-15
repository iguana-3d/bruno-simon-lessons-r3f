import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';
// import Lesson3 from '../../components/Lesson3';
import { HomeContainer } from './styles';
import Lesson44 from '../../components/Lesson44';

const Home: React.FC = () => {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: new Vector3(-4, 3, 6),
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
        <Lesson44 />
      </Canvas>
    </HomeContainer>
  );
};

export default Home;
