"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { CarouselState, useCarouselStore } from "@/pages/Carousel";

export default function ModelView({
  position,
  fov,
}: {
  position: [number, number, number];
  fov: number;
}) {
  const model = useCarouselStore((state: CarouselState) => state.currentModel);

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
