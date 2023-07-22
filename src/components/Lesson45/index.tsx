import React, { useRef } from 'react';
import * as THREE from 'three';
import {
  AccumulativeShadows,
  // BakeShadows,
  OrbitControls,
  RandomizedLight,
  useHelper,
  // SoftShadows,
} from '@react-three/drei';
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
      {/* <SoftShadows focus={3.75} samples={10} size={25} /> */}
      {/* <BakeShadows />  */}
      {/* To Stop shadow movement */}
      <color args={['ivory']} attach="background" />
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <AccumulativeShadows position={[0, -0.99, 0]} scale={10}>
        <RandomizedLight position={[1, 2, 3]} />
      </AccumulativeShadows>

      <directionalLight
        ref={diretionalRef}
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
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
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </React.Fragment>
  );
};

export default Lesson45;
