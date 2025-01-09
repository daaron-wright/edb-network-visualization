import React, { useState } from 'react';

const UseCasePoint = ({ x, y, color, label, onSelect }) => {
  return (
    <div 
      className={`absolute w-6 h-6 rounded-full ${color} cursor-pointer
        hover:ring-4 ring-offset-2 ring-opacity-50 transition-all duration-200`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: 'translate(-50%, -50%)' 
      }}
      onClick={() => onSelect(label)}
    />
  );
};

const useCaseDetails = {
  "Automated Document Validation": {
    value: "AI-driven compliance advisory improves query resolution speed by 75%, reducing human error in compliance monitoring",
    impact: "Enhances customer experience, boosts compliance efficiency, and offers future monetization opportunities"
  },
  "X-Ray Image Analysis": {
    value: "Automated x-ray analysis improves anomaly detection by 40-50%, reduces processing times by 50-60%, and cuts labor costs by 20-30%",
    impact: "Optimizes cargo handling and compliance with enhanced accuracy and real-time operational insights"
  },
  "Intelligence Search and Filtering": {
    value: "Intelligent search reduces compliance document retrieval time by 40-60% and improves multilingual accessibility by 30-50%",
    impact: "Enhances global workforce enablement and regulatory adherence with AI-driven SOP management"
  },
  "Literature Screening & Summarization": {
    value: "Automating literature search, data extraction, and KB management improves operational efficiency by 40% and speeds up data curation by 20-30%",
    impact: "Reduces manual overhead, enhances real-time updates, and accelerates decision-making in medical research"
  },
  "Smart Task Instructions": {
    value: "Task automation cuts manual efforts by 70%, dispute resolution time by 40%, and improves task acceptance rates by 15%",
    impact: "Improves user satisfaction, trust, and platform efficiency with automated matching and dispute handling"
  },
  "Task Matching Optimization": {
    value: "Improved task allocation accuracy by 40%, with reduced matching time by 70%, boosting retention by 15%",
    impact: "Optimizes task workflows, enhances platform trust, and reduces operational bottlenecks"
  },
  "Contract Advisor Chatbot": {
    value: "Contract advisor chatbot reduces query resolution time by 75%, cutting manual errors by 50%",
    impact: "Enhances contract compliance and operational efficiency with predictive analytics and centralized dashboards"
  }
};

const SlideContent = ({ children }) => (
  <div className="max-w-7xl mx-auto px-8 py-12 h-full flex items-center">
    <div className="w-full">{children}</div>
  </div>
);

