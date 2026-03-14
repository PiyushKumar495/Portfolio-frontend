'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, Float } from '@react-three/drei';
import * as THREE from 'three';

function DotNetLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Central cube representing .NET Core */}        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial
            color="#512BD4"
            emissive="#512BD4"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        
        {/* Orbital ring */}        <Torus ref={torusRef} args={[2.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#0078D4"
            emissive="#0078D4"
            emissiveIntensity={0.6}
            metalness={1}
            roughness={0.1}
          />
        </Torus>
        
        {/* Small orbiting spheres */}        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI) / 2) * 2.5,
              Math.sin((i * Math.PI) / 2) * 2.5,
              0,
            ]}
          >
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial
              color="#B794F6"
              emissive="#B794F6"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function DotNetScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <DotNetLogo />
      </Canvas>
    </div>
  );
}
