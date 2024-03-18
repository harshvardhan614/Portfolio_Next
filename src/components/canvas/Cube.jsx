"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const CubeCanvas = React.memo(function CubeCanvas() {
  return (
    <div className="w-full h-[70vh] z-20 cursor-pointer">
      <Canvas className="w-[320px] xs:w-[400px] md:w-[450px]">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <pointLight intensity={1} />
        <Cube />
        </Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
})

const Cube = () => {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });

  const texture_1 = useLoader(TextureLoader, "/cube/1.jpg");
  const texture_2 = useLoader(TextureLoader, "/cube/7.jpg");
  const texture_3 = useLoader(TextureLoader, "/cube/3.jpg");
  const texture_4 = useLoader(TextureLoader, "/cube/4.jpg");
  const texture_5 = useLoader(TextureLoader, "/cube/5.jpg");
  const texture_6 = useLoader(TextureLoader, "/cube/6.jpg");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
};

export default CubeCanvas;