const NetworkView = ({ handleShowNetwork }) => {
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  return (
    <div className="flex flex-col items-start">
      <div className="bg-[#E5F4F1] px-4 py-2 rounded-full mb-8">
        GenAI Business Value Across Participating Customers
      </div>

      <div className="w-full flex gap-8">
        {/* Matrix Area */}
        <div className="flex-1">
          <div className="relative h-[635px] w-full bg-white rounded-lg shadow-lg p-8">
            <div className="absolute -rotate-90 left-[0px] top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">
              Value
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 font-medium">
              Feasibility
            </div>

            <div className="h-full w-full relative">
              <div className="absolute top-[5%] right-[0%] w-[200px] h-[200px] border-2 border-[#FFFFF] rounded-full"></div>
              
              {/* Clear Winners (A/B) - Top Right */}
              <UseCasePoint x="85" y="15" color="bg-[#4CDD84]" label="Automated Document Validation" onSelect={setSelectedUseCase} />
              <UseCasePoint x="90" y="25" color="bg-[#4CDD84]" label="X-Ray Image Analysis" onSelect={setSelectedUseCase} />
              <UseCasePoint x="95" y="20" color="bg-[#4CDD84]" label="Intelligence Search and Filtering" onSelect={setSelectedUseCase} />
              <UseCasePoint x="88" y="30" color="bg-[#4CDD84]" label="Literature Screening & Summarization" onSelect={setSelectedUseCase} />
              <UseCasePoint x="82" y="18" color="bg-[#4CDD84]" label="Smart Task Instructions" onSelect={setSelectedUseCase} />
              <UseCasePoint x="87" y="35" color="bg-[#4CDD84]" label="Task Matching Optimization" onSelect={setSelectedUseCase} />
              <UseCasePoint x="92" y="28" color="bg-[#4CDD84]" label="Contract Advisor Chatbot" onSelect={setSelectedUseCase} />

              {/* High Value, Lower Feasibility (F) - Top Left */}
              <UseCasePoint x="15" y="15" color="bg-[#2B707A]" label="Real-time Compliance Monitoring" onSelect={setSelectedUseCase} />
              <UseCasePoint x="10" y="25" color="bg-[#2B707A]" label="Topic Identification & Real-time monitoring" onSelect={setSelectedUseCase} />
              <UseCasePoint x="20" y="20" color="bg-[#2B707A]" label="Propensity Modeling for Task Success" onSelect={setSelectedUseCase} />
              <UseCasePoint x="12" y="30" color="bg-[#2B707A]" label="Lab Report - Text Extraction" onSelect={setSelectedUseCase} />
              <UseCasePoint x="18" y="35" color="bg-[#2B707A]" label="Hardware Failure IoT Prediction" onSelect={setSelectedUseCase} />

              {/* Medium Value Cases (C/D) - Middle */}
              <UseCasePoint x="45" y="45" color="bg-[#E5F4F1]" label="Dispute Resolution Assistance" onSelect={setSelectedUseCase} />
              <UseCasePoint x="55" y="40" color="bg-[#E5F4F1]" label="Intelligent Sorting and Allocation" onSelect={setSelectedUseCase} />
              <UseCasePoint x="50" y="55" color="bg-[#E5F4F1]" label="Multilingual Translation" onSelect={setSelectedUseCase} />
              <UseCasePoint x="40" y="50" color="bg-[#E5F4F1]" label="Predictive Analytics for Insights" onSelect={setSelectedUseCase} />
              <UseCasePoint x="60" y="45" color="bg-[#E5F4F1]" label="Dynamic Feedback Generation" onSelect={setSelectedUseCase} />

              {/* Lower Value Cases (E) - Bottom Left */}
              <UseCasePoint x="25" y="75" color="bg-[#F04935]" label="Content Moderation and Quality Validation" onSelect={setSelectedUseCase} />
              <UseCasePoint x="15" y="85" color="bg-[#F04935]" label="Automated reference tracking" onSelect={setSelectedUseCase} />
              <UseCasePoint x="30" y="80" color="bg-[#F04935]" label="Employee Feedback Analysis" onSelect={setSelectedUseCase} />
              <UseCasePoint x="20" y="90" color="bg-[#F04935]" label="Lab Report - Config File generation" onSelect={setSelectedUseCase} />
              <UseCasePoint x="25" y="85" color="bg-[#F04935]" label="Dynamic Reporting and Insights" onSelect={setSelectedUseCase} />
            </div>
          </div>
        </div>

        {/* Executive Summary Section - Now on the right */}
        <div className="w-[480px] space-y-6 pt-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#2B707A] mb-4">Process Improvement and Efficiency Gains</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Automation of repetitive and manual processes across domains reduces time and labor-intensive tasks by <span className="font-semibold">40-70%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Real-time data processing and integration streamline workflows, eliminate bottlenecks, and enhance operational scalability</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#2B707A] mb-4">Enhanced Customer/End-User Experience</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Personalized, context-aware tools empower users, making interactions faster, more accurate, and seamless</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Enhanced accessibility ensures relevance and usability for diverse user bases</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#2B707A] mb-4">Improved Retention and Loyalty</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Tailored recommendations and personalized engagements reduce churn by <span className="font-semibold">15-25%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F04935] font-bold">→</span>
                <span>Proactive solutions align with user needs and improve long-term loyalty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {selectedUseCase && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedUseCase(null)}
        >
          <div 
            className="bg-white p-8 rounded-lg max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#2B707A]">{selectedUseCase}</h3>
            
            {useCaseDetails[selectedUseCase] && (
              <div className="space-y-6">
                <div className="bg-[#F2F1EF] p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#2B707A] mb-2">Value</h4>
                  <p className="text-gray-700">{useCaseDetails[selectedUseCase].value}</p>
                </div>
                <div className="bg-[#F2F1EF] p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#2B707A] mb-2">Impact</h4>
                  <p className="text-gray-700">{useCaseDetails[selectedUseCase].impact}</p>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setSelectedUseCase(null)}
              className="mt-6 px-4 py-2 bg-[#F04935] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-12 flex justify-center w-full">
        <button 
          onClick={handleShowNetwork}
          className="bg-[#F04935] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#E5F4F1] hover:text-[#2B707A] transition-colors"
        >
Explore the Network of Customers and Their GenAI Use-Cases
</button>
      </div>
    </div>
  );
};

export const slides = (handleShowNetwork) => [
  <SlideContent key="cost">
    <div className="flex flex-col items-start">
      <div className="bg-[#E5F4F1] px-4 py-2 rounded-full mb-8">
        Phase 01 Execution
      </div>
      <div className="grid grid-cols-2 gap-16 w-full">
        <div>
          <h1 className="text-6xl font-light mb-8">Together with Google EDB</h1>
          <div className="space-y-4 mb-8 text-xl text-gray-600">
            <p>
              We've engaged <span className="text-red-500 font-semibold">10 customers</span> across 
              <span className="text-red-500 font-semibold"> 6 industries, all with unique Singaporean contexts</span>. This has uncovered 
              <span className="text-red-500 font-semibold"> 7 specific GenAI use-cases</span>, revolutionizing the way each customer's business operates and thrives.
            </p>
            <p>
              Together, we're leveraging the power of 
              <span className="font-semibold"> Google Cloud Platform (GCP)</span> and
              <span className="font-semibold"> GenAI solutions</span> to deliver measurable business and experiencal impact.
            </p>
          </div>
          <div className="text-gray-600 text-sm mb-2">
            This work it being executed at little investment from the customer. Average costing of MVP development for each customer during the next 4 months is...
          </div>
          <div className="text-8xl font-light text-red-500">
            $342
            <span className="text-4xl ml-4">USD</span>
            <div className="text-2xl text-gray-600 mt-2">/ month</div>
            <bk>
              </bk>
            <div className="text-gray-600 text-sm mb-2">*Made Possible in partnership with the Government of Singapore
              </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-medium mb-6">Phase 02 Outlook</h2>
          <div className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg mb-6">
<div className="text-center">
              <div className="text-3xl font-bold text-[#29707A]">10/10</div>
              <div className="text-sm text-gray-600">Pilot Participants</div>
            </div>
            <div className="text-2xl text-[#4CDD84]">→</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4CDD84]">100%</div>
              <div className="text-sm text-gray-600">Phase 02 Commitment</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Development Budget</span>
              <span className="font-medium">SGD 100,000 / customer</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Investment</span>
              <span className="font-bold text-[#4CDD84]">SGD 1,000,000</span>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                ✓ 4-month MVP development timeline
              </div>
              <div className="text-sm text-gray-600">
                ✓ 100% customer retention from pilot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideContent>,

  <SlideContent key="journey">
    <div className="flex flex-col items-start">
      <div className="bg-[#E5F4F1] px-4 py-2 rounded-full mb-8">
        Journey to Strategically Prioritizing GenAI Use-Cases
      </div>
      <div className="grid grid-cols-5 gap-8">
        {/* Step 01 */}
        <div className="space-y-4">
          <div className="text-8xl font-light text-red-500" style={{ WebkitTextStroke: '1px'}}>
            01
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white">?</div>
              <span className="text-xl font-medium text-[#29707A]">GenAI Explorer</span>
            </div>
            <div className="text-2xl font-light text-[#FFFFF] mt-2">
              Define
            </div>
            <div className="text-gray-600 mt-2">
              Understand current state process and discover strategic areas for Gen AI enhancement / adoption
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="space-y-4">
          <div className="text-8xl font-light text-red-500" style={{ WebkitTextStroke: '1px'}}>
            02
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white">⊕</div>
              <span className="text-xl font-medium text-[#29707A]">GenAI Blueprint</span>
            </div>
            <div className="text-2xl font-light text-[#FFFFF] mt-2">
              Understand
            </div>
            <div className="text-gray-600 mt-2">
              Analyze the business value and feasibility of the Gen AI use case
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="space-y-4">
          <div className="text-8xl font-light text-red-500" style={{ WebkitTextStroke: '1px'}}>
            03
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white">◎</div>
              <div>
                <span className="text-xl font-medium text-[#29707A]">GenAI Developer</span> 
              </div>
            </div>
            <div className="text-2xl font-light text-[#FFFFF] mt-2">
              Ideate
            </div>
            <div className="text-gray-600 mt-2">
              Recommendation / plan of action on implementing the MVP solution
            </div>
            <div className="text-red-400 mt-2">* We are here</div>
          </div>
        </div>

        {/* Step 04 */}
        <div className="space-y-4">
          <div className="text-8xl font-light text-red-500" style={{ WebkitTextStroke: '1px'}}>
            04
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white">╳</div>
              <span className="text-xl font-medium text-[#29707A]">GenAI Launch</span>
            </div>
            <div className="text-2xl font-light text-[#FFFFF] mt-2">
              Design and Develop
            </div>
            <div className="text-gray-600 mt-2">
              Develop a blueprint for a CoE that supports Gen AI adoption across the organization
            </div>
          </div>
        </div>

        {/* Step 05 */}
        <div className="space-y-4">
          <div className="text-8xl font-light text-red-500" style={{ WebkitTextStroke: '1px'}}>
            05
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white">◐</div>
              <span className="text-xl font-medium text-[#29707A]">Measure and Grow</span>
            </div>
            <div className="text-2xl font-light text-[#FFFFF] mt-2">
              Scaling via CoE
            </div>
            <div className="text-gray-600 mt-2">
              Monitor and optimize the implemented solutions for continuous improvement
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideContent>,

  <SlideContent key="network">
    <NetworkView handleShowNetwork={handleShowNetwork} />
  </SlideContent>
];

export default SlideContent;