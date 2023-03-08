import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../Loader";

interface Props {
  isMobile: boolean;
}

const Computers: React.FC<Props> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intesity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
  );
};

export const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const matchMediaQuery = window.matchMedia("(max-width:760px)");
    setIsMobile(matchMediaQuery.matches);
    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
    };
    matchMediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      matchMediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
