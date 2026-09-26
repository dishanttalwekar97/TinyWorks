import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';

function TechCoreNode() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35;
      meshRef.current.rotation.y += delta * 0.45;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.25;
      ringRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Central 3D Geometric Crystal */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.6, 2]} />
          <meshStandardMaterial
            color="#0284c7"
            wireframe={true}
            emissive="#0369a1"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Inner Glowing Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial
          color="#4f46e5"
          emissive="#6366f1"
          emissiveIntensity={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Outer Orbiting Data Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#d97706"
          emissive="#ea580c"
          emissiveIntensity={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function FloatingNodes() {
  const groupRef = useRef();
  const count = 16;
  const positions = useRef(
    Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
    ])
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.current.map((pos, i) => (
        <Float key={i} speed={1.5} floatIntensity={1} rotationIntensity={0.5}>
          <mesh position={pos}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#0284c7' : '#ea580c'}
              emissive={i % 2 === 0 ? '#0284c7' : '#ea580c'}
              emissiveIntensity={1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[500px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0284c7" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#ea580c" />
        
        <TechCoreNode />
        <FloatingNodes />
        <Stars radius={50} depth={50} count={300} factor={3} saturation={1} fade speed={1} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
