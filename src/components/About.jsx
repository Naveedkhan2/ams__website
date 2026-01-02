function About() {
  const imagePath = '/images/about-us.jpg'
  
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="section-subtitle">ABOUT US</div>
        <h2><strong>A boutique AI firm for<br />real world scenarios</strong></h2>
        <p>
          Tresk is a boutique AI firm which specializes in developing Artificial intelligence solutions for real world scenarios. We are excited to provide AI solutions for your sales, security, marketing, finance, supply chain, inventory, social exposure, lifestyle or any number of novel needs.
        </p>
        <p style={{ marginTop: '1.0rem' }}>
          Tresk was founded in 2011 by Syed Saad Mustafa and Syed Zahid Mustafa. Initially providing website, e-commerce, mobile application and digital marketing solutions, we have pivoted and reinvented ourselves into doing what is cutting edge and yet also excites us the most in the form of artificial intelligence.
        </p>
      </div>
      <div className="about-image-container">
        <img 
          src={imagePath}
          alt="About Tresk Technologies" 
          className="about-image"
          onError={(e) => {
            console.error('Image failed to load:', imagePath)
            console.error('Current URL:', window.location.href)
            console.error('Full image path:', window.location.origin + imagePath)
          }}
        />
      </div>
    </section>
  )
}

export default About

