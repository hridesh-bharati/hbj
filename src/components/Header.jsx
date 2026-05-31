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
          <div className="row align-items-center g-2 text-center text-md-start">
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              <i className="bi bi-telephone-fill text-secondary" style={{ fontSize: '11px' }}></i>
              <span className="fw-bold top-bar-text">
                HELPLINE: <span>+91 8955776603</span>
              </span>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <div className="announcement-container">
                <div className="announcement-text" key={currentIndex}>
                  <span className="red-square">■</span> {announcements[currentIndex]}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <Link to="/faculty-login" className="faculty-link">
                FACULTY LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg sticky-top custom-navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
        <div className="container-fluid navbar-container">
          <Link className="navbar-brand fw-bold text-decoration-none" to="/" onClick={(e) => handleNavClick(e, 'hero')}>
            <span className="brand-orange">JIFSA</span>
            <span className="brand-subtitle">
              St Joseph's International<br />Fire & Safety Academy
            </span>
          </Link>

          <button className="navbar-toggler border-0 bg-danger text-white rounded-0" type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <i className="bi bi-list" style={{ fontSize: '28px' }}></i>
          </button>

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
    </>
  );
};

export default Header;