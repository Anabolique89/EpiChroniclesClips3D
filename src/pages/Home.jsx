import React, { useState, Suspense, useEffect, useRef } from 'react';
import {Canvas} from'@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Water from '../models/Water';
import {Sky} from '../models/Sky';
import Boat from '../models/Boat';
import { Bird } from '../models/Bird';
import HomeInfo from '../components/HomeInfo';
import { OrbitControls } from '@react-three/drei';



const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(1);
const [isPlayingMusic, setIsPlayingMusic] = useState(false);

const [showBird, setShowBird] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBird(true), 2000); // Bird loads 2s later
    return () => clearTimeout(timer);
  }, []);

   const adjustIslandForScreenSize = () =>{
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 0.2, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    }else{
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

const adjustBoatForScreenSize = () => {
  let screenScale;
  let screenPosition = [0, -2.4, 0]; // move boat lower so it's visible
 let rotation = [0, Math.PI/2, 0]; // rotate 180° if backwards

  if (window.innerWidth < 768) {
    screenScale = [0.003, 0.003, 0.003]; // small scale for mobile
  } else {
    screenScale = [0.004, 0.004, 0.004]; // slightly bigger for desktop
  }

  return [screenScale, screenPosition, rotation];
};

const [boatScale, boatPosition, boatRotation] = adjustBoatForScreenSize();

  // const [birdScale, birdPosition] = adjustBirdForScreenSize();

  return (
   <section className='w-full h-screen relative'>
      <div className='absolute top-120 right-0 left-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
       
      </div>
      <div className='absolute top-6 left-0 right-0 z-10 flex items-center justify-center'>
     {/* <img src={logo} alt='logo' className='w-28 h-28 object-contain p-4' /><br/> */}
</div>
<Canvas 
  className={`w-full h-screen bg-transparent ${isRotating ?
'cursor-grabbing' : 'cursor:grab'} `}
 camera={{near: 0.1, far: 1000}}
>

<Suspense fallback={<Loader />}>

<directionalLight  position={[1,1,1]} intensity={2}/>
<ambientLight intensity={0.5}/>

<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/> 

<Sky isRotating={isRotating} />

  {showBird && (
        <Suspense fallback={null}>
          <Bird/>
        </Suspense>
      )}

<Island 
position = {islandPosition}
scale = {islandScale}
rotation = {islandRotation}
isRotating = {isRotating}
setIsRotating={setIsRotating}
setCurrentStage={setCurrentStage}

 />
 {/* <OrbitControls /> */}
<Water 
position = {islandPosition}
scale = {islandScale}
rotation = {islandRotation}/>
<Boat 
position = {boatPosition}
scale = {boatScale}
isRotating = {isRotating}
rotation={[0,20,0]}/>

</Suspense>

</Canvas>
 
   </section>
  )
}

export default Home