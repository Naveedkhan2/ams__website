function WhatWeDeliver() {
  const quadrants = [
    { number: '01', text: 'Save you money' },
    { number: '02', text: 'Save your time' },
    { number: '03', text: 'Increase your profitability' },
    { number: '04', text: 'Increase efficiency' }
  ]

  return (
    <section className="what-we-deliver" id="what-we-deliver">
      <div className="section-subtitle">WHAT WE DELIVER</div>
      <h2>We believe we can do one of four things for you with AI</h2>
      <div className="quadrants">
        {quadrants.map((quadrant, index) => (
          <div key={index} className="quadrant">
            <div className="quadrant-number">{quadrant.number}</div>
            <div className="quadrant-text">{quadrant.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatWeDeliver

