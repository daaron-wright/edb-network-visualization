const MatrixCategories = ({ onShowNetwork }) => (
    <div className="grid grid-cols-2 gap-16 w-full">
      <div className="relative h-[600px] bg-white rounded-lg shadow-lg p-6">
        <div className="absolute inset-0 p-12">
          {/* Axis Labels */}
          <div className="absolute -left-6 top-1/2 -rotate-90 text-gray-600 font-medium">Business Value ↑</div>
          <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-gray-600 font-medium">Feasibility →</div>
          
          {/* Quadrant Labels */}
          <div className="absolute top-4 right-4 w-48 border-2 border-green-300 rounded-lg p-4 bg-green-50/80">
            <div className="text-sm font-medium text-green-700">Clear Winners</div>
            <div className="text-xs text-green-600 mt-1">High Value, High Feasibility</div>
          </div>
  
          {/* Matrix Grid with categorized points */}
          <div className="absolute inset-8 border-2 border-dashed border-gray-200">
            {/* Clear Winners - Top Right */}
            <div className="absolute top-[20%] right-[20%] space-y-4">
              <MatrixPoint x={75} y={25} label="Contract Advisor Chatbot" color="green" letter="A" />
              <MatrixPoint x={85} y={20} label="Customer Support SOP Chatbot" color="green" letter="B" />
              <MatrixPoint x={80} y={30} label="Smart Task Instructions" color="green" letter="C" />
            </div>
  
            {/* High Impact - Middle Right */}
            <div className="absolute top-[40%] right-[30%] space-y-4">
              <MatrixPoint x={60} y={30} label="X-Ray Image Analysis" color="blue" letter="D" />
              <MatrixPoint x={55} y={35} label="Automated Document Validation" color="blue" letter="E" />
              <MatrixPoint x={65} y={40} label="Task Matching Optimization" color="blue" letter="F" />
            </div>
  
            {/* Medium Value - Bottom Right */}
            <div className="absolute bottom-[30%] right-[25%] space-y-4">
              <MatrixPoint x={70} y={50} label="Dispute Resolution Assistance" color="yellow" letter="G" />
              <MatrixPoint x={75} y={55} label="Multilingual Translation" color="yellow" letter="H" />
              <MatrixPoint x={65} y={60} label="Sentiment Analysis" color="yellow" letter="I" />
            </div>
  
            {/* Strategic - Top Left */}
            <div className="absolute top-[30%] left-[20%] space-y-4">
              <MatrixPoint x={30} y={25} label="Digital Financial Advisor" color="purple" letter="J" />
              <MatrixPoint x={35} y={30} label="Literature Screening & Summarization" color="purple" letter="K" />
              <MatrixPoint x={40} y={35} label="Config Rule Generator" color="purple" letter="L" />
            </div>
          </div>
        </div>
      </div>
  
      {/* Legend and Categories */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-medium mb-6">Use Case Categories</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-green-600 font-medium mb-4 flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Clear Winners (A-C)
              </h4>
              <ul className="space-y-2 text-sm pl-6">
                <li>A - Contract Advisor Chatbot</li>
                <li>B - Customer Support SOP Chatbot</li>
                <li>C - Smart Task Instructions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-600 font-medium mb-4 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                High Impact (D-F)
              </h4>
              <ul className="space-y-2 text-sm pl-6">
                <li>D - X-Ray Image Analysis</li>
                <li>E - Automated Document Validation</li>
                <li>F - Task Matching Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-600 font-medium mb-4 flex items-center">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                Medium Value (G-I)
              </h4>
              <ul className="space-y-2 text-sm pl-6">
                <li>G - Dispute Resolution Assistance</li>
                <li>H - Multilingual Translation</li>
                <li>I - Sentiment Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-600 font-medium mb-4 flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                Strategic Initiatives (J-L)
              </h4>
              <ul className="space-y-2 text-sm pl-6">
                <li>J - Digital Financial Advisor</li>
                <li>K - Literature Screening & Summarization</li>
                <li>L - Config Rule Generator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );