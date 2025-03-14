import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";

// 🎨 Estiliza o Container do Canvas
const CanvasContainer = styled.div`
  width: 95%;
  max-width: 1280px;
  margin-top: 40px;
  border-radius: 15px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  transition: all 0.5s ease-in-out;
  border: 1px solid red;
`;

const PlayButton = styled.button`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: #ccc;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  text-align: center;
  font-weight: 400;

  
  &:hover {
    background-color: #000;
  }
`;

const HouseModel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <CanvasContainer>
      {!isPlaying && (
        <PlayButton onClick={() => setIsPlaying(true)}>Ver</PlayButton>
      )}
      {isPlaying && (
        <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
          <House />
        </Canvas>
      )}
    </CanvasContainer>
  );
};

// 🏠 Carrega o modelo GLB mantendo os materiais originais
const House = () => {
  const { scene } = useGLTF(
    "https://pub-073d8d6d2f544125ab728d350dfc84df.r2.dev/ImageToStl.com_Tiny%2BHouse%2BGeorgia.glb"
  );

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={1} position={[0, -1.5, 0]} />;
};

export default HouseModel;
