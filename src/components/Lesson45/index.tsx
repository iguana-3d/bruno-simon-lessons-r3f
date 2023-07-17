import React, { useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, useHelper } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';

const Lesson45: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const diretionalRef = useRef<THREE.DirectionalLight>(null!);
  useHelper(diretionalRef, THREE.DirectionalLightHelper, 1);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useFrame((_state, delta) => {
    !!cubeRef.current && (cubeRef.current.rotation.y += delta * 0.2);
  });

  return (
    <React.Fragment>
      <color args={['ivory']} attach="background" />

      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight
        ref={diretionalRef}
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
      />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </React.Fragment>
  );
};

export default Lesson45;
