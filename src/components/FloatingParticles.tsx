"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = () => {
  const meshRef = useRef<THREE.Points>(null!);

  // Generate a large number of random 3D points
  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // Distribute points within a sphere
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  // Animate the rotation of all particles together
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  count={particles.length / 3}
                  array={particles}
                  itemSize={3} 
/>      </bufferGeometry>
      <pointsMaterial size={0.015} color="#00ffff" />
    </points>
  );
};

export default FloatingParticles;
