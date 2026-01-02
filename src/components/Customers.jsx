function Customers() {
  const logos = [
    { name: 'telenor', path: '/images/Telenor.png' },
    { name: 'TELEMART', path: '/images/Telemart.png' },
    { name: 'Analytical Measuring Systems', path: '/images/AMS.png' },
    { name: 'LIVE ROSTRUM', path: '/images/live-rostrum.png' }
  ]
  
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]
  
  return (
    <section className="customers" id="customers">
      <div className="section-subtitle">OUR CUSTOMERS</div>
      <h2>Trusted by Leading Organizations</h2>
      <div className="logo-scroll-wrapper">
        <div className="logo-scroll-container">
          <div className="logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img 
                  src={logo.path}
                  alt={logo.name}
                  className="customer-logo"
                  onError={(e) => {
                    console.error('Logo failed to load:', logo.path)
                    console.error('Full URL:', window.location.origin + logo.path)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers

