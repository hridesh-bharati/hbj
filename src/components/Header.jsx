import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    "NEW BATCH STARTING JULY 2026 - LIMITED SEATS AVAILABLE",
    "100% PLACEMENT ASSISTANCE FOR ALL COURSES",
    "ON AWARD 2021 | ICONIC ACADEMY",
    "ADMISSIONS OPEN FOR FIRE & SAFETY DIPLOMA"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [announcements.length]);

  const handleNavClick = (e, sectionId) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsNavOpen(false);
  };

  const navLinks = [
    { name: 'HOME', path: '/', section: 'hero', icon: 'bi-house-door-fill' },
    { name: 'ABOUT', path: '/', section: 'about', icon: 'bi-info-circle-fill' },
    { name: 'COURSES', path: '/', section: 'courses', icon: 'bi-mortarboard-fill' },
    { name: 'GALLERY', path: '/', section: 'gallery', icon: 'bi-images' },
    { name: 'CONTACT', path: '/', section: 'contact', icon: 'bi-envelope-fill' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container-fluid px-4">
          <div className="row align-items-center g-2">

            {/* हेल्पलाइन - केवल PC में दिखेगा */}
            <div className="col-12 col-md-4 d-none d-md-flex justify-content-start align-items-center gap-2">
              <i className="bi bi-telephone-fill text-secondary" style={{ fontSize: '11px' }}></i>
              <span className="fw-bold top-bar-text">
                HELPLINE: <span>+91 8955776603</span>
              </span>
            </div>

            {/* अनाउंसमेंट कंटेनर */}
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <div className="announcement-container">
                {/* PC View */}
                <div className="announcement-text d-none d-md-block" key={currentIndex}>
                  <span className="red-square">■</span> {announcements[currentIndex]}
                </div>

                {/* Mobile View (Right-to-Left Marquee) */}
                <div className="announcement-text d-block d-md-none">
                  {announcements.map((text, idx) => (
                    <span key={idx} style={{ marginRight: '40px' }}>
                      <span className="red-square">■</span> <span className="text-light opacity-75">{text}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* फैकल्टी लॉगिन - केवल PC में दिखेगा */}
            <div className="col-12 col-md-4 d-none d-md-flex justify-content-end align-items-center">
              <Link to="/faculty-login" className="faculty-link">
                FACULTY LOGIN
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg sticky-top custom-navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
        <div className="container-fluid navbar-container d-flex align-items-center justify-content-between flex-nowrap">

          {/* दोनों लोगोज़ को एक साथ एक ही लिंक रैपर में रखा गया है */}
          <Link className="navbar-brand fw-bold text-decoration-none d-flex align-items-center gap-2 flex-shrink-0" to="/" onClick={(e) => handleNavClick(e, 'hero')}>
            <img src="logo.avif" alt="logo 1" style={{ width: 'auto', maxHeight: '45px', maxWidth: '120px' }} />
            <img src="imgLogo.avif" alt="logo 2" style={{ width: 'auto', maxHeight: '45px', maxWidth: '120px' }} />
          </Link>

          {/* मोबाइल मेनू बटन */}
          <button className="navbar-toggler border-0 bg-danger text-white rounded-0" type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <i className="bi bi-list" style={{ fontSize: '28px' }}></i>
          </button>

          {/* नेविगेशन लिंक्स */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto justify-content-center align-items-center gap-lg-4 gap-3 ps-0 ps-lg-5 mt-3 mt-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link
                    className="nav-link d-flex align-items-center gap-2"
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.section)}
                  >
                    <i className={`bi ${link.icon} nav-icon`}></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center mt-3 mt-lg-0 justify-content-center">
              <Link
                className="btn apply-btn"
                to="/"
                onClick={(e) => handleNavClick(e, "apply")}
              >
                APPLY NOW <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- FLOATING ACTION BUTTONS (FIXED POSITION) --- */}
      
      {/* Left Side: WhatsApp Button */}
      <a 
        href="https://wa.me/918955776603" 
        className="floating-btn whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Right Side: Call & Message Buttons */}
      <div className="floating-actions-right">
        {/* Call Button */}
        <a href="tel:+918955776603" className="floating-btn call-float" aria-label="Call Us">
          <i className="bi bi-telephone-fill"></i>
        </a>
        
        {/* Message Button */}
        <a href="sms:+918955776603" className="floating-btn message-float" aria-label="Send Message">
          <i className="bi bi-chat-dots-fill"></i>
        </a>
      </div>
    </>
  );
};

export default Header;