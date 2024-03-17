"use client"

import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const  Computers = () => {
  
    const computer = useGLTF('desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
       position={[-20, 50 ,10]}
       angle={0.12}
       penumbra={1}
       intensity={1}
       castShadow
       shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={1.35}
        position={ [0, -3, -2.2]} //array of x,y,z axis values
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
 

  return (
    <Canvas
    frameLoop="demand"
    shadows
    camera ={{ position : [20, 3, 5,], fov:25 }}
    gl={{ preserveDrawingBuffer : true }}  
    >
      <Suspense fallback={<CanvasLoader/>}> 
      {/* canvas loader component we use to stop page breaking when model loads */}
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas