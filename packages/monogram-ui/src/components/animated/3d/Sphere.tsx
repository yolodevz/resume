"use client";

import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";

function SphereObject() {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as any;
      const elapsedTime = state.clock.getElapsedTime();
      material.distort = (1 + Math.sin(elapsedTime * 0.5)) * 0.15;
    }
  });

  return (
    <Center>
      <mesh
        ref={meshRef}
        onPointerOver={() => (meshRef.current.material.distort = 0.3)}
        onPointerOut={() => (meshRef.current.material.distort = 0)}
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
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "0px 0px 100% 0px",
  });

  return (
    <div ref={ref} className="h-full">
      {inView && (
        <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
          <SphereObject />
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enablePan={false}
            enableZoom={false}
            minZoom={2}
            minPolarAngle={Math.PI / 2.1}
            maxPolarAngle={Math.PI / 2.1}
          />
          <Environment blur={1} preset={"warehouse"} />
        </Canvas>
      )}
    </div>
  );
};

export default Sphere;
