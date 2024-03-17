/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 MyModal.glb 
*/
"use client";

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useFBX } from "@react-three/drei";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/MyModal.glb");
  const { animations: GreetingAnimation } = useFBX(
    "/animations/Standing.fbx"
  );
  console.log(GreetingAnimation);
  GreetingAnimation[0].name = "Greeting";

  const { actions } = useAnimations(GreetingAnimation, group);

  useEffect(() => {
    console.log(actions);
    actions["Greeting"].reset().play();
  }, []);

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        frustumCulled={false}
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
      />
      <mesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
      />
    </group>
  );
}

useGLTF.preload("/models/MyModal.glb");
