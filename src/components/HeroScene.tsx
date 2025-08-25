"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { MathUtils } from 'three';
import FloatingParticles from './FloatingParticles'; // Import the new component

const RotatingShape = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.2;

    const targetX = state.pointer.x * Math.PI * 0.2;
    const targetY = state.pointer.y * Math.PI * 0.2;

    meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
    meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.5, 0]} /> 
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      
      <RotatingShape />
      <FloatingParticles /> {/* Add the particles here */}
    </Canvas>
  );
};

export default HeroScene;
