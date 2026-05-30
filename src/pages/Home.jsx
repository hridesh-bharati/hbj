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
                <div className="row">
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
            borderTop: '1px dashed #dc3545',
            borderBottom: '1px dashed #dc3545'
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
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>OUR TRACK RECORD</small>
          </div>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#1d3557' }} data-aos="fade-up">30 Years of Legacy in Numbers</h2>
          <div className="row g-4 mt-3">
            {stats.map((stat, idx) => (
              <div className="col-md-4 col-lg-2 col-6" key={idx} data-aos="flip-up" data-aos-delay={idx * 100}>
                <div className="text-center p-3 rounded-3 bg-light h-100 stat-card">
                  <h2 className="display-6 fw-bold" style={{ color: '#e65c1e' }}>{stat.number}</h2>
                  <p className="fw-semibold mb-1 small">{stat.label}</p>
                  <small className="text-muted d-block">{stat.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONOURS & RECOGNITION Section with AOS */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>HONOURS & RECOGNITION</small>
          </div>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#1d3557' }} data-aos="fade-up">Recognised by the best, awarded for excellence</h2>
          <div className="row g-4">
            {honors.map((honor, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-right" data-aos-delay={idx * 100}>
                <div className="card border-0 shadow-sm h-100 recognition-card p-3">
                  <div className="card-body">
                    <i className="bi bi-trophy-fill fs-1 text-warning mb-3"></i>
                    <h5 className="fw-bold">{honor.title}</h5>
                    <p className="text-danger fw-semibold mb-1">{honor.year}</p>
                    <small className="text-muted">{honor.sub}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* AFFILIATIONS & COLLABORATIONS Section with AOS */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>AFFILIATIONS & COLLABORATIONS</small>
          </div>
          <h2 className="text-center fw-bold mb-5" style={{ color: '#1d3557' }} data-aos="fade-up">Trusted by Governing Bodies</h2>

          <div className="row g-4">
            {affiliations.map((aff, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="flip-up" data-aos-delay={idx * 100}>
                <div className="card border-0 shadow-sm h-100 text-center p-3 affiliation-card">
                  <div className="card-body">
                    <div className="bg-light p-3 rounded mb-3">
                      <strong style={{ color: aff.color, fontSize: '18px' }}>{aff.logo}</strong>
                    </div>
                    <h6 className="fw-bold">{aff.name}</h6>
                    <p className="small text-muted mt-2">{aff.description.substring(0, 100)}...</p>
                    <button className="btn btn-sm btn-outline-danger rounded-pill mt-2">LEARN MORE →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JIFSA HIGHLIGHTS Section with AOS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>JIFSA HIGHLIGHTS</small>
          </div>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#1d3557' }} data-aos="fade-up">Experience JIFSA in Motion</h2>

          <div className="row g-4 mt-3">
            <div className="col-md-4" data-aos="fade-right" data-aos-delay="100">
              <div className="text-center p-4 border rounded-4 h-100 highlight-card">
                <i className="bi bi-check-circle-fill fs-1 text-success"></i>
                <h5 className="mt-3 fw-bold">100% PLACEMENT ASSISTANCE</h5>
                <p className="small">EXPERIENCE THE JIFSA JOURNEY FROM ENROLLMENT TO CAREER TAKEOFF</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4 border rounded-4 h-100 highlight-card">
                <i className="bi bi-geo-alt-fill fs-1 text-info"></i>
                <h5 className="mt-3 fw-bold">OUR PRESENCE ACROSS INDIA</h5>
                <p className="small">LOCAL ACCESS, GLOBAL STANDARDS</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-delay="300">
              <div className="text-center p-4 border rounded-4 h-100 highlight-card">
                <i className="bi bi-star-fill fs-1 text-warning"></i>
                <h5 className="mt-3 fw-bold">PROVEN SUCCESS PATH</h5>
                <p className="small">adani & Top Companies Trust Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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