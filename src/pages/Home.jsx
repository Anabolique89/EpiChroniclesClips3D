import React, { useState, Suspense, useEffect, useRef } from 'react';
import {Canvas} from'@react-three/fiber';
import Loader from '../components/Loader';
import {Sky} from '../models/Sky';
import Boat from '../models/Boat';
import HomeInfo from '../components/HomeInfo';
import Island2 from '../models/Island2';
import VikingBoatPopup from '../components/VikingBoatPopup'; // You'll need to create this file

// Island popup component (your existing one)
const IslandPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className="bg-white p-6 rounded-lg max-w-md mx-4 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">🏝️ Magical Island</h2>
        <p className="text-gray-600 mb-4">
          Welcome to the magical floating island! This mystical place holds many secrets and ancient magic. The Island Merchants have been waiting for brave traders to discover their realm.
        </p>
        <div className="flex gap-2">
          <button 
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Explore More
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(null);
  const [showIslandPopup, setShowIslandPopup] = useState(false);
  const [showBoatPopup, setShowBoatPopup] = useState(false);

  // Island click handler
  const handleIslandClick = () => {
    console.log("🏝️ Island clicked in parent!");
    setShowIslandPopup(true);
  };

  // Boat click handler
  const handleBoatClick = () => {
    console.log("🚢 Boat clicked in parent!");
    setShowBoatPopup(true);
  };

  // Close handlers
  const closeIslandPopup = () => {
    setShowIslandPopup(false);
  };

  const closeBoatPopup = () => {
    setShowBoatPopup(false);
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 0.2, 0];

    if(window.innerWidth < 768){
      screenScale = [0.3, 0.3, 0.3];
    }else{
      screenScale = [0.32, 0.32, 0.32];
    }
    return [screenScale, screenPosition, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const adjustBoatForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -2.4, 0];
    let rotation = [0, Math.PI/2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.003, 0.003, 0.003];
    } else {
      screenScale = [0.004, 0.004, 0.004];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [boatScale, boatPosition, boatRotation] = adjustBoatForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-120 right-0 left-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      <div className='absolute top-6 left-0 right-0 z-10 flex items-center justify-center'>
        {/* Logo space */}
      </div>
      
      <Loader />
      
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ?
        'cursor-grabbing' : 'cursor:grab'} `}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={'loading'}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/> 

          <Sky isRotating={isRotating} />

          <Island2 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            onIslandClick={handleIslandClick}
          />

          <Boat 
            position={boatPosition}
            scale={boatScale}
            isRotating={isRotating}
            rotation={[0,20,0]}
            onBoatClick={handleBoatClick}
          />
        </Suspense>
      </Canvas>
 
      {/* Both popups rendered OUTSIDE the Canvas */}
      <IslandPopup show={showIslandPopup} onClose={closeIslandPopup} />
      <VikingBoatPopup show={showBoatPopup} onClose={closeBoatPopup} />

      {/* Debug UI */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded-lg text-sm font-mono">
        <div>Rotating: {isRotating ? '🔄 Yes' : '⏸️ No'}</div>
        {currentStage && <div>Stage: {currentStage}</div>}
        <div>Island Popup: {showIslandPopup ? '✅ Open' : '❌ Closed'}</div>
        <div>Boat Popup: {showBoatPopup ? '✅ Open' : '❌ Closed'}</div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded-lg text-sm max-w-xs">
        <h3 className="font-bold mb-2">🎮 Controls:</h3>
        <ul className="text-xs space-y-1">
          <li>• Click & drag to rotate scene</li>
          <li>• Click on 🏝️ island to learn about traders</li>
          <li>• Click on 🚢 boat for Viking story</li>
          <li>• Use arrow keys to rotate</li>
        </ul>
      </div>

      {/* Test buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
          onClick={handleIslandClick}
        >
          🏝️ Test Island
        </button>
        <button 
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm"
          onClick={handleBoatClick}
        >
          🚢 Test Boat
        </button>
      </div>
    </section>
  )
}

export default Home;