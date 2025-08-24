import React, { useState, Suspense, useEffect, useRef } from 'react';
import {Canvas} from'@react-three/fiber';
import Loader from '../components/Loader';
import {Sky} from '../models/Sky';
import Boat from '../models/Boat';
import HomeInfo from '../components/HomeInfo';
import Island2 from '../models/Island2';
import { Bird } from '../models/Bird';
import VikingBoatPopup from '../components/VikingBoatPopup';

// Welcome popup for first-time visitors
const WelcomePopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000] p-4"
      style={{ zIndex: 10000 }}
    >
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4 sm:p-8 rounded-3xl w-full max-w-sm sm:max-w-2xl relative shadow-2xl border-4 border-amber-600 transform transition-all duration-500 animate-pulse-once">
        <div className="absolute -top-4 -left-4 text-6xl animate-bounce">⚔️</div>
        <div className="absolute -top-4 -right-4 text-6xl animate-bounce delay-300">🛡️</div>
        
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-amber-900 flex items-center justify-center flex-wrap gap-2">
            <span className="text-4xl sm:text-6xl">🏴‍☠️</span>
            <span>Welcome, Viking Warrior!</span>
          </h1>
          
          <div className="bg-amber-100 p-4 sm:p-6 rounded-xl mb-6 border-2 border-amber-300">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-amber-800 flex items-center justify-center gap-2">
              <span className="text-2xl">📜</span>
              The Legend of Ragnar's Discovery
            </h2>
            <p className="text-amber-700 text-sm sm:text-base leading-relaxed mb-4">
              As Ragnar sailed the treacherous northern seas, a mystical fog lifted to reveal a floating island filled with ancient treasures and exotic wares. The Island Merchants, guardians of legendary artifacts, have been waiting centuries for worthy traders...
            </p>
            <p className="text-amber-800 font-semibold text-sm sm:text-base">
              <span className="text-xl mr-2">⚡</span>
              Will you join this epic trading adventure?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://10zpwk-n0.myshopify.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:via-orange-500 hover:to-amber-500 text-white px-6 sm:px-8 py-4 rounded-xl transition-all font-bold text-base sm:text-lg transform hover:scale-105 active:scale-95 text-center shadow-lg border-2 border-yellow-400 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">⚔️</span>
                Begin Your Quest!
                <span className="text-xl sm:text-2xl">💰</span>
              </span>
            </a>
            <button 
              onClick={onClose}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white px-6 py-4 rounded-xl transition-all font-semibold transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                <span>🌊</span>
                Explore First
              </span>
            </button>
          </div>
          
          {/* Attention-grabbing elements */}
          <div className="mt-6 flex justify-center items-center gap-4 text-amber-700">
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <span className="text-lg animate-pulse">🔥</span>
              <span className="font-semibold">Limited Edition Items</span>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <span className="text-lg animate-pulse">⚡</span>
              <span className="font-semibold">Rare Viking Artifacts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Island popup with Merchant's perspective story
const IslandPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 p-4 sm:p-8 rounded-3xl w-full max-w-sm sm:max-w-2xl relative shadow-2xl border-4 border-emerald-400 transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating magical elements */}
        <div className="absolute -top-6 -left-6 text-5xl animate-bounce">🌟</div>
        <div className="absolute -top-4 -right-4 text-4xl animate-pulse">🔮</div>
        <div className="absolute bottom-4 left-2 text-3xl animate-bounce delay-500">✨</div>
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-emerald-200 hover:text-emerald-100 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-emerald-700 hover:bg-opacity-50 transition-all transform hover:scale-110"
        >
          ×
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-100 flex items-center justify-center">
            <span className="mr-3 text-4xl animate-pulse">🏝️</span>
            The Island Merchants
            <span className="ml-3 text-4xl animate-pulse">⚖️</span>
          </h2>
          
          <div className="bg-emerald-800 bg-opacity-60 p-4 sm:p-6 rounded-xl mb-6 border-2 border-emerald-400 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-emerald-200 flex items-center justify-center gap-2">
              <span className="text-2xl">👑</span>
              Astrid the Truthseer Speaks
            </h3>
            
            <div className="text-emerald-100 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="italic">
                "For centuries, we Island Merchants have dwelled in this mystical realm, suspended between the mortal world and the realm of magic. We are the guardians of ancient treasures, keepers of enchanted wares that hold power beyond mortal understanding."
              </p>
              
              <p>
                <span className="text-emerald-300 font-semibold">🔮 Our prophecy foretold</span> of northern warriors who would arrive with hearts brave enough to seek true treasure. When Ragnar's dragon-prowed vessel pierced our protective mists, we knew the time had come.
              </p>
              
              <p>
                <span className="text-amber-300 font-semibold">💎 The Great Exchange</span> was no mere trade - it was destiny fulfilled. Our enchanted crystals, healing potions, and mystical maps found their rightful owners, while the Vikings' amber, iron, and furs became imbued with our island's ancient magic.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-800 to-orange-800 p-4 rounded-lg mb-6 border border-amber-400">
            <p className="text-amber-100 text-sm sm:text-base font-semibold">
              <span className="text-xl mr-2">⚡</span>
              "The trading hall remains open, brave soul. Will you discover what magical wares await your worthy hands?"
              <span className="text-xl ml-2">⚡</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://10zpwk-n0.myshopify.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-500 hover:via-orange-500 hover:to-red-500 text-white px-6 sm:px-8 py-4 rounded-xl transition-all font-bold text-base sm:text-lg transform hover:scale-105 active:scale-95 text-center shadow-lg border-2 border-yellow-400 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span className="text-xl">🏛️</span>
                Enter the Trading Hall
                <span className="text-xl">💰</span>
              </span>
            </a>
            <button 
              onClick={onClose}
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-4 rounded-xl transition-all font-semibold transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <span>🌊</span>
                Return to Waters
              </span>
            </button>
          </div>
          
          {/* Mystical elements */}
          <div className="mt-6 flex justify-center items-center gap-6 text-emerald-300">
            <div className="flex flex-col items-center gap-1 text-xs sm:text-sm">
              <span className="text-2xl animate-pulse">💎</span>
              <span className="font-semibold">Enchanted Crystals</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-xs sm:text-sm">
              <span className="text-2xl animate-pulse delay-300">🗺️</span>
              <span className="font-semibold">Treasure Maps</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-xs sm:text-sm">
              <span className="text-2xl animate-pulse delay-500">🧪</span>
              <span className="font-semibold">Healing Potions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Shop Button for mobile
const FloatingShopButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-4 py-3 rounded-full text-sm font-bold shadow-2xl transform hover:scale-110 active:scale-95 transition-all border-2 border-yellow-400 animate-bounce-slow sm:hidden"
  >
    <span className="flex items-center gap-2">
      <span className="text-lg">🛒</span>
      <span>SHOP</span>
    </span>
  </button>
);

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(null);
  const [showIslandPopup, setShowIslandPopup] = useState(false);
  const [showBoatPopup, setShowBoatPopup] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Enhanced mobile detection with touch support
  useEffect(() => {
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileWidth || isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  // First visit welcome popup
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedViking');
    if (!hasVisited) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  // Mark as visited when popup is closed
  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
    setIsFirstVisit(false);
    sessionStorage.setItem('hasVisitedViking', 'true');
  };

  // Direct shop navigation
  const goToShop = () => {
    window.open('https://10zpwk-n0.myshopify.com/', '_blank');
  };

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

    // More aggressive mobile detection
    const actualWidth = window.innerWidth || document.documentElement.clientWidth;
    const isMobileDevice = actualWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if(isMobileDevice){
      screenScale = [0.4, 0.4, 0.4]; // Larger for better mobile visibility
    }else{
      screenScale = [0.32, 0.32, 0.32];
    }
    return [screenScale, screenPosition, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const adjustBoatForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -2.3, 0];
    let rotation = [0, Math.PI/2, 0];

    // More aggressive mobile detection
    const actualWidth = window.innerWidth || document.documentElement.clientWidth;
    const isMobileDevice = actualWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobileDevice) {
      screenScale = [0.004, 0.004, 0.004]; // Larger for better mobile visibility
    } else {
      screenScale = [0.004, 0.004, 0.004];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [boatScale, boatPosition, boatRotation] = adjustBoatForScreenSize();

  return (
    <section className='w-full h-screen relative overflow-hidden'>
      {/* Mobile-optimized viewport meta tag equivalent styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-text {
            font-size: clamp(0.75rem, 3vw, 1rem);
          }
          .mobile-button {
            min-height: 44px;
            min-width: 44px;
          }
          .mobile-padding {
            padding: 0.75rem;
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        @keyframes pulse-once {
          0% { transform: scale(0.95); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-pulse-once {
          animation: pulse-once 0.6s ease-out;
        }
      `}</style>

      {/* Desktop Home Info */}
      <div className={`absolute top-16 sm:top-20 right-0 left-0 z-10 flex items-center justify-center px-4`}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      <Loader />
      
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ?
        'cursor-grabbing' : 'cursor-grab'} `}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={'loading'}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/> 

          <Sky isRotating={isRotating} />
          <Bird />
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
 
      {/* All popups rendered OUTSIDE the Canvas */}
      <WelcomePopup show={showWelcomePopup} onClose={closeWelcomePopup} />
      <IslandPopup show={showIslandPopup} onClose={closeIslandPopup} />
      <VikingBoatPopup show={showBoatPopup} onClose={closeBoatPopup} />

      {/* Floating Shop Button for mobile */}
      <FloatingShopButton onClick={goToShop} />

      {/* Enhanced Mobile Controls Panel */}
      <div className={`absolute bottom-4 left-4 right-4 z-10 ${isMobile ? 'block' : 'hidden'}`}>
        <div className="bg-black bg-opacity-90 backdrop-blur-sm text-white p-4 rounded-2xl border border-amber-600">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <button 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-3 py-3 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 transform active:scale-95 transition-all shadow-lg mobile-button border border-yellow-400"
              onClick={goToShop}
            >
              <span className="text-lg">🛒</span>
              <span className="mobile-text">SHOP</span>
            </button>
            <button 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-3 py-3 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transform active:scale-95 transition-all shadow-lg mobile-button"
              onClick={handleIslandClick}
            >
              <span className="text-lg">🏝️</span>
              <span className="mobile-text">Island</span>
            </button>
            <button 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-3 py-3 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transform active:scale-95 transition-all shadow-lg mobile-button"
              onClick={handleBoatClick}
            >
              <span className="text-lg">🚢</span>
              <span className="mobile-text">Boat</span>
            </button>
          </div>
          <div className="text-center text-xs opacity-75">
            <p className="mobile-text">Drag to rotate • Tap to explore • Shop for treasures!</p>
          </div>
        </div>
      </div>

      {/* Enhanced Desktop Controls */}
      <div className={`absolute bottom-4 left-4 z-10 max-w-xs ${isMobile ? 'hidden' : 'block'}`}>
        <div className="bg-black bg-opacity-80 text-white p-5 rounded-xl text-sm backdrop-blur-sm border border-amber-600">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <span>🎮</span>
            Viking Controls
          </h3>
          <ul className="text-xs space-y-2 opacity-90">
            <li className="flex items-center gap-2">
              <span>🖱️</span>
              Drag to navigate the seas
            </li>
            <li className="flex items-center gap-2">
              <span>🏝️</span>
              Click island for trader tales
            </li>
            <li className="flex items-center gap-2">
              <span>🚢</span>
              Click boat for Ragnar's story
            </li>
            <li className="flex items-center gap-2 text-amber-400 font-semibold">
              <span>⚔️</span>
              Visit shop for legendary items!
            </li>
          </ul>
        </div>
      </div>

      {/* Enhanced Desktop Action Buttons */}
      <div className={`absolute bottom-4 right-4 flex flex-col gap-3 ${isMobile ? 'hidden' : 'block'}`}>
        <a
          href="https://10zpwk-n0.myshopify.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-6 py-4 rounded-xl text-sm font-bold shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-yellow-400"
        >
          <span>⚔️</span>
          VIKING SHOP
          <span>💰</span>
        </a>
        <button 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          onClick={handleIslandClick}
        >
          <span>🏝️</span>
          Island
        </button>
        <button 
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          onClick={handleBoatClick}
        >
          <span>🚢</span>
          Boat
        </button>
      </div>
    </section>
  )
}

export default Home;