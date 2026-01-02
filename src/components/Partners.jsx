function Partners() {
  const logoPath = '/images/EPSILON%20SYSTEMS%20.png'
  
  return (
    <section className="partners">
      <div className="section-subtitle">OUR PARTNERS</div>
      <div className="partner-content-wrapper">
        <div className="partner-logo-container">
          <img 
            src={logoPath} 
            alt="Epsilon Systems Logo" 
            className="partner-logo"
            onError={(e) => {
              console.error('Logo failed to load:', logoPath)
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="partner-content">
          <p className="partner-text">
            Epsilon Smart Solutions is a technology-driven company specializing in AI, IoT, and Machine Learning-based solutions that empower industries, businesses, and communities.
          </p>
          <p className="partner-text">
            At Epsilon Smart Solutions, we combine innovation, research, and local expertise to build technologies that not only solve today's challenges but also shape the connected world of tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners

