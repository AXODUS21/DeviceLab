import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"

export function Macbook(props : any) {
  const { nodes, materials } = useGLTF("scenes/macbook_pro.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_6 as THREE.Mesh).geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("scenes/macbook_pro.glb");
