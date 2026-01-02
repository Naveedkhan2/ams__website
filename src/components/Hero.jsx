function Hero() {
  const handleClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Try to import the image - if it doesn't exist, it will fallback to CSS background
  const backgroundImage = '/images/hero-background.jpg'

  return (
    <section 
      className="hero" 
      id="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content">
        <div className="hero-subtitle">BOUTIQUE AI SOLUTIONS</div>
        <h1 className="hero-headline">
          <span className="highlight">We love Artificial</span><br />
          <span className="highlight">Intelligence.</span><br />
          <span className="muted">And we love solving</span><br />
          <span className="muted">problems.</span>
        </h1>
        <p className="hero-text">
          Tresk Technologies provides Artificial Intelligence solutions<br />
          for old and new problems. With advancements in AI capabilities,<br />
          everybody has something to gain.
        </p>
        <a href="#what-we-deliver" className="hero-cta-button" onClick={(e) => handleClick(e, '#what-we-deliver')}>
          DISCOVER WHAT WE CAN DO <span className="arrow-down">↓</span>
        </a>
      </div>
    </section>
  )
}

export default Hero

