"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = () => {
  const meshRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        {/* The fix is here: pass 'particles' and '3' inside the 'args' array */}
        <bufferAttribute 
          attach="attributes-position"
          args={[particles, 3]} 
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#00ffff" />
    </points>
  );
};

export default FloatingParticles;
