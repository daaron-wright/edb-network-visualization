import React, { useRef, useEffect, useState } from 'react';

const ServiceBlueprint = ({ customerName = "EPOS" }) => {
  const [pathPoints, setPathPoints] = useState([]);
  const [columnPositions, setColumnPositions] = useState([]);
  const touchpointRefs = useRef([]);
  const containerRef = useRef(null);

  const blueprintConfig = {
    "Nalagenetics": {
      stages: [
        "Onboarding",
        "Research Setup",
        "Data Analysis",
        "Reporting",
        "Insights Generation"
      ],
      genAiExperience: [
        "Intelligent literature search",
        "Automated parameter optimization",
        "Real-time data analysis",
        "Automated report generation",
        "AI-driven research recommendations"
      ],
      currentPains: [
        "Time-intensive manual processes",
        "Lack of real-time updates",
        "Disconnected systems"
      ],
    },
    "Mesh Bio": {
      stages: [
        "Onboarding",
        "Lab Configuration",
        "Analysis Process",
        "Result Generation",
        "Clinical Insights"
      ],
      genAiExperience: [
        "Automated SOP setup",
        "Smart equipment configuration",
        "Real-time result validation",
        "Automated report generation",
        "AI-driven clinical recommendations"
      ],
      currentPains: [
        "Manual curation",
        "Slow configuration updates",
        "Inefficiencies in guideline incorporation"
      ]
    },
    "Headquarters XYZ": {
      stages: [
        "Onboarding",
        "Compliance Setup",
        "Transaction Monitoring",
        "Risk Assessment",
        "Reporting"
      ],
      genAiExperience: [
        "Automated compliance parameter setup",
        "Smart rule generation",
        "Real-time transaction analysis",
        "AI-driven risk scoring",
        "Automated reporting"
      ],
      currentPains: [
        "Manual compliance setup",
        "Fragmented systems",
        "Delayed insights"
      ]
    },
    "Endowus": {
      stages: [
        "Onboarding",
        "Portfolio Setup",
        "Investment Management",
        "Performance Monitoring",
        "Client Reporting"
      ],
      genAiExperience: [
        "Smart client profiling",
        "AI-driven portfolio optimization",
        "Real-time portfolio rebalancing",
        "Automated analytics",
        "Personalized insights"
      ],
      currentPains: [
        "Operational inefficiencies",
        "Static reports",
        "Fragmented data sources"
      ]
    },
    "Frasers": {
      stages: [
        "Onboarding",
        "Document Setup",
        "Translation Management",
        "Policy Distribution",
        "Compliance Tracking"
      ],
      genAiExperience: [
        "Intelligent document search",
        "Multilingual translation",
        "Automated compliance monitoring",
        "Centralized SOP management"
      ],
      currentPains: [
        "Language barriers",
        "Decentralized documents",
        "Time-intensive updates"
      ]
    },
    "Quest Hyphen Inc.": {
      stages: [
        "Onboarding",
        "Task Definition",
        "Worker Assignment",
        "Progress Tracking",
        "Quality Assurance"
      ],
      genAiExperience: [
        "AI-guided task creation",
        "Real-time task matching",
        "Automated dispute resolution",
        "Actionable reporting"
      ],
      currentPains: [
        "Ambiguous instructions",
        "Inefficient matching",
        "Manual resolutions"
      ]
    },
    "Woh Hup": {
      stages: [
        "Onboarding",
        "Contract Setup",
        "Compliance Management",
        "Performance Monitoring",
        "Risk Assessment"
      ],
      genAiExperience: [
        "Automated compliance checks",
        "Predictive analytics",
        "Centralized dashboards",
        "AI-guided approvals"
      ],
      currentPains: [
        "Manual contract workflows",
        "Regulatory complexities",
        "Repetitive processes"
      ]
    },
    "T&Y Superport": {
      stages: [
        "Onboarding",
        "Scanning Setup",
        "Cargo Processing",
        "Compliance Checking",
        "Performance Analysis"
      ],
      genAiExperience: [
        "Automated x-ray analysis",
        "Real-time compliance monitoring",
        "Optimized cargo sorting",
        "Predictive operational insights"
      ],
      currentPains: [
        "Manual scans",
        "Disjointed workflows",
        "Resource bottlenecks"
      ]
    },
    "EPOS": {
      stages: [
        "Onboarding",
        "Initialize Sales",
        "Daily Operations",
        "Customer Relations",
        "Insights"
      ],
      genAiExperience: [
        "Personalized campaigns",
        "Real-time performance adjustments",
        "Loyalty outreach",
        "Predictive analytics",
        "Reports and Insights"
      ],
      currentPains: [
        "Generic campaigns",
        "Disconnected systems",
        "Limited real-time adaptability"
      ]
    }
  };

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const points = touchpointRefs.current
        .filter(ref => ref)
        .map(ref => {
          const circle = ref.querySelector('.touchpoint-circle');
          if (!circle) return null;
          const rect = circle.getBoundingClientRect();
          return {
            x: rect.left + (rect.width / 2) - containerRect.left,
            y: rect.top + (rect.height / 2) - containerRect.top
          };
        })
        .filter(Boolean);

      const columns = touchpointRefs.current
        .filter(ref => ref)
        .map(ref => {
          if (!ref) return null;
          const rect = ref.getBoundingClientRect();
          return rect.left + (rect.width / 2) - containerRect.left;
        })
        .filter(Boolean);

      if (points.length > 0) {
        setPathPoints(points);
        setColumnPositions(columns);
      }
    };

    setTimeout(calculatePositions, 100);

    const observer = new ResizeObserver(calculatePositions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('resize', calculatePositions);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', calculatePositions);
    };
  }, [customerName]);

  const generatePath = (points) => {
    if (points.length < 2) return '';
    
    let path = `M ${points[0].x},${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const current = points[i];
      const previous = points[i - 1];
      
      const xDist = current.x - previous.x;
      
      const curveStrength = 0.15;
      const verticalBias = 0;
      
      const cp1x = previous.x + (xDist * curveStrength);
      const cp2x = current.x - (xDist * curveStrength);
      
      const cp1y = previous.y - verticalBias;
      const cp2y = current.y - verticalBias;
      
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${current.x},${current.y}`;
    }
    
    return path;
  };

  const getVerticalPosition = (index) => {
    const positions = {
      0: { pos: 10, offset: -5 },
      1: { pos: 10, offset: -5 },
      2: { pos: 30, offset: 0 },
      3: { pos: 20, offset: 10 },
      4: { pos: 10, offset: 5 }
    };

    const { pos, offset } = positions[index] || { pos: 5, offset: 0 };
    return `${pos + offset}%`;
  };

  const companyData = blueprintConfig[customerName] || blueprintConfig["EPOS"];
  const totalTouchpoints = companyData.genAiExperience.length;

  return (
    <div className="w-full overflow-x-auto bg-white p-8" ref={containerRef}>
      <div className="min-w-[1200px]">
        <div className="grid grid-cols-5 gap-4 mb-8">
          {companyData.stages.map((stage, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-gray-800">{stage}</h3>
            </div>
          ))}
        </div>

        <div className="relative h-72 mb-16">
          <svg 
            className="absolute inset-0 w-full h-full" 
            style={{ pointerEvents: 'none', zIndex: 1 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>

            {/* Vertical dashed lines */}
            {columnPositions.map((x, index) => (
              <line
                key={`vertical-${index}`}
                x1={x}
                y1="0"
                x2={x}
                y2="100%"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.1"
              />
            ))}

            {pathPoints.length > 0 && (
              <path
                d={generatePath(pathPoints)}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>

          <div className="grid grid-cols-5 gap-4 h-full relative">
            {companyData.genAiExperience.map((touchpoint, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-start h-full relative"
                ref={el => touchpointRefs.current[index] = el}
              >
                <div
                  className="absolute transition-all duration-300"
                  style={{ 
                    top: getVerticalPosition(index),
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  <div className="touchpoint-circle w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-600 
                                flex items-center justify-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600"></div>
                  </div>
                  <p className="text-sm text-teal-700 max-w-[200px] text-center">
                    {touchpoint}
                  </p>
                  <span className="text-xs text-yellow-600 mt-1 block text-center">
                    {index === Math.floor(totalTouchpoints / 2) ? 'High Impact User Experiece' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-red-300 via-red-400 to-red-300"></div>
          <div className="grid grid-cols-5 gap-4">
            {companyData.currentPains.map((pain, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-50 border-2 border-red-400 flex items-center justify-center mb-3 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                </div>
                <p className="text-sm text-red-500 max-w-[200px] text-center">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-600"></div>
            <span>High Impact GenAI Enabler</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-600 opacity-60"></div>
            <span>Medium Impact GenAI Enabler</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span>Current Pain Point</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlueprint;