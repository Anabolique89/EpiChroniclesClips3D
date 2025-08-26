import { useState, useEffect } from 'react';

// Viking Boat popup component with 4-step story
const VikingBoatPopup = ({ show, onClose }) => {
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
      title: "🚢 The Arrival",
      emoji: "🌊",
      content: "The longboat cuts through the morning mist, its dragon-carved prow emerging from the fog like a creature from legend. Captain Ragnar and his crew of seasoned warriors have been sailing for three days, their ship heavy with Norse goods - amber from the Baltic shores, fine iron weapons forged in the cold mountains, and warm furs from the northern wilderness.",
      button: "Continue the Journey",
      bgGradient: "from-blue-900 via-blue-800 to-slate-700"
    },
    2: {
      title: "⚓ Spotting the Island",
      emoji: "🏝️",
      content: "As the sun climbs higher, Olaf the Sharp-Eyed calls from the mast: 'Land ahead!' The mysterious floating island appears before them, defying all natural law. Ancient runes glow softly along its rocky edges, and a magnificent tree stretches toward the sky. 'By Odin's beard,' whispers Ragnar, 'this is no ordinary island. The legends spoke true.'",
      button: "Approach the Island",
      bgGradient: "from-emerald-800 via-teal-700 to-blue-800"
    },
    3: {
      title: "🤝 The Encounter",
      emoji: "✨",
      content: "As they anchor near the island's edge, figures emerge from behind the great tree - not enemies, but traders! The Island Merchants, keepers of this magical realm, have been waiting. Their leader, a wise woman named Astrid the Truthseer, approaches with a knowing smile. 'We have what you seek, northern warriors, and we know you carry treasures from distant lands.'",
      button: "Begin Trading",
      bgGradient: "from-purple-800 via-violet-700 to-indigo-800"
    },
    4: {
      title: "💎 The Great Exchange",
      emoji: "🏆",
      content: "What follows is the most extraordinary trade in Viking history. The Island Merchants offer enchanted items: crystals that never lose their light, maps to hidden treasures, and potions that heal wounds instantly. In exchange, Ragnar's amber resonates with the island's magic, his iron weapons gain mystical properties, and his furs become blessed with eternal warmth. Both parties know they've witnessed something legendary.",
      button: "Enter the Trading Hall",
      bgGradient: "from-amber-800 via-orange-700 to-red-800"
    }
  };

  const currentStory = stories[currentStep];

  // Handle the next button - redirect to Shopify on final step
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Redirect to Shopify store
      window.open('https://10zpwk-n0.myshopify.com', '_blank');
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
      className={`fixed inset-0 bg-black transition-all duration-300 flex flex-1/2 items-center justify-center z-50 p-4 ${
        isAnimating ? 'bg-opacity-70' : 'bg-opacity-0'
      }`}
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className={`bg-gradient-to-br ${currentStory.bgGradient} p-6 sm:p-4 rounded-2xl w-full max-w-sm sm:max-w-4xl relative shadow-2xl border-4 border-yellow-400 transform transition-all duration-500 ${
          isAnimating ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating emoji animation */}
        <div className="absolute -top-4 -right-4 text-2xl sm:text-8xl animate-bounce">
          {currentStory.emoji}
        </div>

        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-yellow-300 text-2xl sm:text-5xl font-bold w-8 h-8 sm:w-20 sm:h-20 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all transform hover:scale-110 active:scale-95"
        >
          ×
        </button>

        {/* Interactive story progress indicator */}
        <div className="flex justify-center mb-4 sm:mb-8 sm:mt-8">
          <div className="flex space-x-2 sm:space-x-3">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => handleStepClick(step)}
                className={`w-4 h-4 sm:w-8 sm:h-8 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  step === currentStep 
                    ? 'bg-yellow-400 shadow-lg scale-125 animate-pulse' 
                    : step < currentStep 
                    ? 'bg-green-400 hover:bg-green-300 cursor-pointer' 
                    : 'bg-gray-400 bg-opacity-50 cursor-not-allowed'
                } ${step <= currentStep ? 'shadow-lg' : ''}`}
                disabled={step > currentStep && currentStep !== 4}
              />
            ))}
          </div>
        </div>

        {/* Story content with slide animation */}
        <div className="text-center mb-4 sm:mb-6 overflow-hidden sm:p-4">
          <h2 className="text-md sm:text-6xl font-bold mb-3 sm:mb-4 text-yellow-100 flex items-center justify-center animate-fadeIn">
            <span className="mr-2 text-2xl sm:text-6xl animate-pulse">{currentStory.title.split(' ')[0]}</span>
            <span className="animate-slideIn">{currentStory.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          <div className="text-white md:text-md sm:text-4xl leading-relaxed mb-4 sm:mb-4 overflow-y-auto bg-opacity-30 p-4 rounded-lg backdrop-blur-sm animate-slideUp">
            <p className="animate-typewriter">{currentStory.content}</p>
          </div>
        </div>

        {/* Action buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={handleNext}
            className={`text-white text-4xl px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 font-bold shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-2xl active:scale-95 group ${
              currentStep === 4 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 animate-pulse hover:animate-none' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 animate-pulse hover:animate-none'
            }`}
          >
            <span>{currentStory.button}</span>
            <span className="group-hover:translate-x-1 transition-transform">
              {currentStep === 4 ? '🏪' : '→'}
            </span>
          </button>
          
          <button 
            onClick={handleClose}
            className="bg-gray-600 hover:bg-gray-500 text-white sm:text-4xl px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 active:scale-95"
          >
            {currentStep === 4 ? 'End Story ⚔️' : 'Close 🛡️'}
          </button>
        </div>

        {/* Step indicator with Viking theme */}
        <div className="text-center mt-4 text-xs sm:text-2xl text-yellow-200 flex items-center justify-center gap-2 p-6">
          <span className="animate-bounce">⚔️</span>
          <span>Chapter {currentStep} of 4</span>
          <span className="animate-bounce delay-300">🛡️</span>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-2 left-2 text-yellow-400 opacity-50 animate-pulse">
          <span className="text-lg sm:text-2xl">🗿</span>
        </div>
        <div className="absolute top-1/4 left-2 text-yellow-400 opacity-30 animate-bounce delay-1000">
          <span className="text-sm sm:text-lg">⚡</span>
        </div>
        <div className="absolute bottom-1/4 right-4 text-yellow-400 opacity-40 animate-pulse delay-500">
          <span className="text-sm sm:text-lg">🌟</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes typewriter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out 0.3s both;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out 0.5s both;
        }
        
        .animate-typewriter {
          animation: typewriter 1s ease-out 0.7s both;
        }
      `}</style>
    </div>
  );
};

export default VikingBoatPopup;