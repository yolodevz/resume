"use client";

import React, { useState, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";

function Sphere() {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const { roughness } = useControls({
    roughness: { value: 1, min: 0, max: 1 },
  });

  useCursor(hovered);
  useFrame(() => {
    if (ref.current && ref.current.material) {
      const material = ref.current.material as THREE.Material & {
        distort: number;
      };

      material.distort = THREE.MathUtils.lerp(
        material.distort,
        hovered ? 0.3 : 0,
        hovered ? 0.05 : 0.01
      );
    }
  });

  return (
    <Center>
      <mesh
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.75, 64, 64]} />
        <MeshDistortMaterial speed={3} roughness={roughness}>
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

/**
 * @description 3D scene containing the interactive Gradient Sphere.
 * @todo add glowing effect
 * @todo add plastered logos
 */
const SphereComponent2 = () => {
  const { blur } = useControls({
    blur: { value: 0.65, min: 0, max: 1 },
    preset: "studio",
  });

  return (
    <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
      <group position={[0, 0, 0]}>
        <Sphere />
      </group>
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
      <Environment blur={blur} preset={"warehouse"} />
    </Canvas>
  );
};

export const SphereComponent = React.memo(SphereComponent2);
