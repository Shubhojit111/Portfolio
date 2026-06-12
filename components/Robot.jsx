"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Robot() {
  const robot = useRef();

  useFrame(({ clock, mouse }) => {
    if (!robot.current) return;

    robot.current.rotation.y +=
      (mouse.x * 0.3 - robot.current.rotation.y) * 0.05;

    robot.current.rotation.x +=
      (-mouse.y * 0.08 - robot.current.rotation.x) * 0.05;

    robot.current.position.y =
      Math.sin(clock.elapsedTime * 2) * 0.08;
  });

  return (
    <group ref={robot} scale={1.25}>
      {/* HEAD */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.95, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* VISOR */}
      <mesh position={[0, 1.05, 0.45]} scale={[0.9, 0.7, 0.4]}>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshPhysicalMaterial
          color="#050505"
          roughness={0}
          transmission={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* LEFT EYE */}
      <mesh
        position={[-0.28, 1.18, 0.82]}
        rotation={[0, 0, 0.4]}
      >
        <torusGeometry
          args={[0.12, 0.03, 32, 100, Math.PI]}
        />
        <meshStandardMaterial
          emissive="#4fd8ff"
          emissiveIntensity={8}
        />
      </mesh>

      {/* RIGHT EYE */}
      <mesh
        position={[0.28, 1.18, 0.82]}
        rotation={[0, 0, -0.4]}
      >
        <torusGeometry
          args={[0.12, 0.03, 32, 100, Math.PI]}
        />
        <meshStandardMaterial
          emissive="#4fd8ff"
          emissiveIntensity={8}
        />
      </mesh>

      {/* BODY */}
      <mesh position={[0, -0.2, 0]} scale={[0.8, 1.1, 0.8]}>
        <capsuleGeometry args={[0.45, 0.7, 16, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.12}
          clearcoat={1}
        />
      </mesh>

      {/* LOWER BODY */}
      <mesh position={[0, -0.9, 0]} scale={[0.55, 0.75, 0.55]}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshPhysicalMaterial
          color="#f5f5f5"
          roughness={0.12}
          clearcoat={1}
        />
      </mesh>

      {/* ENERGY CORE */}
      <mesh position={[0, 0.25, 0]}>
        <circleGeometry args={[0.16, 64]} />
        <meshStandardMaterial
          emissive="#63d8ff"
          emissiveIntensity={10}
          color="#63d8ff"
        />
      </mesh>

      {/* LEFT ARM */}
      <mesh
        position={[-1.0, 0.15, 0]}
        rotation={[0, 0, -0.9]}
        scale={[0.25, 0.65, 0.12]}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.15}
          clearcoat={1}
        />
      </mesh>

      {/* RIGHT ARM */}
      <mesh
        position={[1.0, -0.05, 0]}
        rotation={[0, 0, 0.9]}
        scale={[0.25, 0.65, 0.12]}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.15}
          clearcoat={1}
        />
      </mesh>

      {/* LEFT EAR */}
      <mesh position={[-0.9, 1.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* RIGHT EAR */}
      <mesh position={[0.9, 1.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* ANTENNA LEFT */}
      <mesh
        position={[-1.0, 1.8, 0]}
        rotation={[0, 0, 0.15]}
      >
        <cylinderGeometry args={[0.02, 0.02, 0.7, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* ANTENNA RIGHT */}
      <mesh
        position={[1.0, 1.8, 0]}
        rotation={[0, 0, -0.15]}
      >
        <cylinderGeometry args={[0.02, 0.02, 0.7, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}