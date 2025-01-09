import React, { useState, useEffect } from 'react';

const AnimationView = ({ onComplete }) => {
  const [showBoundless, setShowBoundless] = useState(true);
  const [showCircles, setShowCircles] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowBoundless(false);
      setTimeout(() => setShowCircles(true), 500);
    }, 7000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 16000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const colors = [
    { color: '#A4BEC8', delay: 0 },
    { color: '#FF462D', delay: 0.4 },
    { color: '#B4E5BE', delay: 0.8 },
    { color: '#3D3C3C', delay: 1.2 },
    { color: '#29707A', delay: 1.6 }
  ];

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden">
      {/* Stacked BOUNDLESS */}
      {showBoundless && (
        <div className="absolute transition-opacity duration-500 flex flex-col gap-4 items-center">
          {colors.map((style, index) => (
            <div
              key={index}
              className="text-7xl font-bold tracking-wider"
              style={{
                color: style.color,
                opacity: 0.8,
                animation: `pulse${index} 2s infinite ${style.delay}s`
              }}
            >
              BOUNDLESS OPPORTUNITIES
            </div>
          ))}
        </div>
      )}

      {/* Circles Animation */}
      {showCircles && (
        <div className="absolute">
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 800 400"
            width="800"
            height="400"
          >
            {/* Left Circle */}
            <circle
              r="100"
              fill="#29707A"
              opacity="0.8"
            >
              <animateMotion
                path="M200,200 C300,200 300,200 400,200"
                dur="2s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>

            {/* Right Circle */}
            <circle
              r="100"
              fill="#FF462D"
              opacity="0.8"
            >
              <animateMotion
                path="M600,200 C500,200 500,200 400,200"
                dur="2s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>

            {/* Flash Effect */}
            <circle
              cx="400"
              cy="200"
              r="0"
              fill="white"
            >
              <animate
                attributeName="r"
                values="0;30;0"
                dur="0.5s"
                begin="1.8s"
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                values="0;0.5;0"
                dur="0.5s"
                begin="1.8s"
                fill="freeze"
              />
            </circle>

            {/* Text */}
            <text
              x="400"
              y="350"
              textAnchor="middle"
              className="text-4xl"
              fill="#3D3C3C"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;1"
                dur="1s"
                begin="2s"
                fill="freeze"
              />
              Google EDB x Kyndryl
            </text>
          </svg>
        </div>
      )}

      <style jsx>{`
        ${colors.map((_, i) => `
          @keyframes pulse${i} {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `).join('\n')}

        .transition-opacity {
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AnimationView;