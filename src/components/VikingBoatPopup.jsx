import { useState } from 'react';

// Viking Boat popup component with 4-step story
const VikingBoatPopup = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  if (!show) return null;

  const stories = {
    1: {
      title: "🚢 The Arrival",
      content: "The longboat cuts through the morning mist, its dragon-carved prow emerging from the fog like a creature from legend. Captain Ragnar and his crew of seasoned warriors have been sailing for three days, their ship heavy with Norse goods - amber from the Baltic shores, fine iron weapons forged in the cold mountains, and warm furs from the northern wilderness.",
      button: "Continue the Journey →"
    },
    2: {
      title: "⚓ Spotting the Island",
      content: "As the sun climbs higher, Olaf the Sharp-Eyed calls from the mast: 'Land ahead!' The mysterious floating island appears before them, defying all natural law. Ancient runes glow softly along its rocky edges, and a magnificent tree stretches toward the sky. 'By Odin's beard,' whispers Ragnar, 'this is no ordinary island. The legends spoke true.'",
      button: "Approach the Island →"
    },
    3: {
      title: "🤝 The Encounter",
      content: "As they anchor near the island's edge, figures emerge from behind the great tree - not enemies, but traders! The Island Merchants, keepers of this magical realm, have been waiting. Their leader, a wise woman named Astrid the Truthseer, approaches with a knowing smile. 'We have what you seek, northern warriors, and we know you carry treasures from distant lands.'",
      button: "Begin Trading →"
    },
    4: {
      title: "💎 The Great Exchange",
      content: "What follows is the most extraordinary trade in Viking history. The Island Merchants offer enchanted items: crystals that never lose their light, maps to hidden treasures, and potions that heal wounds instantly. In exchange, Ragnar's amber resonates with the island's magic, his iron weapons gain mystical properties, and his furs become blessed with eternal warmth. Both parties know they've witnessed something legendary.",
      button: "Sail into Legend →"
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
    setCurrentStep(1); // Reset for next time
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className="bg-gradient-to-b from-amber-50 to-amber-100 p-8 rounded-xl max-w-2xl mx-4 relative shadow-2xl border-4 border-amber-800"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-amber-700 hover:text-amber-900 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-200 transition-all"
        >
          ×
        </button>

        {/* Story progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full ${
                  step <= currentStep ? 'bg-amber-600' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Story content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4 text-amber-900 flex items-center justify-center">
            {currentStory.title}
          </h2>
          
          <div className="text-amber-800 text-base leading-relaxed mb-6 max-h-64 overflow-y-auto">
            <p>{currentStory.content}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <button 
            onClick={handleNext}
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg flex items-center gap-2"
          >
            {currentStory.button}
          </button>
          
          <button 
            onClick={handleClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg"
          >
            {currentStep === 4 ? 'End Story' : 'Close'}
          </button>
        </div>

        {/* Step indicator text */}
        <div className="text-center mt-4 text-sm text-amber-600">
          Chapter {currentStep} of 4
        </div>
      </div>
    </div>
  );
};

export default VikingBoatPopup;