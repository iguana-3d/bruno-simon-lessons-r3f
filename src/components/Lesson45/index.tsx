import React, { useRef } from 'react';
import * as THREE from 'three';
import {
  Environment,
  Stage,
  // Lightformer,
  // AccumulativeShadows,
  ContactShadows,
  // BakeShadows,
  OrbitControls,
  // RandomizedLight,
  // Sky,
  useHelper,
  // SoftShadows,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Lesson45: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const diretionalRef = useRef<THREE.DirectionalLight>(null!);
  useHelper(diretionalRef, THREE.DirectionalLightHelper, 1);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useFrame((_state, delta) => {
    // const time = _state.clock.elapsedTime;
    // !!cubeRef.current && (cubeRef.current.position.x = 2 + Math.sin(time));
    !!cubeRef.current && (cubeRef.current.rotation.y += delta * 0.2);
  });

  // const { color, opacity, blur } = useControls('contact shadows', {
  //   color: '#1D8F75',
  //   opacity: { value: 0.4, min: 0, max: 1 },
  //   blur: { value: 2.8, min: 0, max: 10 },
  // });

  // const { sunPosition } = useControls('sky', {
  //   sunPosition: { value: [1, 2, 3] },
  // });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls('enviroment map', {
      envMapIntensity: { value: 3.5, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 20, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  //https://github.com/pmndrs/drei/blob/master/src/helpers/environment-assets.ts PRESETS
  return (
    <React.Fragment>
      <Environment
        // background
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        // resolution={32}
        // files={[
        //   '/static/environmentMaps/2/px.jpg',
        //   '/static/environmentMaps/2/nx.jpg',
        //   '/static/environmentMaps/2/py.jpg',
        //   '/static/environmentMaps/2/ny.jpg',
        //   '/static/environmentMaps/2/pz.jpg',
        //   '/static/environmentMaps/2/nz.jpg',
        // ]}
        // files={'/static/environmentMaps/the_sky_is_on_fire_2k.hdr'}
      >
        {/* <color args={['#000000']} attach="background" />
        <Lightformer
          position-z={-2}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        />
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      </Environment>
      {/* <SoftShadows focus={3.75} samples={10} size={25} /> */}
      {/* <BakeShadows />  */}
      {/* To Stop shadow movement */}
      <color args={['ivory']} attach="background" />
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* 
      <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color={'#316D39'}
        opacity={0.8}
        frames={Infinity} //How Many shadows render to do
        temporal //spread the renders across multiple frames and fix the freeze
        blend={100} //To resolve problem in shadows
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={256}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}

      {/* <directionalLight
        ref={diretionalRef}
        position={sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <mesh castShadow position-y={1} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      <mesh castShadow position-y={1} position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
      {/* <Stage
        shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
        environment="city"
        intensity={0.5}
      >
        <mesh castShadow position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial
            color="orange"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
        <mesh
          castShadow
          position-y={1}
          position-x={2}
          scale={1.5}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </Stage> */}
    </React.Fragment>
  );
};

export default Lesson45;
