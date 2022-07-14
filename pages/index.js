import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Depth, LayerMaterial, Noise } from 'lamina';
import Noodles from '../components/Noodles';
import getSeo from '../services/getSeo';

export default function Index() {
 const [height, setHeight] = useState(200);
 useEffect(() => {
  setHeight(window.innerHeight);
 }, []);

 return (
 <div>
  {getSeo("THIS IS WEBPAGE TITLE","THIS IS WEBPAGE DESCRIPTION")}
  <Canvas dpr={[1, 2]} style={{ height: `${height}px` }} camera={{ position: [0, 0, 10], fov: 22 }}>
   <Bg />
   <Suspense fallback={null}>
    <Noodles />
    <Caption>{`FINEBOT.SITE\nСКОРО...\nКОГДА-НИБУДЬ...`}</Caption>
    <Rig />
   </Suspense>
  </Canvas>
 </div>
 );
}

function Caption({ children }) {
 const { width } = useThree((state) => state.viewport);
 return (
  <Text
   position={[0, 0, -5]}
   lineHeight={0.8}
   font='/Ki-Medium.ttf'
   fontSize={width / 8}
   material-toneMapped={false}
   anchorX='center'
   anchorY='middle'>
   {children}
  </Text>
 );
}

function Rig({ v = new THREE.Vector3() }) {
 return useFrame((state) => {
  state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05);
 });
}

function Bg() {
 return (
  <mesh scale={100}>
   <boxGeometry args={[1, 1, 1]} />
   <LayerMaterial side={THREE.BackSide}>
    <Depth colorB='red' colorA='skyblue' alpha={1} mode='normal' near={130} far={200} origin={[100, 100, -100]} />
    <Noise mapping='local' type='white' scale={1000} colorA='white' colorB='black' mode='subtract' alpha={0.2} />
   </LayerMaterial>
  </mesh>
 );
}


export function getStaticProps() {
 return {
  props: {},
 };
}