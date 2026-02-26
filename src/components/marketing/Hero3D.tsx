import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sphere, useScroll, ScrollControls, Scroll, Html } from '@react-three/drei';
import * as THREE from 'three';

function ArduinoModel() {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && scroll) {
      // Rotate based on scroll
      const r1 = scroll.range(0, 1/4);
      meshRef.current.rotation.y = r1 * Math.PI * 2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        {/* Simplified Arduino-like box model */}
        <mesh 
          onPointerOver={() => setHovered(true)} 
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#00979d" />
        </mesh>
        
        {/* Microcontroller chip */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="#333" />
        </mesh>

        {/* Pins that "pulse" */}
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={i} position={[-1.8 + i * 0.4, 0.15, 1.4]}>
            <boxGeometry args={[0.1, 0.2, 0.1]} />
            <meshStandardMaterial 
              color={hovered ? "#00ff00" : "#888"} 
              emissive={hovered ? "#00ff00" : "#000"}
              emissiveIntensity={hovered ? 2 : 0}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-screen bg-slate-950">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <ScrollControls pages={3} damping={0.1}>
          <Scroll>
            <ArduinoModel />
          </Scroll>
          
          <Scroll html>
            <div className="w-screen">
              <section className="h-screen flex flex-col items-center justify-center text-white px-6 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                  DIGITAL LAB<br />INFRASTRUCTURE
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  High-fidelity engineering education for the next generation of creators.
                </p>
              </section>

              <section className="h-screen flex flex-col items-center justify-center text-white px-6 text-center">
                <h2 className="text-5xl font-bold mb-6">The Problem</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Lack of infrastructure, costly hardware, and limited access are holding back engineering students worldwide.
                </p>
              </section>

              <section className="h-screen flex flex-col items-center justify-center text-white px-6 text-center">
                <h2 className="text-5xl font-bold mb-6">The Solution</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Circuit Simulation, Embedded Code, IoT Dashboards, and Robotics modules in one unified platform.
                </p>
              </section>
            </div>
          </Scroll>
        </ScrollControls>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
