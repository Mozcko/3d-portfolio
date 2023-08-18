import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Mail = () => {
  const mail = useGLTF("./mail_icon/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={mail.scene} scale={1} position-y={0} rotation-y={0}/>
    </mesh>
  );
};

const MailCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Mail />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default MailCanvas;
