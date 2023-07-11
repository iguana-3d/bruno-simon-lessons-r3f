import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import CustomObject from '../CustomObject';

//Necessary create a orbit D ts
extend({ OrbitControls });

const Lesson3: React.FC = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const groupRef = useRef<Group | null>(null);
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    !!cubeRef.current && (cubeRef.current.rotation.y += delta);

    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // state.camera.position.x += delta;
    // !!groupRef.current && (groupRef.current.rotation.y += delta);
  });

  return (
    <React.Fragment>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </React.Fragment>
  );
};

export default Lesson3;
