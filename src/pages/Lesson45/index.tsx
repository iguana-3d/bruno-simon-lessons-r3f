import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Vector3, NoToneMapping } from 'three';
import { Lesson45Container } from './styles';
import Lesson45Component from '../../components/Lesson45';

const Lesson45: React.FC = () => {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: new Vector3(-4, 3, 6),
  };

  return (
    <Lesson45Container>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: NoToneMapping,
        }}
        camera={cameraSettings}
        shadows
      >
        <Lesson45Component />
      </Canvas>
    </Lesson45Container>
  );
};

export default Lesson45;
