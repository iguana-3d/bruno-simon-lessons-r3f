import React, { useRef } from 'react';
import { Mesh } from 'three';
import {
  Text,
  Float,
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  MeshReflectorMaterial,
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
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

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
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            center
            distanceFactor={6}
            // occlude={[sphereRef, cubeRef]}
          >
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
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          blur={[1000, 1000]}
          mixBlur={0.75}
          color="greenyellow"
        />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text
          font="/static/fonts/bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I Love R3F
          {/* <meshNormalMaterial /> */}
        </Text>
      </Float>
    </React.Fragment>
  );
};

export default Lesson4;
