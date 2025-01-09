import React, { useState, useEffect, useMemo } from 'react';
import { X, Home, ArrowLeft } from 'lucide-react';
import { networkConfig } from '../config/networkConfig';
import ServiceBlueprint from './ServiceBlueprint';

const NetworkView = ({ onBackToSlides }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { nodes, links } = useMemo(() => {
    const centerX = 0;
    const centerY = 0;
    const industryRadius = 200;
    const customerRadius = 350;
    const nodes = [];
    const links = [];
    
    nodes.push({
      id: 'center',
      name: 'Google EDB Pilot',
      x: centerX,
      y: centerY,
      type: 'center'
    });

    Object.entries(networkConfig.industries).forEach(([industry, customers], index) => {
      const angle = (index * 2 * Math.PI) / Object.keys(networkConfig.industries).length;
      const industryX = centerX + Math.cos(angle) * industryRadius;
      const industryY = centerY + Math.sin(angle) * industryRadius;

      nodes.push({
        id: `industry-${industry}`,
        name: industry,
        x: industryX,
        y: industryY,
        type: 'industry'
      });

      links.push({
        id: `link-center-${industry}`,
        x1: centerX,
        y1: centerY,
        x2: industryX,
        y2: industryY,
        weight: customers.length
      });

      customers.forEach((customer, custIndex) => {
        const custCount = customers.length;
        const spreadAngle = Math.PI / 4;
        const customerAngle = angle + (custIndex - (custCount - 1) / 2) * (spreadAngle / custCount);
        const customerX = centerX + Math.cos(customerAngle) * customerRadius;
        const customerY = centerY + Math.sin(customerAngle) * customerRadius;

        nodes.push({
          id: `customer-${customer.name}`,
          name: customer.name,
          x: customerX,
          y: customerY,
          type: 'customer',
          data: customer
        });

        links.push({
          id: `link-${industry}-${customer.name}`,
          x1: industryX,
          y1: industryY,
          x2: customerX,
          y2: customerY,
          weight: 1
        });
      });
    });

    return { nodes, links };
  }, []);

  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden">
      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
      <button
          onClick={() => onBackToSlides('home')}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <Home className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={onBackToSlides}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Title */}
      <div className="absolute top-44 left-1/4 z-10 max-w-md">
            <div className="bg-[#E5F4F1] px-4 py-2 rounded-full mb-8">
        Mapping GenAI Enablers Across Relevant Experiences
      </div>
      </div>
      {/* Network Visualization */}
      <svg className="w-full h-full">
        <g transform={`translate(${windowDimensions.width/2 + transform.x}, ${windowDimensions.height/2 + transform.y}) scale(${transform.scale})`}>
          {links.map(link => (
            <path
              key={link.id}
              d={`M${link.x1},${link.y1} Q${(link.x1 + link.x2)/2 + 50},${(link.y1 + link.y2)/2} ${link.x2},${link.y2}`}
              stroke={link.x1 === 0 ? networkConfig.colors.blue : networkConfig.colors.green}
              strokeWidth={link.weight * 2}
              strokeOpacity={0.2}
              fill="none"
            />
          ))}
          
          {nodes.map(node => (
            <g
              key={node.id}
              transform={`translate(${node.x},${node.y})`}
              onClick={() => node.type === 'customer' && setSelectedNode(node.data)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {node.type === 'customer' && (
                <circle
                  r={15}
                  className={`${hoveredNode === node.id ? 'animate-pulse' : ''}`}
                  fill={networkConfig.colors.red}
                  fillOpacity={0.2}
                />
              )}
              
              <circle
                r={node.type === 'industry' ? 30 : node.type === 'center' ? 40 : 15}
                fill={node.type === 'center' ? networkConfig.colors.blue : 
                      node.type === 'industry' ? networkConfig.colors.green : 
                      networkConfig.colors.red}
                opacity={hoveredNode === node.id ? 1 : 0.8}
                stroke="white"
                strokeWidth={2}
              />
              
              <text
                dy={node.type === 'industry' ? 50 : 30}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                {node.name}
              </text>
            </g>
          ))}
        </g>
      </svg>

      {/* Modal */}
      {selectedNode && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedNode(null)}>
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl m-4 h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
        <div className="flex items-center gap-4 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-800">{selectedNode.name}</h2>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
            <span className="text-sm text-blue-600 font-medium">GCP Monthly Cost:</span>
            <span className="text-blue-700 font-bold">${selectedNode.gcpCost} USD</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full whitespace-nowrap">
            <span className="text-sm text-green-600 font-medium">Phase 02:</span>
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-green-600" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full whitespace-nowrap">
            <span className="text-sm text-teal-600 font-medium">Users:</span>
            <div className="flex gap-1.5">
              {selectedNode.users.map((user, index) => (
                <span key={index} className="text-sm text-teal-700">
                  {user}{index < selectedNode.users.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => setSelectedNode(null)} className="p-2 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-lg mb-2">Use Case</h4>
                  <p className="text-gray-600">{selectedNode.useCase}</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">GenAI Aspiration</h4>
                  <p className="text-gray-600">{selectedNode.aspiration}</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Current Pains</h4>
                  <p className="text-gray-600">{selectedNode.pains}</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">GenAI Opportunity</h4>
                  <p className="text-gray-600">{selectedNode.opportunity}</p>
                </div>
              </div>
              <ServiceBlueprint customerName={selectedNode.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkView;