"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useCarouselStore } from "@/pages/Carousel"; // Ensure this is client-side

function Scene({
  position,
  fov,
}: {
  position: [number, number, number];
  fov: number;
}) {
  const model = useCarouselStore((state) => state.currentModel);

  return (
    <Canvas camera={{ position, fov }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      {model}
    </Canvas>
  );
}

export default function ModelView({
  position,
  fov,
}: {
  position: [number, number, number];
  fov: number;
}) {
  return <Scene position={position} fov={fov} />;
}
