"use client";

// Don't include THREE in the bundle and use @react-three instead if possible.
import React, { useRef } from "react";
import { Canvas, useFrame, type MeshProps } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";

function SphereObject() {
  const meshRef = useRef<any>(null);

  // use useFrame hook to get performant animations (instead of doing it with react hooks)
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshProps & {
        distort?: number;
      };
      const elapsedTime = state.clock.getElapsedTime();
      material.distort = (1 + Math.sin(elapsedTime * 0.5)) * 0.15;
    }
  });

  return (
    <Center>
      <mesh
        ref={meshRef}
        onPointerOver={() => ((meshRef.current?.material as any).distort = 0.3)} // manipulate the object directly to avoid additional state management
        onPointerOut={() => ((meshRef.current?.material as any).distort = 0)}
      >
        <sphereGeometry args={[0.75, 64, 64]} />
        <MeshDistortMaterial speed={3} roughness={1}>
          <GradientTexture
            stops={[0.2, 0.6, 1]}
            colors={[
              "rgb(0, 255, 251)",
              "rgb(158, 33, 243)",
              "rgb(255, 218, 237)",
            ]}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>
    </Center>
  );
}

export const Sphere = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
      <SphereObject />
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
      <Environment blur={1} preset={"warehouse"} />
    </Canvas>
  );
};

export default Sphere;
