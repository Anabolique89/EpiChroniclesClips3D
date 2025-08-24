import React, { Suspense, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Chest } from "../models/Chest";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

// Error boundary for 3D canvas
class Canvas3DErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('3D Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl border-2 border-amber-300">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">Treasure Chest</h3>
            <p className="text-amber-700 text-sm mb-4">3D model temporarily unavailable</p>
            <button 
              onClick={this.props.onChestClick}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 active:scale-95 transition-all"
            >
              Open Treasure Chest
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Treasure Chest popup component with 4-step story
const TreasureChestPopup = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  if (!isVisible) return null;

  const stories = {
    1: {
      title: "🏴‍☠️ The Discovery",
      emoji: "💎",
      content: "Deep within the ancient Viking stronghold, you stumble upon a mysterious chest, its surface gleaming with otherworldly runes. The chest pulses with magical energy, and whispers of forgotten treasures echo through the stone halls. This is no ordinary container - it's the legendary Chest of Eternal Riches, said to hold the most precious Viking artifacts ever assembled.",
      button: "Examine the Chest",
      bgGradient: "from-yellow-900 via-amber-800 to-orange-900"
    },
    2: {
      title: "🔮 The Awakening",
      emoji: "⚡",
      content: "As your fingers trace the ancient runes, the chest begins to glow with brilliant golden light! The magical seals recognize your worthy spirit, and the heavy iron locks click open one by one. A warm, treasure-scented breeze escapes from within, carrying the essence of countless adventures and legendary quests completed by Viking heroes of old.",
      button: "Open the Chest",
      bgGradient: "from-purple-900 via-indigo-800 to-blue-900"
    },
    3: {
      title: "✨ The Revelation",
      emoji: "👑",
      content: "The lid creaks open to reveal the most breathtaking sight imaginable! Mountains of gleaming gold coins cascade like waterfalls, precious gemstones sparkle like captured starlight, and ancient artifacts of immense power rest nestled among silk and velvet. But more than treasure, you sense something greater - the chest contains the collected wisdom and memories of every Viking trader who came before.",
      button: "Claim Your Reward",
      bgGradient: "from-green-900 via-emerald-800 to-teal-900"
    },
    4: {
      title: "🌟 The Legacy",
      emoji: "🏆",
      content: "As you reach into the chest, the treasures transform before your eyes! The gold becomes knowledge, the gems become connections, and the artifacts become opportunities. You realize this chest doesn't just contain material wealth - it's a gateway to joining the legendary network of Viking traders. Your journey as a modern-day merchant adventurer begins now, with all the wisdom of the ancients at your disposal!",
      button: "Begin Your Journey",
      bgGradient: "from-red-900 via-pink-800 to-purple-900"
    }
  };

  const currentStory = stories[currentStep];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    onClose();
  };

  const handleStepClick = (step) => {
    if (step <= currentStep || currentStep === 4) {
      setCurrentStep(step);
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black transition-all duration-300 flex items-center justify-center z-50 p-4 ${
        isAnimating ? 'bg-opacity-80' : 'bg-opacity-0'
      }`}
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className={`bg-gradient-to-br ${currentStory.bgGradient} p-6 sm:p-8 rounded-3xl w-full max-w-sm sm:max-w-2xl relative shadow-2xl border-4 border-amber-400 transform transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating treasure emoji animation */}
        <div className="absolute -top-6 -right-6 text-5xl sm:text-7xl animate-bounce">
          {currentStory.emoji}
        </div>

        {/* Magical sparkles */}
        <div className="absolute top-4 left-4 text-yellow-300 opacity-70 animate-pulse">
          <span className="text-2xl">✨</span>
        </div>
        <div className="absolute bottom-6 right-8 text-yellow-300 opacity-60 animate-bounce delay-500">
          <span className="text-xl">💫</span>
        </div>
        <div className="absolute top-1/3 right-4 text-amber-300 opacity-50 animate-pulse delay-1000">
          <span className="text-lg">⭐</span>
        </div>

        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-amber-200 hover:text-white text-3xl sm:text-4xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all transform hover:scale-110 active:scale-95"
        >
          ×
        </button>

        {/* Interactive progress indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex space-x-3 sm:space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => handleStepClick(step)}
                className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  step === currentStep 
                    ? 'bg-amber-300 shadow-lg scale-125 animate-pulse' 
                    : step < currentStep 
                    ? 'bg-green-400 hover:bg-green-300 cursor-pointer shadow-lg' 
                    : 'bg-gray-500 bg-opacity-50 cursor-not-allowed'
                }`}
                disabled={step > currentStep && currentStep !== 4}
              >
                {step <= currentStep && (
                  <span className="text-xs text-black font-bold flex items-center justify-center w-full h-full">
                    {step < currentStep ? '✓' : step}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Story content with enhanced animations */}
        <div className="text-center mb-6 sm:mb-8 overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-amber-100 flex items-center justify-center animate-fadeIn">
            <span className="mr-3 text-3xl sm:text-5xl animate-pulse">{currentStory.title.split(' ')[0]}</span>
            <span className="animate-slideIn">{currentStory.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          <div className="text-amber-50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-h-48 sm:max-h-64 overflow-y-auto bg-black bg-opacity-40 p-4 sm:p-6 rounded-xl backdrop-blur-sm animate-slideUp border border-amber-300 border-opacity-30">
            <p className="animate-typewriter">{currentStory.content}</p>
          </div>
        </div>

        {/* Action buttons with treasure theme */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {currentStep === 4 ? (
            <a href="https://your-shop-link.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button 
                className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-400 hover:via-yellow-400 hover:to-orange-400 text-black px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 font-bold shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-amber-500/50 active:scale-95 animate-pulse hover:animate-none group"
              >
                <span className="text-lg">👑</span>
                <span>{currentStory.button}</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </button>
            </a>
          ) : (
            <button 
              onClick={handleNext}
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-400 hover:via-yellow-400 hover:to-orange-400 text-black px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 font-bold shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-amber-500/50 active:scale-95 animate-pulse hover:animate-none group"
            >
              <span className="text-lg">💎</span>
              <span>{currentStory.button}</span>
              <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
            </button>
          )}
          
          <button 
            onClick={handleClose}
            className="bg-gray-700 hover:bg-gray-600 text-amber-100 px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>🗝️</span>
            <span>{currentStep === 4 ? 'Close Chest' : 'Leave Chest'}</span>
          </button>
        </div>

        {/* Chapter indicator with treasure theme */}
        <div className="text-center mt-6 text-sm text-amber-200 flex items-center justify-center gap-3">
          <span className="animate-bounce">💰</span>
          <span className="font-semibold">Chapter {currentStep} of 4 - The Treasure Awaits</span>
          <span className="animate-bounce delay-300">💰</span>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [showChestPopup, setShowChestPopup] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const { alert, showAlert, hideAlert } = useAlert();

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('Take 001');
  const handleBlur = () => setCurrentAnimation('idle');

  // Chest click handler
  const handleChestClick = () => {
    console.log("💰 Treasure Chest clicked!");
    setCurrentAnimation('Take 001');
    setShowChestPopup(true);
  };

  const closeChestPopup = () => {
    setShowChestPopup(false);
    setCurrentAnimation('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Take 001');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "EpicChroniclesClips",
        from_email: form.email,
        to_email: 'flottekiki@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      },
      (error) => {
        setIsLoading(false);
        console.error(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      {alert.show && <Alert {...alert} />}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
          Get In Touch
        </h1>
        
        <form ref={formRef} className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-800 font-semibold'>
            Name
            <input 
              type='text'
              name='name'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John Doe'
              required
              value={form.name}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <label className='text-black-800 font-semibold'>
            Email
            <input 
              type='email'
              name='email'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='john@email.com'
              required
              value={form.email}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <label className='text-black-800 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
              rows={4}
              placeholder='Let us know how we can help!'
              required
              value={form.message}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <button
            type='submit'
            className='text-white bg-gradient-to-r from-[#00c6ff] to-[0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        {/* Instructions for chest interaction */}
        <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200">
          <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
            <span className="text-xl">💰</span>
            Discover Hidden Treasure!
          </h3>
          <p className="text-amber-700 text-sm">
            Click on the treasure chest to unlock an ancient Viking secret and discover legendary rewards! 
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[750px] h-[450px] mt-8 relative">
        <Canvas3DErrorBoundary onChestClick={handleChestClick}>
          {webglSupported ? (
            <Canvas 
              camera={{ position: [0, 3, 6], fov: 50 }}
              gl={{ 
                antialias: true, 
                alpha: true,
                preserveDrawingBuffer: false,
                powerPreference: "high-performance"
              }}
              onCreated={({ gl }) => {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                gl.shadowMap.enabled = true;
              }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[5, 10, 5]} 
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <hemisphereLight
                skyColor={'#87CEEB'}
                groundColor={'#8B4513'}
                intensity={0.6}
              />
              
              <Suspense fallback={null}>
                <Chest
                  currentAnimation={currentAnimation}
                  scale={[0.03, 0.03, 0.03]}
                  rotation={[13, 0, 0]}
                  position={[0.3, 0.4, 0.5]}
                  onClick={handleChestClick}
                />
              </Suspense>
              
              <OrbitControls 
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                maxDistance={10}
                minDistance={3}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
              />
            </Canvas>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl border-2 border-amber-300">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Treasure Chest</h3>
                <p className="text-amber-700 text-sm mb-4">WebGL not supported</p>
                <button 
                  onClick={handleChestClick}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 active:scale-95 transition-all"
                >
                  Open Treasure Chest
                </button>
              </div>
            </div>
          )}
        </Canvas3DErrorBoundary>
        
        {/* Test button for chest popup */}
        <div className="absolute bottom-4 right-4">
          <button 
            className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            onClick={handleChestClick}
          >
            <span className="text-lg">💰</span>
            Open Chest
          </button>
        </div>
      </div>

      {/* Treasure Chest Popup */}
      <TreasureChestPopup show={showChestPopup} onClose={closeChestPopup} />
    </section>
  );
};

export default Contact;