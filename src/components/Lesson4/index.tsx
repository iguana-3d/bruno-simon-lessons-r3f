import React, { useRef } from 'react';
import { Mesh } from 'three';
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
} from '@react-three/drei';
import styled from 'styled-components';

const DivWrapped = styled.div`
  color: white;
  user-select: none;
  overflow: hidden;
  padding: 1.6rem 3rem;
  background-color: #00000088;
  border-radius: 2rem;
  white-space: nowrap;
`;

const Lesson4: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cubeRef = useRef<Mesh | any>(null);

  return (
    <React.Fragment>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true} //relative a size
      >
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html position={[1, 1, 0]} center>
            <DivWrapped>This is a sphere 👍</DivWrapped>
          </Html>
        </mesh>
      </PivotControls>

      <TransformControls position-x={2} mode="translate">
        <mesh
          ref={cubeRef}
          // rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </TransformControls>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </React.Fragment>
  );
};

export default Lesson4;
