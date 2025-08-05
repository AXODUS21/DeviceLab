import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three"

export function Macbook(props : any) {
  const { nodes, materials } = useGLTF("scenes/macbook_pro.glb");
  const texture = useTexture("/textures/yellow.png");
  return (
    <group {...props} dispose={null}>
      <group position={[1, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_6 as THREE.Mesh).geometry}
          material={materials.MacBookPro}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.MacBookPro}
          scale={10}
        />
        <meshStandardMaterial roughness={1} map={texture} /> {/*Doesnt work yet */}
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.MacBookPro}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("scenes/macbook_pro.glb");
