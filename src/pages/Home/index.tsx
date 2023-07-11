import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';
// import Lesson3 from '../../components/Lesson3';
import { HomeContainer } from './styles';
import Lesson4 from '../../components/Lesson4';

const Home: React.FC = () => {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 300,
    position: new Vector3(0, 5, 10),
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
        {/* <Lesson3 /> */}
        <Lesson4 />
      </Canvas>
    </HomeContainer>
  );
};

export default Home;
