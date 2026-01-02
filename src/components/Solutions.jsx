import { useState } from 'react'

function Solutions() {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const solutionCategories = [
    {
      title: 'Business & Enterprises',
      items: [
        {
          name: 'Process Automation',
          details: [
            'Automated document processing and data entry',
            'Invoice processing and financial reconciliation',
            'Workflow optimization and task scheduling'
          ]
        },
        {
          name: 'Data Analytics & Business Intelligence',
          details: [
            'Predictive analytics for sales and demand forecasting',
            'Real-time dashboards and reporting',
            'Customer behavior analysis',
            'Market trend and competitive analysis'
          ]
        },
        {
          name: 'Customer Experience & Support',
          details: [
            'AI-powered chatbots and virtual assistants',
            'Automated email and ticket classification',
            'Voice assistants for customer engagement',
            'Personalized recommendations and responses'
          ]
        },
        {
          name: 'Sales & Marketing Optimization',
          details: [
            'Lead scoring and customer segmentation',
            'Personalized marketing campaigns',
            'Dynamic pricing optimization',
            'Churn prediction and retention analysis'
          ]
        },
        {
          name: 'Human Resources & Talent Management',
          details: [
            'Resume screening and candidate matching',
            'Employee performance analytics',
            'Workforce planning and attrition prediction',
            'AI-driven training and skill development platforms'
          ]
        }
      ]
    },
    {
      title: 'Healthcare',
      items: [
        {
          name: 'Medical Imaging & Diagnostics',
          details: [
            'AI-assisted X-ray, MRI, and CT scan analysis',
            'Early detection of cancer and critical diseases',
            'Automated pathology and radiology reports'
          ]
        },
        {
          name: 'Clinical Decision Support',
          details: [
            'Treatment recommendation systems',
            'Drug interaction and dosage analysis',
            'AI-assisted diagnosis support'
          ]
        },
        {
          name: 'Patient Care & Monitoring',
          details: [
            'Remote patient monitoring using AI-powered devices',
            'Predictive alerts for health deterioration',
            'Personalized care plans'
          ]
        },
        {
          name: 'Administrative & Operational Efficiency',
          details: [
            'Automated medical billing and coding',
            'Appointment scheduling optimization',
            'Electronic Health Record (EHR) data management'
          ]
        },
        {
          name: 'Drug Discovery & Research',
          details: [
            'AI-driven drug discovery and molecule screening',
            'Clinical trial optimization',
            'Biomedical research acceleration'
          ]
        }
      ]
    },
    {
      title: 'Banking & Financial Services',
      items: [
        {
          name: 'Fraud Detection & Risk Management',
          details: [
            'Real-time fraud detection and prevention',
            'Anti-money laundering (AML) monitoring',
            'Credit risk assessment and scoring'
          ]
        },
        {
          name: 'Customer Service & Engagement',
          details: [
            'AI chatbots for banking support',
            'Voice assistants for account management',
            'Personalized financial advice'
          ]
        },
        {
          name: 'Credit & Loan Processing',
          details: [
            'Automated loan approvals',
            'Predictive default analysis',
            'Alternative credit scoring models'
          ]
        },
        {
          name: 'Financial Analytics & Forecasting',
          details: [
            'Cash flow and liquidity forecasting',
            'Portfolio management optimization',
            'Market risk analysis'
          ]
        },
        {
          name: 'Compliance & Regulatory Reporting',
          details: [
            'Automated compliance monitoring',
            'Regulatory reporting automation',
            'Audit support using AI analytics'
          ]
        }
      ]
    },
    {
      title: 'Retail & E-Commerce',
      items: [
        {
          name: 'Personalized Shopping Experiences',
          details: [
            'Product recommendation engines',
            'Personalized offers and promotions',
            'Customer preference analysis'
          ]
        },
        {
          name: 'Inventory & Supply Chain Optimization',
          details: [
            'Demand forecasting',
            'Automated inventory replenishment',
            'Supplier performance analysis'
          ]
        },
        {
          name: 'Pricing & Revenue Optimization',
          details: [
            'Dynamic pricing models',
            'Promotion effectiveness analysis',
            'Revenue forecasting'
          ]
        },
        {
          name: 'Customer Insights & Analytics',
          details: [
            'Sentiment analysis from reviews and social media',
            'Customer lifetime value prediction',
            'Shopping behavior analytics'
          ]
        }
      ]
    },
    {
      title: 'Manufacturing & Industry',
      items: [
        {
          name: 'Predictive Maintenance',
          details: [
            'Equipment failure prediction',
            'Maintenance scheduling optimization',
            'Reduced downtime and operational costs'
          ]
        },
        {
          name: 'Quality Control & Inspection',
          details: [
            'AI-powered visual inspection systems',
            'Defect detection and classification',
            'Automated quality assurance'
          ]
        },
        {
          name: 'Production Optimization',
          details: [
            'Process optimization using machine learning',
            'Energy efficiency monitoring',
            'Yield improvement analysis'
          ]
        }
      ]
    },
    {
      title: 'Education',
      items: [
        {
          name: 'Personalized Learning',
          details: [
            'Adaptive learning platforms',
            'AI tutors and learning assistants',
            'Skill gap analysis'
          ]
        },
        {
          name: 'Administrative Automation',
          details: [
            'Automated grading and assessments',
            'Student enrollment management',
            'Attendance and performance tracking'
          ]
        },
        {
          name: 'Student Engagement & Retention',
          details: [
            'Dropout prediction',
            'Learning behavior analysis',
            'Personalized content recommendations'
          ]
        }
      ]
    },
    {
      title: 'Logistics & Transportation',
      items: [
        {
          name: 'Route & Fleet Optimization',
          details: [
            'AI-based route planning',
            'Fuel efficiency optimization',
            'Fleet performance monitoring'
          ]
        },
        {
          name: 'Demand Forecasting',
          details: [
            'Shipment volume prediction',
            'Capacity planning',
            'Seasonal demand analysis'
          ]
        },
        {
          name: 'Autonomous & Assisted Systems',
          details: [
            'Autonomous vehicle technologies',
            'Driver assistance systems',
            'Smart traffic management'
          ]
        }
      ]
    },
    {
      title: 'Insurance',
      items: [
        {
          name: 'Claims Processing',
          details: [
            'Automated claims assessment',
            'Fraud detection in insurance claims',
            'Faster claims settlement'
          ]
        },
        {
          name: 'Risk Assessment & Pricing',
          details: [
            'Predictive risk modeling',
            'Personalized policy pricing',
            'Underwriting automation'
          ]
        },
        {
          name: 'Customer Engagement',
          details: [
            'AI chatbots for policy inquiries',
            'Personalized policy recommendations',
            'Customer lifecycle analysis'
          ]
        }
      ]
    }
  ]

  return (
    <section className="solutions" id="solutions">
      <div className="solutions-intro">
        <div className="section-subtitle">OUR AI SOLUTIONS</div>
        <h2 className="slide-up" style={{ fontWeight: 'bold' }}>Artificial Intelligence is transforming industries by automating processes, enhancing decision-making, reducing costs, and improving customer experiences</h2>
      </div>
      <div className="solutions-container">
        {solutionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="solution-table-wrapper">
            <div className="solution-category">
            <h3>{category.title}</h3>
            <ul className="solution-items">
              {category.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`
                const isExpanded = expandedItems[key]
                
                return (
                  <li key={itemIndex} className="solution-item">
                    <div 
                      className="solution-item-header"
                      onClick={() => toggleExpand(categoryIndex, itemIndex)}
                    >
                      <span>{item.name}</span>
                      <span className={`solution-arrow ${isExpanded ? 'expanded' : ''}`}></span>
                    </div>
                    {isExpanded && item.details && (
                      <ul className="solution-details">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="solution-detail-item">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions
