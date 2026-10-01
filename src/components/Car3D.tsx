"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

// A placeholder component that looks like a simplified car.
// Once you have a real "car.glb", you can use useGLTF("/car.glb") here.
function AbstractCar() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation for the mock
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Car Body (Lower part) */}
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.4, 4]} />
          <meshStandardMaterial color="#0066FF" roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Car Cabin (Upper part) */}
        <mesh position={[0, 0.8, -0.2]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.4, 2]} />
          <meshPhysicalMaterial 
            color="#111" 
            transparent 
            opacity={0.8} 
            roughness={0} 
            metalness={0.5} 
            clearcoat={1}
          />
        </mesh>

        {/* Placeholder Wheels */}
        {[-0.9, 0.9].map((x, i) =>
          [-1.2, 1.2].map((z, j) => (
            <mesh key={`${i}-${j}`} position={[x, 0.2, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
              <meshStandardMaterial color="#222" roughness={0.8} />
            </mesh>
          ))
        )}
      </Float>
    </group>
  );
}

// import { useGLTF } from "@react-three/drei";

// --- QUANDO VOCÊ BAIXAR O ARQUIVO .GLB DA VW ---
// 1. Coloque o arquivo na pasta "public/" com o nome "car.glb"
// 2. Descomente o componente abaixo e use ele no lugar de <AbstractCar />
/*
function RealVWCar() {
  const { scene } = useGLTF("/car.glb");
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.5} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}
*/

export function Car3DMock() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* The Car Mock */}
        <AbstractCar />
        {/* <RealVWCar /> */}

        {/* Realistic Lighting Environment */}
        <Environment preset="city" />

        {/* Ground Shadow */}
        <ContactShadows position={[0, -0.1, 0]} opacity={0.4} scale={20} blur={2} far={10} />
        
        {/* Controls */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
      </Canvas>
      
      {/* Overlay Text */}
      <div className="absolute bottom-4 right-4 text-xs font-mono bg-background/80 px-3 py-1 rounded text-muted-foreground backdrop-blur border border-border">
        Baixe um .GLB de um VW e coloque na pasta public/car.glb
      </div>
    </div>
  );
}
