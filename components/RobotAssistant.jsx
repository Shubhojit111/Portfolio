"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import Robot from "./Robot";

export default function RobotAssistant() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[0, 1, 2]} intensity={8} />

      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={1}
      >
        <Robot />
      </Float>
    </Canvas>
  );
}