import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, targetId) => {
    e.preventDefault()
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
      document.body.classList.remove('mobile-menu-open')
    }
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
  }
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [])

  return (
    <>
      <nav className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`} id="navbar">
        <div className="logo-container">
          <a href="#" className="logo" onClick={(e) => handleClick(e, '#home')}>Tresk</a>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>ABOUT</a></li>
          <li><a href="#process" onClick={(e) => handleClick(e, '#process')}>PROCESS</a></li>
          <li><a href="#solutions" onClick={(e) => handleClick(e, '#solutions')}>SOLUTIONS</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>CONTACT</a></li>
        </ul>
      </nav>
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => {
            setMobileMenuOpen(false)
            document.body.classList.remove('mobile-menu-open')
          }}
        ></div>
      )}
    </>
  )
}

export default Navbar

