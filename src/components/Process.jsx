function Process() {
  const imagePath = '/images/our process picture .jpg'
  const encodedImagePath = imagePath.replace(/ /g, '%20')
  
  const steps = [
    {
      number: '01',
      title: 'Understand Your Challenges',
      description: 'Our process starts when we ask our customers what is their most impending problems they are facing. The problems can range from delay in communications to company wide implementation of policies. Basically anything bugging you.'
    },
    {
      number: '02',
      title: 'Apply Real World Experience',
      description: 'We believe we can add value with our experience from real world scenarios. We get especially excited about projects that are first in the world.'
    },
    {
      number: '03',
      title: 'Global Partnership Network',
      description: 'We cater to customers around the world. We can partner with local resources to provide solutions basically anywhere in the world with realistic timelines.'
    },
    {
      number: '04',
      title: 'Keep You In The Loop',
      description: 'We start by educating the customer about their proposed solution, so the customer stays in loop all the time.'
    }
  ]

  return (
    <section className="process" id="process">
      <div className="process-content">
        <div className="section-subtitle">OUR PROCESS</div>
        <h2 className="slide-up">How we create AI-driven solutions</h2>
        <div className="process-image-container">
          <img 
            src={encodedImagePath}
            alt="Our Process" 
            className="process-image"
            onError={(e) => {
              console.error('Image failed to load:', imagePath)
              console.error('Encoded path:', encodedImagePath)
            }}
          />
        </div>
      </div>
      <div className="process-steps-wrapper">
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

