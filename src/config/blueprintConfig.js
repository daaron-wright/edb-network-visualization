// blueprintConfig.js
export const blueprintConfig = {
    "EPOS": {
      stages: [
        "Onboarding",
        "Initialize Sales",
        "Daily Operations and Sales Recording",
        "Customer Relationship Management",
        "Insights and Decision-Making"
      ],
      roles: {
        primary: "Marketing Strategist",
        secondary: ["Property Manager", "Corporate Compliance Officer"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Upload customer and sales data, define initial campaign goals"
        },
        {
          stage: "Initialize Sales",
          action: "Design and launch sales campaigns"
        },
        {
          stage: "Daily Operations",
          actions: [
            "Promotes active offers during checkout",
            "Track sales transactions and adjust marketing strategies"
          ]
        },
        {
          stage: "Customer Relationship Management",
          action: "Data is retained and reviewed for customer satisfaction and retention metrics"
        },
        {
          stage: "Insights",
          action: "Evaluate campaign growth, profitability trends, and seasonality data for product catalog"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Analyze data to segment customers and suggest campaign strategies",
          icon: "chart"
        },
        {
          stage: "Initialize Sales",
          feature: "Generate and optimize personalized promotions",
          icon: "users"
        },
        {
          stage: "Daily Operations",
          feature: "Provide performance updates and auto-adjust campaigns per product catalog",
          icon: "store"
        },
        {
          stage: "Customer Relationship Management",
          feature: "Suggest loyalty offers and personalized outreach strategies",
          icon: "shopping-bag"
        },
        {
          stage: "Insights",
          feature: "Persistent, interactive reports",
          icon: "analytics"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Limited data integration with no consolidated information for customer segmentation"
        },
        {
          stage: "Initialize Sales",
          pains: [
            "Campaign creation is time-consuming, relies on manual data-entry",
            "Existing tools lack automation, leading to generic campaigns"
          ]
        },
        {
          stage: "Daily Operations",
          pains: [
            "Campaigns cannot be adjusted dynamically due to lack of real-time performance",
            "Manual repetitive tasks, like inventory tracking, waste time"
          ]
        },
        {
          stage: "Customer Relationship Management",
          pain: "CRM and POS systems are disconnected, leading to fragmented insights"
        },
        {
          stage: "Insights",
          pains: [
            "Poor reporting capabilities to analyze campaign success and ROI",
            "Generic promotional offers fail to engage seasonality and high-value customers"
          ]
        }
      ]
    },
  
    "Nalagenetics": {
      stages: [
        "Onboarding",
        "Research Setup",
        "Data Analysis",
        "Reporting",
        "Insights Generation"
      ],
      roles: {
        primary: "Research Scientist",
        secondary: ["Lab Technician", "Data Analyst"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Upload research parameters and literature database access"
        },
        {
          stage: "Research Setup",
          action: "Configure search criteria and analysis parameters"
        },
        {
          stage: "Data Analysis",
          action: "Process genomic data and literature findings"
        },
        {
          stage: "Reporting",
          action: "Compile research findings and generate reports"
        },
        {
          stage: "Insights",
          action: "Analyze patterns and generate research recommendations"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Intelligent literature search and categorization",
          icon: "search"
        },
        {
          stage: "Research Setup",
          feature: "Automated parameter optimization",
          icon: "settings"
        },
        {
          stage: "Data Analysis",
          feature: "Real-time data analysis and pattern recognition",
          icon: "database"
        },
        {
          stage: "Reporting",
          feature: "Automated report generation with key findings",
          icon: "file-text"
        },
        {
          stage: "Insights",
          feature: "AI-driven research recommendations",
          icon: "bulb"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual literature search process is time-consuming"
        },
        {
          stage: "Research Setup",
          pain: "Complex parameter configuration requires expert knowledge"
        },
        {
          stage: "Data Analysis",
          pain: "Manual data processing leads to delays"
        },
        {
          stage: "Reporting",
          pain: "Report generation requires extensive manual work"
        },
        {
          stage: "Insights",
          pain: "Limited ability to identify patterns across studies"
        }
      ]
    },
  
    "Mesh Bio": {
      stages: [
        "Onboarding",
        "Lab Configuration",
        "Analysis Process",
        "Result Generation",
        "Clinical Insights"
      ],
      roles: {
        primary: "Lab Manager",
        secondary: ["Clinical Technician", "Healthcare Provider"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Set up lab protocols and testing parameters"
        },
        {
          stage: "Lab Configuration",
          action: "Configure testing equipment and procedures"
        },
        {
          stage: "Analysis Process",
          action: "Process clinical samples and record results"
        },
        {
          stage: "Result Generation",
          action: "Generate clinical reports and recommendations"
        },
        {
          stage: "Clinical Insights",
          action: "Analyze trends and patient outcomes"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Automated SOP retrieval and setup",
          icon: "clipboard"
        },
        {
          stage: "Lab Configuration",
          feature: "Smart equipment configuration",
          icon: "settings"
        },
        {
          stage: "Analysis Process",
          feature: "Real-time result validation",
          icon: "check-circle"
        },
        {
          stage: "Result Generation",
          feature: "Automated clinical report generation",
          icon: "file-text"
        },
        {
          stage: "Clinical Insights",
          feature: "AI-driven clinical recommendations",
          icon: "activity"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual SOP retrieval and setup process"
        },
        {
          stage: "Lab Configuration",
          pain: "Complex manual configuration requirements"
        },
        {
          stage: "Analysis Process",
          pain: "Limited real-time validation capabilities"
        },
        {
          stage: "Result Generation",
          pain: "Time-consuming manual report creation"
        },
        {
          stage: "Clinical Insights",
          pain: "Limited pattern recognition across patient data"
        }
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
      roles: {
        primary: "Compliance Officer",
        secondary: ["Risk Analyst", "Financial Manager"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Configure compliance parameters and risk thresholds"
        },
        {
          stage: "Compliance Setup",
          action: "Set up monitoring rules and alerts"
        },
        {
          stage: "Transaction Monitoring",
          action: "Monitor and validate crypto transactions"
        },
        {
          stage: "Risk Assessment",
          action: "Evaluate transaction risks and compliance"
        },
        {
          stage: "Reporting",
          action: "Generate compliance reports and documentation"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Automated compliance parameter configuration",
          icon: "shield"
        },
        {
          stage: "Compliance Setup",
          feature: "Smart rule generation and optimization",
          icon: "git-branch"
        },
        {
          stage: "Transaction Monitoring",
          feature: "Real-time transaction analysis",
          icon: "activity"
        },
        {
          stage: "Risk Assessment",
          feature: "AI-driven risk scoring",
          icon: "alert-triangle"
        },
        {
          stage: "Reporting",
          feature: "Automated compliance reporting",
          icon: "file-text"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual compliance setup process"
        },
        {
          stage: "Compliance Setup",
          pain: "Complex rule configuration requirements"
        },
        {
          stage: "Transaction Monitoring",
          pain: "Limited real-time monitoring capabilities"
        },
        {
          stage: "Risk Assessment",
          pain: "Manual risk evaluation process"
        },
        {
          stage: "Reporting",
          pain: "Time-consuming compliance report generation"
        }
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
      roles: {
        primary: "Financial Advisor",
        secondary: ["Portfolio Manager", "Client Relations"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Collect client information and investment goals"
        },
        {
          stage: "Portfolio Setup",
          action: "Configure investment strategies and allocations"
        },
        {
          stage: "Investment Management",
          action: "Monitor and adjust investment portfolios"
        },
        {
          stage: "Performance Monitoring",
          action: "Track portfolio performance and metrics"
        },
        {
          stage: "Client Reporting",
          action: "Generate client reports and recommendations"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Smart client profiling and goal setting",
          icon: "user"
        },
        {
          stage: "Portfolio Setup",
          feature: "AI-driven portfolio optimization",
          icon: "trending-up"
        },
        {
          stage: "Investment Management",
          feature: "Real-time portfolio rebalancing",
          icon: "refresh-cw"
        },
        {
          stage: "Performance Monitoring",
          feature: "Automated performance analytics",
          icon: "bar-chart"
        },
        {
          stage: "Client Reporting",
          feature: "Personalized client insights",
          icon: "file-text"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual client profiling process"
        },
        {
          stage: "Portfolio Setup",
          pain: "Time-consuming portfolio configuration"
        },
        {
          stage: "Investment Management",
          pain: "Limited automated rebalancing capabilities"
        },
        {
          stage: "Performance Monitoring",
          pain: "Manual performance tracking"
        },
        {
          stage: "Client Reporting",
          pain: "Generic report generation"
        }
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
      roles: {
        primary: "Policy Manager",
        secondary: ["Translation Specialist", "Compliance Officer"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Upload policy documents and language requirements"
        },
        {
          stage: "Document Setup",
          action: "Configure document templates and workflows"
        },
        {
          stage: "Translation Management",
          action: "Manage document translations and versions"
        },
        {
          stage: "Policy Distribution",
          action: "Distribute policies to relevant stakeholders"
        },
        {
          stage: "Compliance Tracking",
          action: "Monitor policy compliance and updates"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Automated document processing",
          icon: "file-plus"
        },
        {
          stage: "Document Setup",
          feature: "Smart template generation",
          icon: "layout"
        },
        {
          stage: "Translation Management",
          feature: "AI-powered translation assistance",
          icon: "globe"
        },
        {
          stage: "Policy Distribution",
          feature: "Intelligent distribution system",
          icon: "send"
        },
        {
          stage: "Compliance Tracking",
          feature: "Automated compliance monitoring",
          icon: "shield"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual document processing"
        },
        {
          stage: "Document Setup",
          pain: "Complex template management"
        },
        {
          stage: "Translation Management",
          pain: "Time-consuming translation process"
        },
        {
          stage: "Policy Distribution",
          pain: "Manual distribution workflows"
        },
        {
          stage: "Compliance Tracking",
          pain: "Limited compliance monitoring capabilities"
        }
      ]
    },
  
    "Get Technologies": {
      stages: [
        "Onboarding",
        "Task Creation",
        "Worker Matching",
        "Task Monitoring",
        "Performance Analysis"
      ],
      roles: {
        primary: "Operations Manager",
        secondary: ["Task Coordinator", "Quality Analyst"]
      },
      userActions: [
        {
          stage: "Onboarding",
          action: "Set up task parameters and requirements"
        },
        {
          stage: "Task Creation",
          action: "Create and validate task descriptions"
        },
        {
          stage: "Worker Matching",
          action: "Match tasks with qualified workers"
        },
        {
          stage: "Task Monitoring",
          action: "Monitor task progress and quality"
        },
        {
          stage: "Performance Analysis",
          action: "Analyze worker and task performance"
        }
      ],
      genAiExperience: [
        {
          stage: "Onboarding",
          feature: "Smart task template generation",
          icon: "file-plus"
        },
        {
          stage: "Task Creation",
          feature: "Automated task validation",
          icon: "check-square"
        },
        {
          stage: "Worker Matching",
          feature: "AI-driven worker matching",
          icon: "users"
        },
        {
          stage: "Task Monitoring",
          feature: "Real-time progress tracking",
          icon: "activity"
        },
        {
          stage: "Performance Analysis",
          feature: "Automated performance analytics",
          icon: "bar-chart"
        }
      ],
      currentExperience: [
        {
          stage: "Onboarding",
          pain: "Manual task setup process"
        },
        {
          stage: "Task Creation",
          pain: "Time-consuming task description writing"
        },
        {
          stage: "Worker Matching",
          pain: "Manual worker assignment"
        },
        {
          stage: "Task Monitoring",
          pain: "Limited progress tracking capabilities"
          

          {
        stage: "Performance Analysis",
        pain: "Manual performance reporting"
      }
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
    roles: {
      primary: "Operations Manager",
      secondary: ["Scanning Technician", "Compliance Officer"]
    },
    userActions: [
      {
        stage: "Onboarding",
        action: "Configure scanning parameters and compliance rules"
      },
      {
        stage: "Scanning Setup",
        action: "Set up scanning equipment and protocols"
      },
      {
        stage: "Cargo Processing",
        action: "Process and scan incoming cargo"
      },
      {
        stage: "Compliance Checking",
        action: "Verify cargo against compliance requirements"
      },
      {
        stage: "Performance Analysis",
        action: "Analyze processing efficiency and compliance rates"
      }
    ],
    genAiExperience: [
      {
        stage: "Onboarding",
        feature: "Automated compliance rule configuration",
        icon: "settings"
      },
      {
        stage: "Scanning Setup",
        feature: "Smart scanning protocol optimization",
        icon: "maximize"
      },
      {
        stage: "Cargo Processing",
        feature: "AI-powered anomaly detection",
        icon: "search"
      },
      {
        stage: "Compliance Checking",
        feature: "Real-time compliance verification",
        icon: "shield"
      },
      {
        stage: "Performance Analysis",
        feature: "Automated performance analytics",
        icon: "bar-chart"
      }
    ],
    currentExperience: [
      {
        stage: "Onboarding",
        pain: "Manual rule configuration process"
      },
      {
        stage: "Scanning Setup",
        pain: "Complex protocol setup requirements"
      },
      {
        stage: "Cargo Processing",
        pain: "Limited automated detection capabilities"
      },
      {
        stage: "Compliance Checking",
        pain: "Time-consuming manual verification"
      },
      {
        stage: "Performance Analysis",
        pain: "Manual reporting and analytics"
      }
    ]
  },

  "Quest Hyphen Inc": {
    stages: [
      "Onboarding",
      "Task Definition",
      "Worker Assignment",
      "Progress Tracking",
      "Quality Assurance"
    ],
    roles: {
      primary: "Project Manager",
      secondary: ["Task Coordinator", "Quality Analyst"]
    },
    userActions: [
      {
        stage: "Onboarding",
        action: "Define project parameters and requirements"
      },
      {
        stage: "Task Definition",
        action: "Create detailed task specifications"
      },
      {
        stage: "Worker Assignment",
        action: "Match tasks with qualified workers"
      },
      {
        stage: "Progress Tracking",
        action: "Monitor task completion and milestones"
      },
      {
        stage: "Quality Assurance",
        action: "Review deliverables and provide feedback"
      }
    ],
    genAiExperience: [
      {
        stage: "Onboarding",
        feature: "Smart project setup automation",
        icon: "file-plus"
      },
      {
        stage: "Task Definition",
        feature: "AI-assisted task specification",
        icon: "edit"
      },
      {
        stage: "Worker Assignment",
        feature: "Intelligent worker matching",
        icon: "users"
      },
      {
        stage: "Progress Tracking",
        feature: "Real-time progress monitoring",
        icon: "activity"
      },
      {
        stage: "Quality Assurance",
        feature: "Automated quality checks",
        icon: "check-circle"
      }
    ],
    currentExperience: [
      {
        stage: "Onboarding",
        pain: "Manual project setup process"
      },
      {
        stage: "Task Definition",
        pain: "Time-consuming task specification"
      },
      {
        stage: "Worker Assignment",
        pain: "Manual worker-task matching"
      },
      {
        stage: "Progress Tracking",
        pain: "Limited tracking capabilities"
      },
      {
        stage: "Quality Assurance",
        pain: "Manual quality review process"
      }
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
    roles: {
      primary: "Contract Manager",
      secondary: ["Compliance Officer", "Risk Analyst"]
    },
    userActions: [
      {
        stage: "Onboarding",
        action: "Initialize contract parameters and requirements"
      },
      {
        stage: "Contract Setup",
        action: "Configure contract terms and conditions"
      },
      {
        stage: "Compliance Management",
        action: "Monitor regulatory compliance"
      },
      {
        stage: "Performance Monitoring",
        action: "Track contract performance metrics"
      },
      {
        stage: "Risk Assessment",
        action: "Evaluate and mitigate contract risks"
      }
    ],
    genAiExperience: [
      {
        stage: "Onboarding",
        feature: "Smart contract setup",
        icon: "file-text"
      },
      {
        stage: "Contract Setup",
        feature: "Automated term validation",
        icon: "check-square"
      },
      {
        stage: "Compliance Management",
        feature: "Real-time compliance monitoring",
        icon: "shield"
      },
      {
        stage: "Performance Monitoring",
        feature: "AI-driven performance tracking",
        icon: "trending-up"
      },
      {
        stage: "Risk Assessment",
        feature: "Predictive risk analytics",
        icon: "alert-triangle"
      }
    ],
    currentExperience: [
      {
        stage: "Onboarding",
        pain: "Manual contract setup"
      },
      {
        stage: "Contract Setup",
        pain: "Complex validation requirements"
      },
      {
        stage: "Compliance Management",
        pain: "Limited monitoring capabilities"
      },
      {
        stage: "Performance Monitoring",
        pain: "Manual performance tracking"
      },
      {
        stage: "Risk Assessment",
        pain: "Time-consuming risk evaluation"
      }
    ]
  }
};