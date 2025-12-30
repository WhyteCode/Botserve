import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

// Helper to generate random points on a sphere
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

// Helper to generate random cloud points
function generateCloudPoints(count: number, spread: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    points[i * 3] = (Math.random() - 0.5) * spread;
    points[i * 3 + 1] = (Math.random() - 0.5) * spread;
    points[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  return points;
}

const ParticleSystem = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;
  
  // Target shape: A tight sphere (representing the "Brain" or "Core")
  const spherePositions = useMemo(() => generateSpherePoints(count, 1.5), []);
  
  // Start shape: A wide chaotic cloud
  const cloudPositions = useMemo(() => generateCloudPoints(count, 15), []);
  
  // Current positions buffer
  const positions = useMemo(() => new Float32Array(count * 3), []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Calculate Scroll Influence
    const scrollProgress = Math.min(Math.max(scrollY / window.innerHeight, 0), 1);
    const t = scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // Smoothstep

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Interpolate between cloud and sphere
      const x = THREE.MathUtils.lerp(cloudPositions[i3], spherePositions[i3], t);
      const y = THREE.MathUtils.lerp(cloudPositions[i3+1], spherePositions[i3+1], t);
      const z = THREE.MathUtils.lerp(cloudPositions[i3+2], spherePositions[i3+2], t);

      // Add some noise/movement
      const time = state.clock.elapsedTime;
      const noise = Math.sin(time * 0.5 + x) * 0.1 * (1 - t); 

      positions[i3] = x + noise;
      positions[i3 + 1] = y + noise;
      positions[i3 + 2] = z;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate the whole system slowly
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.z = scrollProgress * 0.2; 
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#334155" // Slate-700
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.NormalBlending} // Changed from Additive for better visibility on white
      />
    </Points>
  );
};

export const ThreeHero = () => {
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ clearColor: 'white' }}>
        <ParticleSystem scrollY={scrollY} />
      </Canvas>
    </div>
  );
};