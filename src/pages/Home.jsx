import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from "./Testimonial";
import "./Home.css";
import Courses from "./Courses";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const carouselSlides = [
    { id: 1, title: 'INDUSTRIAL SAFETY', subtitle: 'Degree, ADIS, Diploma Courses', description: '12th Pass from any stream OR 10th + 2 years recognised ITI', image: '/images/hero1.avif', buttonText: 'Explore Courses', buttonLink: '/courses' },
    { id: 2, title: 'GLOBAL PLACEMENTS', subtitle: '35,000+ placed in Aramco, ADNOC, L&T', description: 'Industry driven curriculum with 10-acre practical ground', image: '/images/hero2.avif', buttonText: 'View Placements', buttonLink: '/placements' },
    { id: 3, title: 'TUV SUD & RUNGTA Collaboration', subtitle: 'Certified Safety Officer & International Skill University', description: 'ISO Certified Institute with global recognition', image: '/images/hero3.avif', buttonText: 'Collaborations', buttonLink: '/organization' },
    { id: 4, title: 'INTERNATIONAL CERTIFICATIONS', subtitle: 'NEBOSH, IOSH, OSHA Approved Courses', description: 'Globally recognized safety certifications with placement assistance', image: '/images/hero4.avif', buttonText: 'Get Certified', buttonLink: '/courses' }
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % carouselSlides.length), 5000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % carouselSlides.length);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // WhatsApp Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918860700101";

    // Construct text template cleanly
    const text = `*New Admission Enquiry* \n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📚 *Course:* ${formData.course || 'Not Specified'}\n` +
      `💬 *Message:* ${formData.message}`;

    // Encode URL parameters
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* Hero Carousel */}
      <section id="hero" style={{ overflow: 'hidden' }}>
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

          {/* Carousel Indicators */}
          <div className="carousel-indicators mb-3 mb-md-4">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={idx === activeIndex ? 'active' : ''}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{ width: '30px', height: '4px' }}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {carouselSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  height: "clamp(60vh, 75vw, 90vh)",
                  position: 'relative'
                }}
              >
                {/* Rich Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(100deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)', zIndex: 1 }}></div>

                {/* Content Container */}
                <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
                  <div className="row w-100 mx-auto justify-content-center">

                    <div className="col-xl-8 col-lg-10 col-md-11 text-center text-white px-2 px-md-4">

                      {/* Main Title */}
                      <h1 className="fw-extrabold mb-3 text-uppercase tracking-tight display-5 display-md-3" style={{ fontWeight: 900, lineHeight: '1.1' }}>
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="fw-bold text-warning mb-3 mb-md-4 tracking-wide text-uppercase" style={{ fontSize: 'calc(1rem + 0.5vw)', letterSpacing: '1px' }}>
                        {slide.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mb-4 mb-md-5 text-light mx-auto lh-base fs-6 fs-md-5" style={{ maxWidth: '680px', fontWeight: '400', opacity: 0.85 }}>
                        {slide.description}
                      </p>

                      {/* Action Buttons Group */}
                      <div className="d-flex gap-3 justify-content-center align-items-center mt-2">
                        <button className="btn btn-warning rounded-pill px-4 py-2 py-md-3 fw-bold text-uppercase tracking-wider shadow" style={{ fontSize: 'calc(0.8rem + 0.2vw)' }}>
                          {slide.buttonText} →
                        </button>
                        <button className="btn btn-outline-light rounded-pill px-4 py-2 py-md-3 tracking-wider fw-semibold" style={{ fontSize: 'calc(0.8rem + 0.2vw)' }}>
                          Get Fees Structure
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button className="carousel-control-prev d-none d-md-flex" onClick={goToPrev} aria-label="Previous" style={{ width: '5%' }}>
            <span className="carousel-control-prev-icon p-3" style={{ backgroundSize: '100% 100%' }}></span>
          </button>
          <button className="carousel-control-next d-none d-md-flex" onClick={goToNext} aria-label="Next" style={{ width: '5%' }}>
            <span className="carousel-control-next-icon p-3" style={{ backgroundSize: '100% 100%' }}></span>
          </button>

        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-0" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row g-0 justify-content-center shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: 'bi-calculator', title: 'GET COURSE FEES', color: '#ff6b35' },
              { icon: 'bi-pencil-square', title: 'APPLY ONLINE', color: '#28a745' },
              { icon: 'bi-person-check', title: 'ADMISSION GUIDANCE', color: '#17a2b8' },
              { icon: 'bi-briefcase', title: 'PLACEMENT RECORDS', color: '#6f42c1' },
            ].map((action, idx) => (
              <div className="col-md-3 col-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="card border-0 text-center h-100 quick-action-card" style={{ background: '#ffffff', cursor: 'pointer', borderRadius: '0px', borderRight: idx !== 3 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
                  <div className="card-body py-3 d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-wrapper" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '50%' }}>
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

      {/* Who We Are */}
      <div id="about" className="px-lg-5">
        <div className="container-fluid px-0 w-100 mt-5">
          <div className="text-center mt-4 mb-2" data-aos="fade-down">
            <small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '13px', letterSpacing: '2px' }}>WHO WE ARE</small>
          </div>
          <div className="w-100 text-center py-5 px-3 mb-5 position-relative" style={{ backgroundColor: '#fff1f2', border: '1px dashed #dc3545', borderTop: '5px solid #dc3545' }}>
            <div className="container" style={{ maxWidth: '900px' }} data-aos="zoom-in">
              <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#dc3545', fontSize: '24px', letterSpacing: '0.5px' }}>Not Sure What To Do After 10th, 12th, ITI, Diploma Or Graduation?</h2>
              <p className="text-secondary mb-4 mx-auto" style={{ fontSize: '14px', maxWidth: '720px', fontWeight: '500', lineHeight: '1.6' }}>Get personalized career guidance from our expert counselors. We'll help you choose the right path for a global career in safety.</p>
              <button className="btn text-white fw-bold px-4 py-2 text-uppercase rounded-1 border-0 shadow-sm" style={{ backgroundColor: '#e63946', fontSize: '13px', letterSpacing: '1px' }}>Book Free Counseling Session →</button>
            </div>
          </div>
          <div className="container text-center mx-auto px-3 my-5" style={{ maxWidth: '1100px' }} data-aos="fade-up">
            <h1 className="fw-black mb-3" style={{ color: '#1d3557', fontSize: '38px', fontWeight: '900' }}>India's No. 1 Institute for <span style={{ color: '#e63946' }}>Fire & Industrial Safety</span></h1>
            <p className="text-muted mx-auto mb-4" style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '980px', fontWeight: '400' }}>JIFSA — St. Joseph's International Fire and Safety Academy — has been shaping India's safety professionals since 1996. With a 10-acre dedicated training ground, 3,500+ equipment assets, and a 35,000+ strong alumni network placed across top global corporations, we are the gold standard in Fire, Industrial & HSE education.</p>
            <button className="btn text-white fw-bold px-4 py-3 text-uppercase rounded-1 border-0 shadow-sm mt-2" style={{ backgroundColor: '#e63946', fontSize: '12px', letterSpacing: '1.5px' }}>Get Admission Guidance</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="courses" className="container-fluid my-5 px-0">

        {/* Course Content New */}
        <Courses />

        <div className="text-center mb-5" data-aos="fade-down">
          <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>OUR TRACK RECORD</h6>
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>30 Years of <span style={{ color: '#dc3545' }}>Legacy</span> in Numbers</h2>
        </div>
        <style>{`
          .stats-card { border: 1px solid #e5e7eb; border-radius: 0px; background: #ffffff; overflow: hidden; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
          .stats-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08); z-index: 2; }
          .img-zoom-container { overflow: hidden; position: relative; }
          .img-zoom-container img { transition: transform 0.5s ease; width: 100%; height: 100%; object-fit: cover; }
          .stats-card:hover .img-zoom-container img { transform: scale(1.06); }
        `}</style>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-6 p-4 text-center"><h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>30+</h2><p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>YEARS OF EXCELLENCE</p><small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Industry-trusted since 1996</small></div>
              <div className="col-6 img-zoom-container h-100" style={{ height: '160px' }}><img src="images/lagency/image1.avif" alt="30 Years Medal" style={{ height: "180px" }} /></div>
            </div>
          </div>
          <div className="col-12 col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-5 img-zoom-container h-100" style={{ minHeight: '160px' }}><img src="images/lagency/image2.avif" alt="Employees Placed" style={{ height: "180px" }} /></div>
              <div className="col-7 p-4 text-start ps-4"><h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>35,000+</h2><p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>EMPLOYEES PLACED GLOBALLY</p><small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Aramco, ADNOC & more</small></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="stats-card h-100 row g-0 align-items-center">
              <div className="col-6 p-4 text-center"><h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>3,500+</h2><p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>LATEST EQUIPMENTS</p><small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>& 3,000+ Modern Tools</small></div>
              <div className="col-6 img-zoom-container h-100" style={{ minHeight: '160px' }}><img src="images/lagency/image3.avif" alt="Equipments" style={{ height: "180px" }} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400"><div className="stats-card h-100 img-zoom-container" style={{ minHeight: '160px' }}><img src="images/lagency/image4.avif" alt="Fire Truck Training" style={{ height: "180px" }} /></div></div>
          <div className="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="500"><div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center"><h2 className="fw-black text-dark display-5 m-0" style={{ fontWeight: '900' }}>10 Acres</h2><p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PRACTICAL GROUND</p><small className="text-muted d-block mt-1 mx-auto" style={{ fontSize: '10px', maxWidth: '280px' }}>India's largest practical training ground of Fire & Safety for students</small></div></div>
          <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600"><div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#edf7fd', borderColor: '#e0f2fe' }}><h2 className="fw-black m-0" style={{ fontWeight: '900', color: '#0369a1', fontSize: '38px' }}>1,700</h2><p className="fw-bold text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#0369a1' }}>ONLINE & OFFLINE BATCHES</p><small className="d-block mt-1" style={{ fontSize: '10px', color: '#0284c7' }}>Completed successfully</small></div></div>
          <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700"><div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}><h2 className="fw-black text-white m-0" style={{ fontWeight: '900', fontSize: '38px' }}>35,000+</h2><p className="fw-bold text-white text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>STUDENTS TRAINED</p><small className="text-white-50 d-block mt-1" style={{ fontSize: '10px' }}>Across all programmes</small></div></div>
          <div className="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="800"><div className="stats-card h-100 p-4 text-center d-flex flex-column justify-content-center"><h2 className="fw-black text-dark m-0" style={{ fontWeight: '900', fontSize: '38px' }}>200-Cap</h2><p className="fw-bold text-dark text-uppercase m-0 mt-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>STAR LEVEL HOSTEL</p><small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>Residential on-campus facility</small></div></div>
        </div>
      </div>

      {/* Honours & Recognition */}
      <div id="gallery" className="container-fluid my-5 px-3">
        <div className="text-center mb-5" data-aos="fade-down">
          <h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>HONOURS & RECOGNITION</h6>
          <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>Recognised by the best, <span style={{ color: '#dc3545' }}>awarded for excellence</span></h2>
        </div>
        <style>{`
          .award-card { border: 1px solid #e5e7eb; border-radius: 4px; background: #ffffff; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease; }
          .award-card:hover { transform: translateY(-6px); border-color: #dc3545 !important; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important; z-index: 2; }
          .img-container { overflow: hidden; position: relative; height: 170px; }
          .img-container img { transition: transform 0.5s ease; width: 100%; height: 100%; object-fit: cover; }
          .award-card:hover .img-container img { transform: scale(1.06); }
          .award-title-link { font-size: 14px; font-weight: 800; color: #1f2937; line-height: 1.4; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; height: 60px; transition: color 0.3s ease; }
          .award-card:hover .award-title-link { color: #dc3545; }
          .red-left-border { border-left: 2px solid #dc3545; padding-left: 12px; }
        `}</style>
        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          {[
            { title: 'ICONIC ACADEMY AWARDED BY GOVERNOR OF MAHARASHTRA', year: 'TIMES APPLAUD TRENDSETTER 2024', img: 'images/recognised/image1.avif' },
            { title: 'BEST BRAND IN OH&S AND FIRE SAFETY AWARDED BY TIMES GROUP', year: 'TIMES BRAND ICON 2021', img: 'images/recognised/image2.avif' },
            { title: 'AWARDED BY CHIEF MINISTER OF CHHATTISGARH', year: 'FOR ACADEMIC EXCELLENCE AWARD', img: 'images/recognised/image3.avif' },
            { title: 'SHREE MAHATMA GANDHI RASHTRIYA ABHIMAN PURASKAR 2023', year: 'FOR TECHNICAL TRAINING CONTRIBUTION', img: 'images/recognised/image4.avif' },
          ].map((item, idx) => (
            <div className="col" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="award-card h-100 d-flex flex-column justify-content-between p-3">
                <div><div className="red-left-border mb-2"><a href="#link" className="award-title-link">{item.title}, {item.year}</a></div><small className="text-muted fw-bold tracking-wider d-block mb-3" style={{ fontSize: '9px' }}>OFFICIAL RECOGNITION</small><div className="img-container rounded-1 bg-light"><img src={item.img} alt="Award" /></div></div>
                <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top"><small className="fw-bold text-muted" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>VERIFIED EXCELLENCE</small><span className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>■■■</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Certifications */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4" data-aos="zoom-in"><h3 className="fw-bold text-uppercase" style={{ color: '#1d3557', fontSize: '20px' }}>ADDITIONAL CERTIFICATIONS & ASSOCIATES</h3></div>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {['GENERAL SAFETY', 'INDIAN IRON & STEEL SECTOR SKILL COUNCIL', 'DIRECTORATE OF INDUSTRIAL SAFETY & HEALTH', 'DGMS'].map((cert, idx) => (
              <span key={idx} className="badge px-4 py-2 rounded-pill" style={{ backgroundColor: '#e65c1e', color: 'white', fontSize: '12px' }} data-aos="flip-left" data-aos-delay={idx * 50}>{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Collaborations */}
      <div className="container-fluid my-5 px-3">
        <div className="text-center mb-5" data-aos="fade-down"><h6 className="text-uppercase fw-bold text-danger tracking-widest mb-1" style={{ fontSize: '12px', letterSpacing: '2px' }}>AFFILIATIONS & COLLABORATIONS</h6><h2 className="fw-bold text-dark display-6" style={{ fontWeight: '850', letterSpacing: '-0.5px' }}>Trusted by <span style={{ color: '#dc3545' }}>Governing Bodies</span></h2></div>
        <style>{`
          .collab-wrapper { background: #ffffff; border: 1px solid #f3f4f6; transition: transform 0.4s ease, box-shadow 0.4s ease; }
          .collab-wrapper:hover { transform: translateY(-4px); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06); }
          .collab-img-container { overflow: hidden; border: 1px solid #e5e7eb; background: #ffffff; padding: 15px; }
          .collab-img-container img { transition: transform 0.5s ease; width: 100%; height: auto; object-fit: contain; }
          .collab-wrapper:hover .collab-img-container img { transform: scale(1.04); }
          .btn-dark-custom { background-color: #0b1320; color: #ffffff; font-size: 11px; font-weight: 700; letter-spacing: 1px; padding: 12px 24px; border-radius: 0px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background-color 0.2s ease; }
          .btn-dark-custom:hover { background-color: #dc3545; color: #ffffff; }
        `}</style>
        <div className="d-flex flex-column gap-5">
          {[
            { name: 'RUNGTA INTERNATIONAL SKILL UNIVERSITY', img: 'images/trusted/image1.avif', desc: 'JIFSA is proud to be associated with Rungta International Skill University, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety. This collaboration strengthens our commitment to industry standards and global safety protocols.', side: 'left' },
            { name: 'TÜV SÜD COLLABORATION', img: 'images/trusted/image2.avif', desc: 'JIFSA is proud to be associated with TÜV SÜD Collaboration, ensuring our students receive the highest quality training and globally recognised certifications in Fire and Industrial Safety.', side: 'right' },
            { name: 'INDIAN IRON & STEEL SECTOR SKILL COUNCIL', img: 'images/trusted/image3.webp', desc: 'JIFSA is proud to be associated with Indian Iron & Steel Sector Skill Council, ensuring our students receive the highest quality training and globally recognised certifications.', side: 'left' },
            { name: 'DGMS (DIRECTORATE GENERAL OF MINES SAFETY)', img: 'images/trusted/image4.avif', desc: 'JIFSA is proud to be associated with DGMS, ensuring our students receive the highest quality training and globally recognised certifications.', side: 'right' },
          ].map((item, idx) => (
            <div key={idx} className={`row align-items-center g-4 p-3 collab-wrapper ${item.side === 'right' ? 'flex-md-row-reverse' : ''}`} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="col-12 col-md-6"><div className="collab-img-container"><img src={item.img} alt={item.name} /></div></div>
              <div className="col-12 col-md-6 ps-md-4 text-start"><small className="text-danger fw-bold tracking-wider d-block mb-2" style={{ fontSize: '10px' }}>VERIFIED ACADEMIC PARTNER</small><h3 className="fw-black text-dark mb-3" style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.3px' }}>{item.name}</h3><p className="text-secondary lh-base mb-3" style={{ fontSize: '13px', color: '#4b5563' }}>{item.desc}</p><div className="d-flex align-items-center gap-2 text-muted mb-4" style={{ fontSize: '11px', fontWeight: '600' }}><i className="bi bi-check-circle text-danger"></i> ACCREDITED ACADEMIC PARTNER</div><a href="#learn-more" className="btn-dark-custom">LEARN MORE <i className="bi bi-arrow-right"></i></a></div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-fluid"><div className="text-center mb-3" data-aos="fade-down"><small className="fw-bold text-uppercase" style={{ color: '#dc3545', fontSize: '12px' }}>FIRE & SAFETY FAQS</small></div><h2 className="text-center fw-bold mb-3" style={{ color: '#1d3557' }} data-aos="fade-up">Answers to your career questions</h2><p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="100">Essential guidance on eligibility, salaries, course options, and admissions — preserved from our trusted legacy Fire & Safety FAQ resource.</p>
          <div className="row justify-content-center"><div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200"><div className="accordion" id="faqAccordion">
            <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">Why are there higher job prospects after a Fire and Safety course?</button></h2><div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion"><div className="accordion-body small">Under the Factory Act 1948 Section 408, it is mandatory for industries of a certain scale to appoint a Safety Officer. Additionally, the global industrial revolution and increasing awareness of natural disasters have made roles like Fire Protection Engineers and HSE Managers critical, leading to massive demand.</div></div></div>
            <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">What is the eligibility criteria for these safety courses?</button></h2><div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body small">10th, 12th, ITI, Diploma or Graduation from any stream depending on the course level.</div></div></div>
            <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What kind of employment opportunities can I expect?</button></h2><div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body small">Oil & Gas, Construction, Manufacturing, Government sectors, International placements, and more.</div></div></div>
            <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">What is the starting salary for a safety professional?</button></h2><div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body small">Starting salary ranges from 3-8 LPA for freshers, with experienced professionals earning upwards of 15-25 LPA.</div></div></div>
            <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">How should I choose the right Fire and Safety institute?</button></h2><div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body small">Look for ISO certification, industry collaborations, placement records, practical training facilities, and alumni network.</div></div></div>
          </div>
          </div></div></div>
      </section>

      {/* Leadership Team */}
      <div className="container-fluid my-5"><div className="text-center mb-5" data-aos="fade-down"><h2 className="fw-bold text-dark display-6" style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>The Minds Behind <span style={{ color: '#e65c1e' }}>JIFSA Organization</span></h2></div>
        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {[
            { name: 'Mr. Bahauddin Ahmad', role: 'HONOURABLE CHAIRMAN CUM MANAGING DIRECTOR (CMD)', img: 'images/teams/t1.avif' },
            { name: 'Mrs. Farhat Ahmad', role: 'VICE CHAIRPERSON', img: 'images/teams/t2.avif' },
            { name: 'Miss Sara Bilqis', role: 'DIRECTOR-BD', img: 'images/teams/t3.avif' },
            { name: 'Ms. Priya Malhotra', role: 'DIRECTOR', img: 'images/teams/t4.avif' },
            { name: 'Mr. Ravi Jangde', role: 'ASSOCIATE DIRECTOR', img: 'images/teams/t5.avif' },
          ].map((member, idx) => (
            <div className="col" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}><div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '0px', overflow: 'hidden' }}><img src={member.img} alt={member.name} className="card-img-top img-fluid" style={{ width: '100%', height: '240px', objectFit: 'cover' }} /><div className="card-body px-3 py-3 d-flex flex-column justify-content-between text-start" style={{ backgroundColor: '#fff5f2' }}><div><h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '14px', fontWeight: '800' }}>{member.name}</h5><p className="card-text text-muted fw-semibold text-uppercase m-0" style={{ fontSize: '10px', letterSpacing: '0.3px', lineHeight: '1.4' }}>{member.role}</p></div><div className="mt-3"><div style={{ width: '25px', height: '2px', backgroundColor: '#e65c1e' }}></div></div></div></div></div>
          ))}
        </div></div>

      {/* Testimonials */}
      <Testimonial />

      {/* Placement & Franchise */}
      <div className="franchise-section-wrapper py-5">
        <div className="container px-3">
          <div className="row g-4 align-items-center">

            {/* LEFT COLUMN: Text Info & Quick Stats */}
            <div className="col-12 col-lg-4 text-start text-white" data-aos="fade-right">
              <h6 className="franchise-sub-title text-uppercase fw-bold text-danger mb-2">
                BUSINESS OPPORTUNITY
              </h6>
              <h2 className="franchise-main-title fw-bold mb-3">
                Start Your JIFSA <span className="highlight-red">Franchise</span>
              </h2>
              <p className="franchise-desc text-secondary mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Join India's leading network in Fire & Industrial Safety education. Build a profitable business with a brand trusted by top corporations for 30 years.
              </p>

              {/* Stats List Blocks */}
              <div className="d-flex flex-column gap-3 mt-4 franchise-stats-list">
                <div className="stat-item-row">
                  <span className="stat-label">LEGACY SINCE</span>
                  <h4 className="stat-value">1996</h4>
                </div>
                <div className="stat-item-row">
                  <span className="stat-label">INDIA PRESENCE</span>
                  <h4 className="stat-value">50+ CENTERS</h4>
                </div>
                <div className="stat-item-row">
                  <span className="stat-label">ALUMNI NETWORK</span>
                  <h4 className="stat-value">35,000+</h4>
                </div>
                <div className="stat-item-row">
                  <span className="stat-label">ROI POTENTIAL</span>
                  <h4 className="stat-value">85% TARGET</h4>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: 4 Feature Grid Cards */}
            <div className="col-12 col-md-7 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row g-3">

                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="feature-dark-card text-center p-3">
                    <div className="feature-icon-box mb-2 text-danger">
                      <i className="bi bi-shield-check fs-4"></i>
                    </div>
                    <h5 className="feature-card-title">India's #1 Safety Brand</h5>
                    <p className="feature-card-text">Partner with a 28-year legacy in Fire & Industrial Safety education trusted globally.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="feature-dark-card text-center p-3">
                    <div className="feature-icon-box mb-2 text-danger">
                      <i className="bi bi-graph-up-arrow fs-4"></i>
                    </div>
                    <h5 className="feature-card-title">Proven Business Model</h5>
                    <p className="feature-card-text">Verified training framework with rapid ROI and established recruitment pathways.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-sm-6">
                  <div className="feature-dark-card text-center p-3">
                    <div className="feature-icon-box mb-2 text-danger">
                      <i className="bi bi-people fs-4"></i>
                    </div>
                    <h5 className="feature-card-title">Placement Power</h5>
                    <p className="feature-card-text">Connect your students directly to L&T, Reliance & Aramco via our JIFSA placement programme.</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-12 col-sm-6">
                  <div className="feature-dark-card text-center p-3">
                    <div className="feature-icon-box mb-2 text-danger">
                      <i className="bi bi-book fs-4"></i>
                    </div>
                    <h5 className="feature-card-title">Full Academic Support</h5>
                    <p className="feature-card-text">Comprehensive curriculum, B.Voc and international certification, and expert faculty training.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: White High-Converting Form Card */}
            <div className="col-12 col-md-5 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="franchise-white-card p-4 text-start bg-white border-top-danger-heavy">
                <h3 className="form-card-title text-dark fw-bold mb-2">Start Your JIFSA Franchise</h3>
                <p className="form-card-desc text-muted mb-4" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  Explore our full franchise programme — territory exclusivity, 85% target ROI, and dedicated HQ support from day one.
                </p>

                {/* Checklist Features */}
                <div className="d-flex flex-column gap-2 mb-4 checklist-wrapper">
                  <div className="d-flex align-items-center gap-2 checklist-item">
                    <i className="bi bi-check2-circle text-success fs-5"></i>
                    <span className="checklist-text">Zero royalty for the first year</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 checklist-item">
                    <i className="bi bi-check2-circle text-success fs-5"></i>
                    <span className="checklist-text">Full curriculum & faculty training provided</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 checklist-item">
                    <i className="bi bi-check2-circle text-success fs-5"></i>
                    <span className="checklist-text">100% placement assistance included</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 checklist-item">
                    <i className="bi bi-check2-circle text-success fs-5"></i>
                    <span className="checklist-text">Dedicated support from HQ expansion team</span>
                  </div>
                </div>

                {/* CTA Action Button */}
                <button className="btn-success-model-cta w-100 d-flex align-items-center justify-content-center gap-2 py-2 mb-3">
                  VIEW SUCCESS MODEL <i className="bi bi-arrow-right"></i>
                </button>

                {/* Footer Availability Badge */}
                <div className="d-flex align-items-center justify-content-center gap-1 text-muted text-uppercase" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.3px' }}>
                  <i className="bi bi-shield-fill-check text-success"></i> DEDICATED FRANCHISE TEAM AVAILABLE MON-SAT
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Placement Timeline */}
      <div className="placement-flow-wrapper my-5 px-3">
        <div className="text-center mb-5" data-aos="fade-down">
          <h6 className="placement-section-tag text-uppercase fw-bold text-danger mb-1">
            PROVEN SUCCESS PATH
          </h6>
          <h2 className="placement-hero-title fw-bold text-dark display-5 m-0">
            100% PLACEMENT <span className="highlight-accent">ASSISTANCE</span>
          </h2>
          <p className="placement-section-desc text-muted mt-2">
            EXPERIENCE THE JIFSA JOURNEY FROM ENROLLMENT TO CAREER TAKEOFF.
          </p>
        </div>

        <div className="placement-timeline-row g-4 text-center position-relative mt-4">

          {/* Step 1 */}
          <div className="col-6 col-sm-4 placement-column-item" data-aos="fade-up" data-aos-delay="100">
            <div className="placement-node-container mx-auto mb-3">
              <span className="placement-step-counter">01</span>
              <div className="placement-icon-badge">
                <i className="bi bi-book text-white"></i>
              </div>
            </div>
            <h5 className="placement-step-heading m-0">CHOOSE CAREER</h5>
            <span className="placement-step-subheading">EXPERT CONSULTATION</span>
          </div>

          <div className="d-none d-lg-flex placement-arrow-box">
            <div className="placement-arrow-graphics"></div>
          </div>

          {/* Step 2 */}
          <div className="col-6 col-sm-4 placement-column-item" data-aos="fade-up" data-aos-delay="200">
            <div className="placement-node-container mx-auto mb-3">
              <span className="placement-step-counter">02</span>
              <div className="placement-icon-badge">
                <i className="bi bi-file-earmark-check text-white"></i>
              </div>
            </div>
            <h5 className="placement-step-heading m-0">SUBMIT DOCS</h5>
            <span className="placement-step-subheading">VERIFIED ADMISSION</span>
          </div>

          <div className="d-none d-lg-flex placement-arrow-box">
            <div className="placement-arrow-graphics"></div>
          </div>

          {/* Step 3 */}
          <div className="col-6 col-sm-4 placement-column-item" data-aos="fade-up" data-aos-delay="300">
            <div className="placement-node-container mx-auto mb-3">
              <span className="placement-step-counter">03</span>
              <div className="placement-icon-badge">
                <i className="bi bi-currency-rupee text-white"></i>
              </div>
            </div>
            <h5 className="placement-step-heading m-0">PAY FEES</h5>
            <span className="placement-step-subheading">EASY EMI OPTIONS</span>
          </div>

          <div className="d-none d-lg-flex placement-arrow-box">
            <div className="placement-arrow-graphics"></div>
          </div>

          {/* Step 4 */}
          <div className="col-6 col-sm-4 placement-column-item" data-aos="fade-up" data-aos-delay="400">
            <div className="placement-node-container mx-auto mb-3">
              <span className="placement-step-counter">04</span>
              <div className="placement-icon-badge">
                <i className="bi bi-rocket-takeoff text-white"></i>
              </div>
            </div>
            <h5 className="placement-step-heading m-0">START COURSE</h5>
            <span className="placement-step-subheading">HANDS-ON TRAINING</span>
          </div>

          <div className="d-none d-lg-flex placement-arrow-box">
            <div className="placement-arrow-graphics"></div>
          </div>

          {/* Step 5 */}
          <div className="col-6 col-sm-4 placement-column-item" data-aos="fade-up" data-aos-delay="500">
            <div className="placement-node-container mx-auto mb-3">
              <span className="placement-step-counter">05</span>
              <div className="placement-icon-badge">
                <i className="bi bi-briefcase text-white"></i>
              </div>
            </div>
            <h5 className="placement-step-heading m-0">GET YOUR JOB</h5>
            <span className="placement-step-subheading">100% PLACEMENT</span>
          </div>

        </div>
      </div>

      {/* Hiring Partners */}
      <div id="apply" className="placement-section-container my-5 px-3">
        <div className="row g-5">

          <div className="col-12 col-lg-5 text-start" data-aos="fade-right">
            <h6 className="placement-sub-title text-uppercase fw-bold text-danger mb-2">
              PLACEMENT INTIATIVE
            </h6>
            <h2 className="placement-main-title fw-bold text-dark display-6 mb-3">
              Proven <span className="highlight-red">Placement Record</span>
            </h2>
            <p className="placement-desc text-muted mb-5">
              JIFSA's placement drive is India's most active safety sector career network.
              We connect you directly with over 500+ global hiring partners with verified CTC packages — 100% placement assistance.
            </p>

            <h6 className="partners-title text-uppercase fw-bold text-danger mb-3">
              HIRING PARTNERS
            </h6>
            <div className="d-flex flex-wrap gap-2 partners-badges-wrapper">
              <span className="partner-badge">Bharat Petroleum</span>
              <span className="partner-badge">Emami</span>
              <span className="partner-badge">L&T</span>
              <span className="partner-badge">Vodafone</span>
              <span className="partner-badge">Reliance Industries</span>
              <span className="partner-badge">Macawber Beekay</span>
              <span className="partner-badge">Decathlon</span>
              <span className="partner-badge">Asian Paints</span>
            </div>
          </div>

          {/* Live Job Data List */}
          <div className="col-12 col-lg-7 text-start" data-aos="fade-left" data-aos-delay="200">
            <div className="d-flex align-items-center gap-2 mb-4">
              <span className="live-dot-square">■</span>
              <h6 className="live-job-title text-uppercase fw-bold text-dark m-0">
                LIVE JOB DATA
              </h6>
            </div>

            <div className="d-flex flex-column gap-3">

              {/* Job 1: HSE Officer */}
              <div className="job-list-card d-flex align-items-center justify-content-between p-3 flex-wrap gap-3 hse-officer-card">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="job-char-avatar avatar-dark">H</div>
                  <div>
                    <h5 className="job-role-title m-0">HSE OFFICER</h5>
                    <div className="job-meta-info d-flex align-items-center gap-3 mt-1">
                      <span><i className="bi bi-building me-1"></i> HSE Integro</span>
                      <span><i className="bi bi-geo-alt me-1"></i> Gujarat</span>
                    </div>
                    <div className="job-salary-tag mt-1">
                      <i className="bi bi-currency-rupee"></i> 40k-45k/mo
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap action-btns-wrapper">
                  <button className="btn-salary-opp"><i className="bi bi-eye me-1"></i> SEE SALARY OPPORTUNITY</button>
                  <button className="btn-get-details"><i className="bi bi-briefcase me-1"></i> GET PLACEMENT DETAILS</button>
                </div>
              </div>

              {/* Job 2: Safety Supervisor */}
              <div className="job-list-card d-flex align-items-center justify-content-between p-3 flex-wrap gap-3 safety-super-card">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="job-char-avatar avatar-red">T</div>
                  <div>
                    <h5 className="job-role-title m-0">SAFETY SUPERVISOR</h5>
                    <div className="job-meta-info d-flex align-items-center gap-3 mt-1">
                      <span><i className="bi bi-building me-1"></i> Tata Metallic</span>
                      <span><i className="bi bi-geo-alt me-1"></i> Maharashtra</span>
                    </div>
                    <div className="job-salary-tag mt-1">
                      <i className="bi bi-currency-rupee"></i> 20k-35k/mo
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap action-btns-wrapper">
                  <button className="btn-salary-opp"><i className="bi bi-eye me-1"></i> SEE SALARY OPPORTUNITY</button>
                  <button className="btn-get-details"><i className="bi bi-briefcase me-1"></i> GET PLACEMENT DETAILS</button>
                </div>
              </div>

              {/* Job 3: Fire Safety Officer */}
              <div className="job-list-card d-flex align-items-center justify-content-between p-3 flex-wrap gap-3 fire-safety-card">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="job-char-avatar avatar-blue">L</div>
                  <div>
                    <h5 className="job-role-title m-0">FIRE SAFETY OFFICER</h5>
                    <div className="job-meta-info d-flex align-items-center gap-3 mt-1">
                      <span><i className="bi bi-building me-1"></i> L&T Construction</span>
                      <span><i className="bi bi-geo-alt me-1"></i> PAN India</span>
                    </div>
                    <div className="job-salary-tag mt-1">
                      <i className="bi bi-currency-rupee"></i> 30k-50k/mo
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap action-btns-wrapper">
                  <button className="btn-salary-opp"><i className="bi bi-eye me-1"></i> SEE SALARY OPPORTUNITY</button>
                  <button className="btn-get-details"><i className="bi bi-briefcase me-1"></i> GET PLACEMENT DETAILS</button>
                </div>
              </div>

              {/* Job 4: HSE Manager */}
              <div className="job-list-card d-flex align-items-center justify-content-between p-3 flex-wrap gap-3 hse-manager-card">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="job-char-avatar avatar-green">B</div>
                  <div>
                    <h5 className="job-role-title m-0">HSE MANAGER</h5>
                    <div className="job-meta-info d-flex align-items-center gap-3 mt-1">
                      <span><i className="bi bi-building me-1"></i> BPCL Refinery</span>
                      <span><i className="bi bi-geo-alt me-1"></i> Mumbai</span>
                    </div>
                    <div className="job-salary-tag mt-1">
                      <i className="bi bi-currency-rupee"></i> 55k-80k/mo
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap action-btns-wrapper">
                  <button className="btn-salary-opp"><i className="bi bi-eye me-1"></i> SEE SALARY OPPORTUNITY</button>
                  <button className="btn-get-details"><i className="bi bi-briefcase me-1"></i> GET PLACEMENT DETAILS</button>
                </div>
              </div>

            </div>

            <div className="text-end mt-3">
              <a href="#all-positions" className="view-all-jobs-link fw-bold text-decoration-none">
                See Salary Packages; <i className="bi bi-arrow-right small"></i> View all open positions <i className="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="contact-section-wrapper my-5 p-3 border-top">
        <div className="container px-0">

          <div className="text-center mb-5" data-aos="fade-down">
            <h6 className="contact-sub-title text-uppercase fw-bold text-danger mb-2">
              GET IN TOUCH
            </h6>
            <h2 className="contact-main-title fw-bold text-dark display-5 m-0">
              Connect With Our <span className="highlight-red">Expert Team</span>
            </h2>
            <p className="contact-desc text-muted mt-2">
              HAVE QUESTIONS? WE ARE HERE TO HELP YOU BUILD A SECURE FUTURE.
            </p>
          </div>

          <div className="row g-4 align-items-stretch mt-4">

            {/* LEFT COLUMN: Modern Interactive Contact Form */}
            <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="contact-form-card p-4 h-100 bg-white">
                <h4 className="form-inner-title mb-4">Send Us A Message</h4>

                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3">

                    <div className="col-12 col-sm-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">YOUR NAME</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control-custom"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control-custom"
                          placeholder="example@mail.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">PHONE NUMBER</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control-custom"
                          placeholder="+91 8860700101"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">SUBJECT / COURSE INTEREST</label>
                        <input
                          type="text"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="form-custom-select form-control-custom"
                          placeholder="Fire & Safety Diploma"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group-custom">
                        <label className="form-label-custom">YOUR MESSAGE</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-control-custom text-area-custom"
                          rows="4"
                          placeholder="Write your query here..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-contact-submit w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                        SUBMIT ENQUIRY <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Quick Contact Info & Google Map */}
            <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex flex-column gap-3 h-100">

                <div className="row g-3">

                  <div className="col-12 col-sm-6">
                    <div className="info-quick-card p-3 d-flex align-items-center gap-3">
                      <div className="info-icon-box text-danger">
                        <i className="bi bi-telephone-outbound fs-4"></i>
                      </div>
                      <div>
                        <span className="info-label">CALL US ANYTIME</span>
                        <h6 className="info-value">+91 8860700101</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="info-quick-card p-3 d-flex align-items-center gap-3">
                      <div className="info-icon-box text-danger">
                        <i className="bi bi-envelope-open fs-4"></i>
                      </div>
                      <div>
                        <span className="info-label">EMAIL SUPPORT</span>
                        <a
                          href="mailto:jifsadehli101@gmail.com"
                          className="text-decoration-none fw-bold"
                          style={{ color: 'inherit' }}
                        >
                          jifsadelhi101@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Interactive Live Google Map Container */}
                <div className="flex-grow-1 contact-map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.7594023302954!2d77.0932222!3d28.6369722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzEzLjEiTiA3N8KwMDUnMzUuNiJF!5e0!3m2!1sen!2sin!4v1780557249443!5m2!1sen!2sin"
                    className="w-100 h-100 border-0 map-iframe-element"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                    style={{ minHeight: '300px' }}
                  ></iframe>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Leadership & Vision Icons */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div className="text-center mb-3" data-aos="fade-down">
            <small className="fw-bold text-uppercase text-danger" style={{ fontSize: '11px', letterSpacing: '2px' }}>LEADERSHIP & VISION</small>
          </div>
          <h3 className="fw-bold mb-4 text-dark" data-aos="fade-up" style={{ fontSize: '1.75rem' }}>Recognized by India's top industrial boards</h3>
          <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '65px', height: '65px' }}>
                <i className="bi bi-trophy-fill text-warning fs-1"></i>
              </div>
              <small className="text-secondary text-uppercase" style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '0.5px' }}>AWARDS</small>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '65px', height: '65px' }}>
                <i className="bi bi-building text-secondary fs-1"></i>
              </div>
              <small className="text-secondary text-uppercase" style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '0.5px' }}>INDUSTRY</small>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '65px', height: '65px' }}>
                <i className="bi bi-patch-check-fill text-success fs-1"></i>
              </div>
              <small className="text-secondary text-uppercase" style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '0.5px' }}>CERTIFIED</small>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '65px', height: '65px' }}>
                <i className="bi bi-shield-check text-info fs-1"></i>
              </div>
              <small className="text-secondary text-uppercase" style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '0.5px' }}>SAFETY</small>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;