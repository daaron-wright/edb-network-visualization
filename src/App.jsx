import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import AnimationView from './components/AnimationView';
import NetworkView from './components/NetworkView';
import { slides } from './components/SlideContent';

const App = () => {
  const [view, setView] = useState('animation');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCompleteAnimation = () => {
    setView('slides');
  };

  const handleShowNetwork = () => {
    setView('network');
  };

  const handleReturnToSlides = (type = 'back') => {
    if (type === 'home') {
      setView('animation');
      setCurrentSlide(0);
    } else {
      setView('slides');
      setCurrentSlide(currentSlide);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === slides(handleShowNetwork).length - 1) {
      handleShowNetwork();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const currentSlides = slides(handleShowNetwork);

  return (
    <div className="min-h-screen bg-white">
      {view === 'animation' ? (
        <AnimationView onComplete={handleCompleteAnimation} />
      ) : view === 'network' ? (
        <NetworkView onBackToSlides={handleReturnToSlides} />
      ) : (
        <div className="h-screen">
          {currentSlides[currentSlide]}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={() => handleReturnToSlides('home')}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <Home className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;