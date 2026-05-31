import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './Testimonial';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  // Carousel slides with 4 images
  const carouselSlides = [
    {
      id: 1,
      title: 'INDUSTRIAL SAFETY',
      subtitle: 'Degree, ADIS, Diploma Courses',
      description: '12th Pass from any stream OR 10th + 2 years recognised ITI',
      image: '/images/hero1.webp',
      buttonText: 'Explore Courses',
      buttonLink: '/courses'
    },
    {
      id: 2,
      title: 'GLOBAL PLACEMENTS',
      subtitle: '35,000+ placed in Aramco, ADNOC, L&T',
      description: 'Industry driven curriculum with 10-acre practical ground',
      image: '/images/hero2.webp',
      buttonText: 'View Placements',
      buttonLink: '/placements'
    },
    {
      id: 3,
      title: 'TUV SUD & RUNGTA Collaboration',
      subtitle: 'Certified Safety Officer & International Skill University',
      description: 'ISO Certified Institute with global recognition',
      image: '/images/hero3.webp',
      buttonText: 'Collaborations',
      buttonLink: '/organization'
    },
    {
      id: 4,
      title: 'INTERNATIONAL CERTIFICATIONS',
      subtitle: 'NEBOSH, IOSH, OSHA Approved Courses',
      description: 'Globally recognized safety certifications with placement assistance',
      image: '/images/hero4.webp',
      buttonText: 'Get Certified',
      buttonLink: '/courses'
    }
  ];

  const quickActions = [
    { icon: 'bi-calculator', title: 'GET COURSE FEES', color: '#ff6b35' },
    { icon: 'bi-pencil-square', title: 'APPLY ONLINE', color: '#28a745' },
    { icon: 'bi-person-check', title: 'ADMISSION GUIDANCE', color: '#17a2b8' },
    { icon: 'bi-briefcase', title: 'PLACEMENT RECORDS', color: '#6f42c1' },
  ];

  const stats = [
    { number: '30+', label: 'YEARS OF EXCELLENCE', sub: 'Industry-trusted since 1996' },
    { number: '35,000+', label: 'EMPLOYEES PLACED GLOBALLY', sub: 'Aramco, ADNOC & more' },
    { number: '3,500+', label: 'LATEST EQUIPMENTS', sub: '& 3,000+ Modern Tools' },
    { number: '10 Acres', label: 'PRACTICAL GROUND', sub: "India's largest practical training ground of Fire & Safety for students" },
    { number: '1,700', label: 'ONLINE & OFFLINE BATCHES', sub: 'Completed successfully' },
    { number: '200-Cap', label: 'STUDENTS TRAINED', sub: 'STAR LEVEL HOSTEL Residential on-campus facility' },
  ];

  const honors = [
    { title: 'ICONIC ACADEMY AWARDED BY GOVERNOR OF MAHARASHTRA', year: 'TIMES APPLAUD TRENDSETTER 2024', sub: 'OFFICIAL RECOGNITION' },
    { title: 'BEST BRAND IN OH&S AND FIRE SAFETY AWARDED BY TIMES GROUP', year: 'TIMES BRAND ICON 2021', sub: 'OFFICIAL RECOGNITION' },
    { title: 'AWARDED BY CHIEF MINISTER OF CHHATTISGARH', year: 'FOR ACADEMIC EXCELLENCE AWARD', sub: 'OFFICIAL RECOGNITION' },
    { title: 'SHREE MAHATMA GANDHI RASHTRIYA ABHIMAN PURASKAR 2023', year: 'FOR TECHNICAL TRAINING CONTRIBUTION', sub: 'OFFICIAL RECOGNITION' },
  ];

  const certifications = [
    'GENERAL SAFETY',
    'INDIAN IRON & STEEL SECTOR SKILL COUNCIL',
    'DIRECTORATE OF INDUSTRIAL SAFETY & HEALTH',
    'DGMS'
  ];

  const affiliations = [
    {
      name: 'RUNGTA INTERNATIONAL SKILL UNIVERSITY',
      description: 'JIFSA is proud to be associated with Rungta International Skill University, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety.',
      logo: 'RUNGTA',
      color: '#e65c1e'
    },
    {
      name: 'TUV SUD COLLABORATION',
      description: 'JIFSA is proud to be associated with TUV SUD Collaboration, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety.',
      logo: 'TUV SUD',
      color: '#0056b3'
    },
    {
      name: 'INDIAN IRON & STEEL SECTOR SKILL COUNCIL',
      description: 'JIFSA is proud to be associated with Indian Iron & Steel Sector Skill Council, ensuring our students receive the highest quality training and globally recognised certifications.',
      logo: 'IISSC',
      color: '#6c757d'
    },
    {
      name: 'DGMS (DIRECTORATE GENERAL OF MINES SAFETY)',
      description: 'JIFSA is proud to be associated with DGMS, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety.',
      logo: 'DGMS',
      color: '#28a745'
    }
  ];

  // Auto slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
  };

  return (
    <>
      {/* Bootstrap Carousel with 4 slides */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={idx}
              className={idx === activeIndex ? 'active' : ''}
              onClick={() => goToSlide(idx)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '550px',
                position: 'relative'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                background: 'linear-gradient(97deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
                zIndex: 1
              }}></div>
              <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
                <div className="row m-5">
                  <div className="col-lg-7 col-md-9 text-white" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="display-4 fw-bold mb-3">{slide.title}</h1>
                    <p className="lead fw-semibold mb-3">{slide.subtitle}</p>
                    <p className="mb-4 fs-5">{slide.description}</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-warning rounded-pill px-4 py-2 fw-semibold">
                        {slide.buttonText} →
                      </button>
                      <button className="btn btn-outline-light rounded-pill px-4 py-2">
                        Get Fees
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={goToPrev}>
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" onClick={goToNext}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Quick Action Cards - With AOS */}
      <section className="py-0" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row g-0 justify-content-center shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            {quickActions.map((action, idx) => (
              <div className="col-md-3 col-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="card border-0 text-center h-100 quick-action-card" style={{
                  background: '#ffffff',
                  cursor: 'pointer',
                  borderRadius: '0px',
                  borderRight: idx !== quickActions.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none'
                }}>
                  <div className="card-body py-3 d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-wrapper" style={{
                      width: '45px',
                      height: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '50%'
                    }}>
                      <i className={`${action.icon} fs-4`} style={{ color: action.color }}></i>
                    </div>
                    <div className="text-start">
                      <span className="text-muted d-block" style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.5px' }}>QUICK ACTION</span>
                      <h6 className="fw-bold mb-0" style={{ fontSize: '11px', color: '#111' }}>{action.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE - EXACT CLONE with AOS */}
      <div className="px-lg-5">
        <div className="container-fluid px-0 w-100 mt-5">
          <div className="text-center mt-4 mb-2" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '13px', letterSpacing: '2px' }}>
              WHO WE ARE
            </small>
          </div>

          <div className="w-100 text-center py-5 px-3 mb-5 position-relative" style={{
            backgroundColor: '#fff1f2',
            border: '1px dashed #dc3545',
            borderTop: '5px solid #dc3545',
          }}>
            <div className="container" style={{ maxWidth: '900px' }} data-aos="zoom-in">
              <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#dc3545', fontSize: '24px', letterSpacing: '0.5px' }}>
                Not Sure What To Do After 10th, 12th, ITI, Diploma Or Graduation?
              </h2>
              <p className="text-secondary mb-4 mx-auto" style={{ fontSize: '14px', maxWidth: '720px', fontWeight: '500', lineHeight: '1.6' }}>
                Get personalized career guidance from our expert counselors. We'll help you choose the right path for a global career in safety.
              </p>
              <button className="btn text-white fw-bold px-4 py-2 text-uppercase rounded-1 border-0 shadow-sm" style={{ backgroundColor: '#e63946', fontSize: '13px', letterSpacing: '1px' }}>
                Book Free Counseling Session →
              </button>
            </div>
          </div>

          <div className="container text-center mx-auto px-3 my-5" style={{ maxWidth: '1100px' }} data-aos="fade-up" data-aos-delay="200">
            <h1 className="fw-black mb-3" style={{ color: '#1d3557', fontSize: '38px', fontWeight: '900' }}>
              India's No. 1 Institute for <span style={{ color: '#e63946' }}>Fire & Industrial Safety</span>
            </h1>
            <p className="text-muted mx-auto mb-4" style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '980px', fontWeight: '400' }}>
              JIFSA — St. Joseph's International Fire and Safety Academy — has been shaping India's safety professionals since 1996. With a 10-acre dedicated training ground, 3,500+ equipment assets, and a 35,000+ strong alumni network placed across top global corporations, we are the gold standard in Fire, Industrial & HSE education.
            </p>
            <button className="btn text-white fw-bold px-4 py-3 text-uppercase rounded-1 border-0 shadow-sm mt-2" style={{ backgroundColor: '#e63946', fontSize: '12px', letterSpacing: '1.5px' }}>
              Get Admission Guidance
            </button>
          </div>
        </div>
      </div>

      {/* OUR TRACK RECORD Section with AOS */}
      <div className="container-fluid my-5 px-3">

        {/* Header Title Section */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>
            OUR TRACK RECORD
          </h6>
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>
            30 Years of <span style={{ color: '#dc3545' }}>Legacy</span> in Numbers
          </h2>
        </div>

        {/* CSS Styles Block (इफेक्ट्स और होवर एनिमेशन के लिए) */}
        <style jsx>{`
    .stats-card {
      border: 1px solid #e5e7eb;
      border-radius: 0px; /* शार्प एजेस */
      background: #ffffff;
      overflow: hidden;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
    }
    
    /* कार्ड पर होवर करने पर थोड़ा ऊपर उठने का इफेक्ट */
    .stats-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      z-index: 2;
    }

    /* इमेज कंटेनर */
    .img-zoom-container {
      overflow: hidden;
      position: relative;
    }

    .img-zoom-container img {
      transition: transform 0.5s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* फोटो पर होवर करने पर थोड़ा सा ज़ूम होने का इफेक्ट */
    .stats-card:hover .img-zoom-container img {
      transform: scale(1.06);
    }

    .letter-spacing-custom {
      letter-spacing: 0.3px;
    }
  `}</style>

        {/* Main Grid Layout structure */}
        <div className="row g-4 justify-content-center">

          {/* ROW 1: 30+ Years & 35,000+ Employees Placed */}
          <div className="col-12 col-lg-7">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-6 p-4 text-center">
                <h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>30+</h2>
                <p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>YEARS OF EXCELLENCE</p>
                <small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Industry-trusted since 1996</small>
              </div>
              <div className="col-6 img-zoom-container h-100" style={{ Height: '160px' }}>
                <img src="images/lagency/image1.avif" alt="30 Years Medal" style={{ height: "180px" }} />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-5 img-zoom-container h-100" style={{ minHeight: '160px' }}>
                <img src="images/lagency/image2.avif" alt="Employees Placed" style={{ height: "180px" }} />
              </div>
              <div className="col-7 p-4 text-start ps-4">
                <h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>35,000+</h2>
                <p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>EMPLOYEES PLACED GLOBALLY</p>
                <small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Aramco, ADNOC & more</small>
              </div>
            </div>
          </div>

          {/* ROW 2: 3,500+ Equipment, Center Truck Image, & 10 Acres Ground */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-6 p-4 text-center">
                <h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>3,500+</h2>
                <p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>LATEST EQUIPMENTS</p>
                <small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>& 3,000+ Modern Tools</small>
              </div>
              <div className="col-6 img-zoom-container h-100" style={{ minHeight: '160px' }}>
                <img src="images/lagency/image3.avif" alt="Equipments" style={{ height: "180px" }} />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            {/* सेंटर में बड़ी इमेज जो सिर्फ होवर पर ज़ूम होगी */}
            <div className="stats-card h-100 img-zoom-container" style={{ minHeight: '160px' }}>
              <img src="images/lagency/image4.avif" alt="Fire Truck Training" style={{ height: "180px" }} />
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center">
              <h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>10 Acres</h2>
              <p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PRACTICAL GROUND</p>
              <small className="text-muted d-block mt-1 mx-auto" style={{ fontSize: '10px', maxWidth: '280px' }}>
                India's largest practical training ground of Fire & Safety for students
              </small>
            </div>
          </div>

          {/* ROW 3: Online Batches (Blue), Students Trained (Red), & Hostel (White) */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#edf7fd', borderColor: '#e0f2fe' }}>
              <h2 className="fw-black m-0" style={{ fontWeight: '900', color: '#0369a1', fontSize: '38px' }}>1,700</h2>
              <p className="fw-bold text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#0369a1' }}>ONLINE & OFFLINE BATCHES</p>
              <small className="d-block mt-1" style={{ fontSize: '10px', color: '#0284c7' }}>Completed successfully</small>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
              <h2 className="fw-black text-white m-0" style={{ fontWeight: '900', fontSize: '38px' }}>35,000+</h2>
              <p className="fw-bold text-white text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>STUDENTS TRAINED</p>
              <small className="text-white-50 d-block mt-1" style={{ fontSize: '10px' }}>Across all programmes</small>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center">
              <h2 className="fw-black text-dark m-0" style={{ fontWeight: '900', fontSize: '38px' }}>200-Cap</h2>
              <p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>STAR LEVEL HOSTEL</p>
              <small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Residential on-campus facility</small>
            </div>
          </div>

        </div>
      </div>
      {/* HONOURS & RECOGNITION Section with AOS */}
      <div className="container-fluid my-5 px-3">

        {/* Header Section */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>
            HONOURS & RECOGNITION
          </h6>
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>
            Recognised by the best, <span style={{ color: '#dc3545' }}>awarded for excellence</span>
          </h2>
        </div>

        {/* Custom CSS for Image Zoom & Card Shadow on Hover */}
        <style jsx>{`
    .award-card {
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      background: #ffffff;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease;
    }
    
    /* 1. कार्ड होवर इफेक्ट (शैडो + थोड़ा ऊपर उठना) */
    .award-card:hover {
      transform: translateY(-6px);
      border-color: #dc3545 !important;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
      z-index: 2;
    }

    /* इमेज कंटेनर */
    .img-container {
      overflow: hidden;
      position: relative;
      height: 170px;
    }

    .img-container img {
      transition: transform 0.5s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* 2. फोटो होवर इफेक्ट (ज़ूम इन) */
    .award-card:hover .img-container img {
      transform: scale(1.06);
    }

    .award-title-link {
      font-size: 14px;
      font-weight: 800;
      color: #1f2937;
      line-height: 1.4;
      text-decoration: none;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 60px;
      transition: color 0.3s ease;
    }

    .award-card:hover .award-title-link {
      color: #dc3545;
    }

    .red-left-border {
      border-left: 2px solid #dc3545;
      padding-left: 12px;
    }
  `}</style>

        {/* Row Layout: 4 Columns on Desktop */}
        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">

          {/* Card 1 */}
          <div className="col">
            <div className="award-card h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <div className="red-left-border mb-2">
                  <a href="#link" className="award-title-link">
                    ICONIC ACADEMY AWARDED BY GOVERNOR OF MAHARASHTRA, TIMES APPLAUD TRENDSETTER 2024
                  </a>
                </div>
                <small className="text-muted fw-bold tracking-wider d-block mb-3" style={{ fontSize: '9px' }}>
                  OFFICIAL RECOGNITION
                </small>

                {/* Zoom-enabled Image Container */}
                <div className="img-container rounded-1 bg-light">
                  <img src="images/recognised/image1.avif" alt="Governor Award" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                <small className="fw-bold text-muted" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>VERIFIED EXCELLENCE</small>
                <span className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>■■■</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="award-card h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <div className="red-left-border mb-2">
                  <a href="#link" className="award-title-link">
                    BEST BRAND IN OH&S AND FIRE SAFETY AWARDED BY TIMES GROUP, TIMES BRAND ICON 2021
                  </a>
                </div>
                <small className="text-muted fw-bold tracking-wider d-block mb-3" style={{ fontSize: '9px' }}>
                  OFFICIAL RECOGNITION
                </small>

                <div className="img-container rounded-1 bg-light">
                  <img src="images/recognised/image2.avif" alt="Times Brand Icon" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                <small className="fw-bold text-muted" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>VERIFIED EXCELLENCE</small>
                <span className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>■■■</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="award-card h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <div className="red-left-border mb-2">
                  <a href="#link" className="award-title-link">
                    AWARDED BY CHIEF MINISTER OF CHHATTISGARH FOR ACADEMIC EXCELLENCE AWARD
                  </a>
                </div>
                <small className="text-muted fw-bold tracking-wider d-block mb-3" style={{ fontSize: '9px' }}>
                  OFFICIAL RECOGNITION
                </small>

                <div className="img-container rounded-1 bg-light">
                  <img src="images/recognised/image3.avif" alt="CM Excellence Award" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                <small className="fw-bold text-muted" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>VERIFIED EXCELLENCE</small>
                <span className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>■■■</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="award-card h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <div className="red-left-border mb-2">
                  <a href="#link" className="award-title-link">
                    SHREE MAHATMA GANDHI RASHTRIYA ABHIMAN PURASKAR 2023 FOR TECHNICAL TRAINING CONTRIBUTION
                  </a>
                </div>
                <small className="text-muted fw-bold tracking-wider d-block mb-3" style={{ fontSize: '9px' }}>
                  OFFICIAL RECOGNITION
                </small>

                <div className="img-container rounded-1 bg-light">
                  <img src="images/recognised/image4.avif" alt="Mahatma Gandhi Award" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                <small className="fw-bold text-muted" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>VERIFIED EXCELLENCE</small>
                <span className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>■■■</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ADDITIONAL CERTIFICATIONS & ASSOCIATES with AOS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4" data-aos="zoom-in">
            <h3 className="fw-bold text-uppercase" style={{ color: '#1d3557', fontSize: '20px' }}>ADDITIONAL CERTIFICATIONS & ASSOCIATES</h3>
          </div>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {certifications.map((cert, idx) => (
              <span key={idx} className="badge px-4 py-2 rounded-pill" style={{ backgroundColor: '#e65c1e', color: 'white', fontSize: '12px' }} data-aos="flip-left" data-aos-delay={idx * 50}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted AFFILIATIONS & COLLABORATIONS Section with AOS */}
      <div className="container-fluid my-5 px-3">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>
            AFFILIATIONS & COLLABORATIONS
          </h6>
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>
            Trusted by <span style={{ color: '#dc3545' }}>Governing Bodies</span>
          </h2>
        </div>

        {/* Custom CSS for Alternating Layout, Image Zoom & Button Effects */}
        <style jsx>{`
    .collab-wrapper {
      background: #ffffff;
      border: 1px solid #f3f4f6;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    
    /* पूरे रो/ब्लॉक पर होवर करने पर थोड़ा सा ऊपर उठना और शैडो आना */
    .collab-wrapper:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
    }

    .collab-img-container {
      overflow: hidden;
      border: 1px solid #e5e7eb;
      background: #ffffff;
      padding: 15px; /* स्क्रीनशॉट की तरह इमेज के चारों तरफ का व्हाइट गैप */
    }

    .collab-img-container img {
      transition: transform 0.5s ease;
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    /* इमेज ज़ूम इफेक्ट */
    .collab-wrapper:hover .collab-img-container img {
      transform: scale(1.04);
    }

    /* डार्क प्रीमियम बटन स्टाइल */
    .btn-dark-custom {
      background-color: #0b1320;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 12px 24px;
      border-radius: 0px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.2s ease;
    }

    .btn-dark-custom:hover {
      background-color: #dc3545;
      color: #ffffff;
    }
  `}</style>

        {/* Blocks Container with Vertical Spacing */}
        <div className="d-flex flex-column gap-5">

          {/* BLOCK 1: Rungta University (Photo Left, Text Right) */}
          <div className="row align-items-center g-4 p-3 collab-wrapper">
            <div className="col-12 col-md-6">
              <div className="collab-img-container">
                <img src="images/trusted/image1.avif" alt="Rungta International Skill University" />
              </div>
            </div>
            <div className="col-12 col-md-6 ps-md-4 text-start">
              <small className="text-danger fw-bold tracking-wider d-block mb-2" style={{ fontSize: '10px' }}>
                VERIFIED ACADEMIC PARTNER
              </small>
              <h3 className="fw-black text-dark mb-3" style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                RUNGTA INTERNATIONAL SKILL UNIVERSITY
              </h3>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '13px', color: '#4b5563' }}>
                JIFSA is proud to be associated with Rungta International Skill University, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety. This collaboration strengthens our commitment to industry standards and global safety protocols.
              </p>
              <div className="d-flex align-items-center gap-2 text-muted mb-4" style={{ fontSize: '11px', fontWeight: '600' }}>
                <i className="bi bi-check-circle text-danger"></i> ACCREDITED ACADEMIC PARTNER
              </div>
              <a href="#learn-more" className="btn-dark-custom">
                LEARN MORE <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* BLOCK 2: TÜV SÜD (Text Left, Photo Right) */}
          <div className="row align-items-center g-4 p-3 collab-wrapper flex-md-row-reverse">
            <div className="col-12 col-md-6">
              <div className="collab-img-container">
                <img src="images/trusted/image2.avif" alt="TÜV SÜD Collaboration" />
              </div>
            </div>
            <div className="col-12 col-md-6 pe-md-4 text-start">
              <small className="text-danger fw-bold tracking-wider d-block mb-2" style={{ fontSize: '10px' }}>
                VERIFIED ACADEMIC PARTNER
              </small>
              <h3 className="fw-black text-dark mb-3" style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                TÜV SÜD COLLABORATION
              </h3>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '13px', color: '#4b5563' }}>
                JIFSA is proud to be associated with TÜV SÜD Collaboration, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety. This collaboration strengthens our commitment to industry standards and global safety protocols.
              </p>
              <div className="d-flex align-items-center gap-2 text-muted mb-4" style={{ fontSize: '11px', fontWeight: '600' }}>
                <i className="bi bi-check-circle text-danger"></i> ACCREDITED ACADEMIC PARTNER
              </div>
              <a href="#learn-more" className="btn-dark-custom">
                LEARN MORE <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* BLOCK 3: Indian Iron & Steel Sector Skill Council (Photo Left, Text Right) */}
          <div className="row align-items-center g-4 p-3 collab-wrapper">
            <div className="col-12 col-md-6">
              <div className="collab-img-container">
                <img src="images/trusted/image3.webp" alt="Indian Iron & Steel Sector Skill Council" />
              </div>
            </div>
            <div className="col-12 col-md-6 ps-md-4 text-start">
              <small className="text-danger fw-bold tracking-wider d-block mb-2" style={{ fontSize: '10px' }}>
                VERIFIED ACADEMIC PARTNER
              </small>
              <h3 className="fw-black text-dark mb-3" style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                INDIAN IRON & STEEL SECTOR SKILL COUNCIL
              </h3>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '13px', color: '#4b5563' }}>
                JIFSA is proud to be associated with Indian Iron & Steel Sector Skill Council, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety. This collaboration strengthens our commitment to industry standards and global safety protocols.
              </p>
              <div className="d-flex align-items-center gap-2 text-muted mb-4" style={{ fontSize: '11px', fontWeight: '600' }}>
                <i className="bi bi-check-circle text-danger"></i> ACCREDITED ACADEMIC PARTNER
              </div>
              <a href="#learn-more" className="btn-dark-custom">
                LEARN MORE <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* BLOCK 4: DGMS (Text Left, Photo Right) */}
          <div className="row align-items-center g-4 p-3 collab-wrapper flex-md-row-reverse">
            <div className="col-12 col-md-6">
              <div className="collab-img-container">
                <img src="images/trusted/image4.avif" alt="DGMS Directorate General of Mines Safety" />
              </div>
            </div>
            <div className="col-12 col-md-6 pe-md-4 text-start">
              <small className="text-danger fw-bold tracking-wider d-block mb-2" style={{ fontSize: '10px' }}>
                VERIFIED ACADEMIC PARTNER
              </small>
              <h3 className="fw-black text-dark mb-3" style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                DGMS (DIRECTORATE GENERAL OF MINES SAFETY)
              </h3>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '13px', color: '#4b5563' }}>
                JIFSA is proud to be associated with DGMS (Directorate General of Mines Safety), ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety. This collaboration strengthens our commitment to industry standards and global safety protocols.
              </p>
              <div className="d-flex align-items-center gap-2 text-muted mb-4" style={{ fontSize: '11px', fontWeight: '600' }}>
                <i className="bi bi-check-circle text-danger"></i> ACCREDITED ACADEMIC PARTNER
              </div>
              <a href="#learn-more" className="btn-dark-custom">
                LEARN MORE <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Course JIFSA HIGHLIGHTS Section with AOS */}
      <div className="container-fluid my-5 px-5">

        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5">
          <div>
            <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>
              — INVEST IN YOUR FUTURE
            </h6>
            <h2 className="fw-bolder text-dark display-5 m-0" style={{ fontWeight: '1200', letterSpacing: '-1px', lineHeight: '1.1' }}>
              CHOOSE YOUR COURSE<br />BY <span style={{ color: '#dc3545' }}>BY BUDGET</span>
            </h2>
          </div>
          <div>
            <a href="#all-courses" className="text-uppercase fw-bold text-dark text-decoration-none d-flex align-items-center gap-2 hover-red" style={{ fontSize: '11px', letterSpacing: '1px' }}>
              BROWSE ALL COURSES <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Custom CSS (No Default Border, Only Top Border on Hover) */}
        <style jsx>{`
    .budget-card {
      border: none; /* डिफ़ॉल्ट चारों तरफ की बॉर्डर हटा दी */
      border-top: 3px solid transparent; /* केवल टॉप बॉर्डर होवर एनिमेशन के लिए रखी */
      border-radius: 0px; 
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03); /* डिफ़ॉल्ट रूप से बहुत हल्की शैडो ताकि कार्ड बिना बॉर्डर के दिखे */
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-top-color 0.3s ease;
      position: relative;
    }
    
    /* कार्ड होवर इफ़ेक्ट: ऊपर उठना + गहरी शैडो + टॉप बॉर्डर आना */
    .budget-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08) !important;
      border-top-color: #dc3545; /* होवर करने पर लाल/ऑरेंज टॉप बॉर्डर आएगी */
    }


    .icon-box {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f9fafb;
      border: 1px solid #f3f4f6;
    }

    .badge-custom {
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.5px;
      padding: 4px 8px;
      border-radius: 0px;
      text-transform: uppercase;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .hover-red {
      transition: color 0.2s ease;
    }
    .hover-red:hover {
      color: #dc3545 !important;
    }

    .catalog-btn {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #dc3545;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: gap 0.2s ease;
    }

    .budget-card:hover .catalog-btn {
      gap: 10px; 
    }
  `}</style>

        {/* Cards Grid Layout */}
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">

          {/* Card 1: Under 10K */}
          <div className="col">
            <div className="budget-card border h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="icon-box">
                    <i className="bi bi-lightning-charge text-danger fs-5"></i>
                  </div>
                  <span className="badge-custom bg-dark text-white">POCKET FRIENDLY</span>
                </div>

                <small className="text-muted fw-bold d-block mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</small>
                <h3 className="fw-black text-dark mb-3" style={{ fontSize: '24px', fontWeight: '900' }}>UNDER ₹10K</h3>
                <p className="text-secondary" style={{ fontSize: '12px', lineHeight: '1.5', height: '54px' }}>
                  Essential skill certificates for immediate entry-level growth.
                </p>
              </div>

              <div className="mt-4">
                <a href="#catalog-link" className="catalog-btn">
                  VIEW CATALOG <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: 10K - 25K (Most Popular) */}
          <div className="col">
            <div className="budget-card border h-100 p-4 d-flex flex-column justify-content-between popular-border">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="icon-box">
                    <i className="bi bi-shield-check text-primary fs-5"></i>
                  </div>
                  <span className="badge-custom bg-danger text-white" style={{ backgroundColor: '#dc3545' }}>MOST POPULAR</span>
                </div>

                <small className="text-muted fw-bold d-block mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</small>
                <h3 className="fw-black mb-3" style={{ fontSize: '24px', fontWeight: '900', color: '#dc3545' }}>₹10K - ₹25K</h3>
                <p className="text-secondary" style={{ fontSize: '12px', lineHeight: '1.5', height: '54px' }}>
                  Focused safety modules for specialized industrial roles.
                </p>
              </div>

              <div className="mt-4">
                <a href="#catalog-link" className="catalog-btn">
                  VIEW CATALOG <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: 25K - 55K */}
          <div className="col">
            <div className="budget-card border h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="icon-box">
                    <i className="bi bi-currency-rupee text-success fs-5"></i>
                  </div>
                  <span className="badge-custom bg-dark text-white">HIGH ROI</span>
                </div>

                <small className="text-muted fw-bold d-block mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</small>
                <h3 className="fw-black text-dark mb-3" style={{ fontSize: '24px', fontWeight: '900' }}>₹25K - ₹55K</h3>
                <p className="text-secondary" style={{ fontSize: '12px', lineHeight: '1.5', height: '54px' }}>
                  Industry-standard diplomas with high placement records.
                </p>
              </div>

              <div className="mt-4">
                <a href="#catalog-link" className="catalog-btn">
                  VIEW CATALOG <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: 55K+ */}
          <div className="col">
            <div className="budget-card border h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="icon-box">
                    <i className="bi bi-award text-dark fs-5"></i>
                  </div>
                  <span className="badge-custom bg-dark text-white">ELITE CHOICE</span>
                </div>

                <small className="text-muted fw-bold d-block mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STARTING AT</small>
                <h3 className="fw-black text-dark mb-3" style={{ fontSize: '24px', fontWeight: '900' }}>₹55K+</h3>
                <p className="text-secondary" style={{ fontSize: '12px', lineHeight: '1.5', height: '54px' }}>
                  Elite degrees and global combos for management roles.
                </p>
              </div>

              <div className="mt-4">
                <a href="#catalog-link" className="catalog-btn">
                  VIEW CATALOG <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container-fluid my-5 px-3">

        {/* Header Title Section */}
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '11px', letterSpacing: '2px' }}>
              CAMPUS LIFE & INFRASTRUCTURE
            </h6>
            <h2 className="fw-bold text-dark display-5 m-0" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
              Train where professionals <span style={{ color: '#dc3545' }}>train for real</span>
            </h2>
            <p className="text-muted m-0 mt-2" style={{ fontSize: '12px' }}>
              10-acre practical ground, 3,500+ equipment assets, 300+ hours of hands-on training, and India's only on-campus emergency fleet.
            </p>
          </div>
          <div>
            <a href="#gallery" className="text-uppercase fw-bold text-danger text-decoration-none d-flex align-items-center gap-2 hover-dark" style={{ fontSize: '11px', letterSpacing: '1px' }}>
              View Gallery Hub <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Custom CSS for Gallery Overlay, Zoom, and Line Effects */}
        <style jsx>{`
    .gallery-item {
      position: relative;
      overflow: hidden;
      background-color: #000000;
      min-height: 230px;
    }

    .gallery-img-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .gallery-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* 1. इमेज ज़ूम इफ़ेक्ट */
    .gallery-item:hover .gallery-img-wrapper img {
      transform: scale(1.06);
    }

    /* डार्क ओवरले जो स्क्रीनशॉट की तरह टेक्स्ट को उभरता है */
    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px;
      z-index: 2;
    }

    .gallery-title {
      font-size: 13px;
      font-weight: 900;
      color: #ffffff;
      text-transform: uppercase;
      margin-bottom: 4px;
      letter-spacing: 0.5px;
    }

    .gallery-desc {
      font-size: 10px;
      color: #cbd5e1;
      margin: 0;
    }

    /* होवर पर आने वाली लाल/ऑरेंज लाइन */
    .hover-line {
      width: 0px;
      height: 2px;
      background-color: #dc3545;
      margin-top: 8px;
      transition: width 0.3s ease;
    }

    .gallery-item:hover .hover-line {
      width: 30px; /* होवर करने पर लाइन बाहर आएगी */
    }

    .hover-dark {
      transition: color 0.2s ease;
    }
    .hover-dark:hover {
      color: #1f2937 !important;
    }
  `}</style>

        {/* Grid Layout: Exact Match with Row 1 & Row 2 Proportions */}
        <div className="row g-3">

          {/* ROW 1: Big Left Image (7 Columns) & Right Image (5 Columns) */}
          <div className="col-12 col-md-7">
            <div className="gallery-item h-100">
              <div className="gallery-img-wrapper">
                <img src="images/train/image1.avif" alt="Fire Tender & Ground Operations" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">FIRE TENDER & GROUND OPERATIONS</h4>
                <p className="gallery-desc">India's top tier practical training ground</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <div className="gallery-item h-100">
              <div className="gallery-img-wrapper">
                <img src="images/train/image2.avif" alt="Live Rescue Drills" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">LIVE RESCUE DRILLS</h4>
                <p className="gallery-desc">Tall ladder & rope rescue training</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

          {/* ROW 2: 3 Columns Equal Width (4-4-4) */}
          <div className="col-12 col-md-4">
            <div className="gallery-item" style={{ minHeight: '210px' }}>
              <div className="gallery-img-wrapper">
                <img src="images/train/image3.avif" alt="Live Smoke & Extinguisher Training" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">LIVE SMOKE & EXTINGUISHER TRAINING</h4>
                <p className="gallery-desc">Hands-on fire suppression</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-item" style={{ minHeight: '210px' }}>
              <div className="gallery-img-wrapper">
                <img src="images/train/image5.avif" alt="Safety Equipment Lab" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">SAFETY EQUIPMENT LAB</h4>
                <p className="gallery-desc">3,500+ modern tools & instruments</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-item" style={{ minHeight: '210px' }}>
              <div className="gallery-img-wrapper">
                <img src="images/train/image4.avif" alt="Physical Agility Training" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">PHYSICAL AGILITY TRAINING</h4>
                <p className="gallery-desc">Obstacle course & fitness drills</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

          {/* ROW 3: Full Width Bottom Slider/Strip Image */}
          <div className="col-12">
            <div className="gallery-item" style={{ minHeight: '180px' }}>
              <div className="gallery-img-wrapper">
                <img src="images/train/image4.avif" alt="Students Batch Group Grid" />
              </div>
              <div className="gallery-overlay">
                <h4 className="gallery-title">PROUD INDUSTRY PROFESSIONALS</h4>
                <p className="gallery-desc">Batches trained and ready for global deployments</p>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* FIRE & SAFETY FAQS Section with AOS */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-fluid">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>FIRE & SAFETY FAQS</small>
          </div>
          <h2 className="text-center fw-bold mb-3" style={{ color: '#1d3557' }} data-aos="fade-up">Answers to your career questions</h2>
          <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="100">Essential guidance on eligibility, salaries, course options, and admissions — preserved from our trusted legacy Fire & Safety FAQ resource.</p>

          <div className="row justify-content-center">
            <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Why are there higher job prospects after a Fire and Safety course?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body small">
                      Under the Factory Act 1948 Section 408, it is mandatory for industries of a certain scale to appoint a Safety Officer. Additionally, the global industrial revolution and increasing awareness of natural disasters have made roles like Fire Protection Engineers and HSE Managers critical for environment protection and human safety, leading to massive demand in both private and government sectors.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What is the eligibility criteria for these safety courses?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body small">10th, 12th, ITI, Diploma or Graduation from any stream depending on the course level.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      What kind of employment opportunities can I expect?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body small">Oil & Gas, Construction, Manufacturing, Government sectors, International placements, and more.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What is the starting salary for a safety professional?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body small">Starting salary ranges from 3-8 LPA for freshers, with experienced professionals earning upwards of 15-25 LPA.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      How should I choose the right Fire and Safety institute?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body small">Look for ISO certification, industry collaborations, placement records, practical training facilities, and alumni network.</div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-danger rounded-pill px-4 fw-semibold">VIEW ALL FAQS →</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container my-5 px-3">

        {/* Heading Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>
            Recognized by <span style={{ color: '#e65c1e' }}>India's top</span> industrial boards
          </h2>
        </div>

        {/* Grid Layout: Desktop standard 5 columns, fully responsive */}
        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">

          {/* Member 1 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}>
              <img
                src="images/teams/t1.jpg"
                alt="Mr. Bahauddin Ahmad"
                className="card-img-top img-fluid"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}>
                <div>
                  <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>
                    Mr. Bahauddin Ahmad
                  </h5>
                  <p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                    HONOURABLE CHAIRMAN CUM MANAGING DIRECTOR (CMD)
                  </p>
                </div>
                <div className="mt-3">
                  <div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}>
              <img
                src="images/teams/t2.jpg"
                alt="Mrs. Farhat Ahmad"
                className="card-img-top img-fluid"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}>
                <div>
                  <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>
                    Mrs. Farhat Ahmad
                  </h5>
                  <p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                    VICE CHAIRPERSON
                  </p>
                </div>
                <div className="mt-3">
                  <div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}>
              <img
                src="images/teams/t3.jpg"
                alt="Miss Sara Bilqis"
                className="card-img-top img-fluid"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}>
                <div>
                  <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>
                    Miss Sara Bilqis
                  </h5>
                  <p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                    DIRECTOR-BD
                  </p>
                </div>
                <div className="mt-3">
                  <div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}>
              <img
                src="images/teams/t4.jpg"
                alt="Ms. Priya Malhotra"
                className="card-img-top img-fluid"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}>
                <div>
                  <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>
                    Ms. Priya Malhotra
                  </h5>
                  <p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                    DIRECTOR
                  </p>
                </div>
                <div className="mt-3">
                  <div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 5 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}>
              <img
                src="images/teams/t5.jpg"
                alt="Mr. Ravi Jangde"
                className="card-img-top img-fluid"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}>
                <div>
                  <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>
                    Mr. Ravi Jangde
                  </h5>
                  <p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                    ASSOCIATE DIRECTOR
                  </p>
                </div>
                <div className="mt-3">
                  <div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Testimonial />

      {/* LEADERSHIP & VISION Section with AOS */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>LEADERSHIP & VISION</small>
          </div>
          <h3 className="fw-bold mb-3" style={{ color: '#1d3557' }} data-aos="fade-up">Recognized by India's top industrial boards</h3>
          <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
            <i className="bi bi-trophy-fill fs-1 text-warning" data-aos="zoom-in" data-aos-delay="100"></i>
            <i className="bi bi-building fs-1 text-secondary" data-aos="zoom-in" data-aos-delay="200"></i>
            <i className="bi bi-patch-check-fill fs-1 text-success" data-aos="zoom-in" data-aos-delay="300"></i>
            <i className="bi bi-shield-check fs-1 text-info" data-aos="zoom-in" data-aos-delay="400"></i>
          </div>
        </div>
      </section>

      <style>{`
        .quick-action-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .quick-action-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
          background: #ffffff !important;
        }
        .stat-card, .recognition-card, .affiliation-card, .highlight-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover, .recognition-card:hover, .affiliation-card:hover, .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .carousel-item {
          transition: transform 0.6s ease-in-out;
        }
        .accordion-button:not(.collapsed) {
          background-color: #fff0e6;
          color: #e65c1e;
        }
        .accordion-button:focus {
          box-shadow: none;
          border-color: #e65c1e40;
        }
        
        /* AOS Custom Animations */
        [data-aos] {
          pointer-events: none;
        }
        [data-aos].aos-animate {
          pointer-events: auto;
        }
        
        @media (max-width: 768px) {
          .carousel-item {
            min-height: 400px !important;
          }
          .display-4 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;