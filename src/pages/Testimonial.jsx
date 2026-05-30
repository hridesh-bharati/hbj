import React from 'react';

const Testimonials = () => {
  // 10 कार्ड्स का डेटा एरे (जैसा आपके स्क्रीनशॉट में है)
const testimonialData = [
  {
    id: 1,
    name: "Umesh Enagandula",
    tag: "INTERNATIONAL PLACEMENT",
    role: "PERMIT RECEIVER",
    company: "RISAL (RAWABI INDUSTRIAL)",
    placement: "PLACEMENT: 2500 RIYAL/MONTH",
    location: "SAUDI ARABIA",
    img: "images/std/team-1.jpg",
    text: "Heartfelt thanks to JIFSA for their constant support, guidance, and excellent training that enhanced my technical and professional skills. Grateful to the placement team for their encouragement and direction — their efforts helped me achieve this global career opportunity."
  },
  {
    id: 2,
    name: "Ausaf Shaikh",
    tag: "INTERNATIONAL PLACEMENT",
    role: "FIRE-WATCH",
    company: "EXPERTISE CONTRACTING CO.",
    placement: null,
    location: "SAUDI ARABIA",
    img: "images/std/team-2.jpg",
    text: "Thank you JIFSA placement department for providing me an opportunity to get shortlisted and also got an opportunity for the interview in the International Company for the position of Fire Watch. I would suggest if you are looking for a fire and safety course go for JIFSA."
  },
  {
    id: 3,
    name: "Shaikh Jamal",
    tag: "INTERNATIONAL PLACEMENT",
    role: "FIRE WATCHER",
    company: "AL-MUZAIN COMPANY",
    placement: null,
    location: "SAUDI ARABIA",
    img: "images/std/team-3.jpg",
    text: "I am excited to share that I have been placed with Al-Muzain Company in Saudi Arabia, thanks to your excellent placement assistance. Your support was invaluable, and I highly recommend JIFSA Academy to anyone seeking top-notch international placement services."
  },
  {
    id: 4,
    name: "Saqlein",
    tag: "INTERNATIONAL PLACEMENT",
    role: "SAFETY OFFICER",
    company: "KSA, QATAR",
    placement: "PLACEMENT: 2000 RIYAL/MONTH",
    location: "MIDDLE EAST",
    img: "images/std/team-4.jpg",
    text: "The high-quality training, personality development sessions, and continuous guidance I received there equipped me with the essential knowledge and practical skills required to excel in my profession. I wholeheartedly recommend JIFSA to anyone aspiring to build a strong and successful career."
  },
  {
    id: 5,
    name: "Rahul Sharma",
    tag: "INTERNATIONAL PLACEMENT",
    role: "SAFETY SUPERVISOR",
    company: "ARAMCO",
    placement: "PLACEMENT: 3500 RIYAL/MONTH",
    location: "SAUDI ARABIA",
    img: "images/std/team-5.jpg",
    text: "Joining JIFSA was the turning point of my career. The practical training sessions mimics real world challenges which helped me clear my client interview in the very first attempt."
  },
  {
    id: 6,
    name: "Mohammad Ali",
    tag: "INTERNATIONAL PLACEMENT",
    role: "FIRE TECHNICIAN",
    company: "NASS CONTRACTING",
    placement: null,
    location: "BAHRAIN",
    img: "images/std/team-6.jpg",
    text: "The deep emphasis on technical safety protocols taught by industry experts at JIFSA gave me an edge over other international candidates. Truly an iconic academy."
  },
  {
    id: 7,
    name: "Vikram Singh",
    tag: "INTERNATIONAL PLACEMENT",
    role: "HSE ENGINEER",
    company: "DESCON ENGINEERING",
    placement: "PLACEMENT: 4000 AED/MONTH",
    location: "DUBAI, UAE",
    img: "images/std/team-7.jpg",
    text: "Exceptional placement desk! They guided me from resume building to Mock interviews. I am proud to represent JIFSA internationally here in Dubai."
  },
  {
    id: 8,
    name: "Amit Patel",
    tag: "INTERNATIONAL PLACEMENT",
    role: "SAFETY INSPECTOR",
    company: "AL-YAMAMA COMPLEX",
    placement: null,
    location: "SAUDI ARABIA",
    img: "images/std/team-8.jpg",
    text: "JIFSA is the best institute for Fire and Safety courses. Highly advanced labs and cooperative faculty members who are always ready to help you even after completion of the course."
  },
  {
    id: 9,
    name: "Anas Khan",
    tag: "INTERNATIONAL PLACEMENT",
    role: "FIRE OFFICER",
    company: "QATAR ENERGY",
    placement: "PLACEMENT: 3000 QAR/MONTH",
    location: "QATAR",
    img: "images/std/team-9.jpg",
    text: "I am deeply indebted to the rigorous training standards of JIFSA. It gave me the confidence to handle high-stress safety operations flawlessly in my current enterprise."
  },
  {
    id: 10,
    name: "Deepak Kumar",
    tag: "INTERNATIONAL PLACEMENT",
    role: "SAFETY ASSISTANT",
    company: "KENT ENERGIES",
    placement: null,
    location: "KUWAIT",
    img: "images/std/team-10.jpg",
    text: "Excellent course structure combined with premium global placement opportunities. JIFSA delivers exactly what it promises on day one."
  }
];
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
  };

  const desktopChunks = chunkArray(testimonialData, 4);

  return (
    <div className="testimonial-section py-5 bg-light position-relative">
      <div className="container-fluid px-md-5">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-danger fw-bold tracking-widest" style={{ fontSize: '13px', letterSpacing: '2px' }}>
            STUDENT SUCCESS STORIES
          </h6>
          <h2 className="fw-black text-dark display-6 mt-2" style={{ fontWeight: '900' }}>
            Real students, <span className="text-danger" style={{ color: '#e65c1e' }}>real careers</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner px-2">
            
            {desktopChunks.map((chunk, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row g-4 mx-0 justify-content-center">
                  
                  {chunk.map((student) => (
                    <div className="col-12 col-md-6 col-lg-3" key={student.id}>
                      <div className="card h-100 border-danger position-relative custom-card">
                        
                        {/* International Placement Orange Badge */}
                        <div className="position-absolute end-0 top-0 bg-danger text-white px-2 py-1 fw-bold tracking-wider rounded-bottom-start" style={{ fontSize: '9px', backgroundColor: '#e65c1e', zIndex: 2 }}>
                          {student.tag}
                        </div>

                        <div className="card-body pt-4 px-3 position-relative d-flex flex-column justify-content-between">
                          
                          <div>
                            {/* Profile Header Block */}
                            <div className="d-flex align-items-center gap-2 mb-3">
                              <img 
                                src={student.img} 
                                alt={student.name} 
                                className="rounded border bg-light" 
                                style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                              />
                              <div>
                                <h5 className="card-title fw-extrabold text-dark m-0" style={{ fontSize: '15px', fontWeight: '800' }}>
                                  {student.name}
                                </h5>
                                <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: '10px' }}>
                                  INTERNATIONAL PLACEMENT
                                </small>
                              </div>
                              {/* Background Quote Watermark icon */}
                              <span className="ms-auto display-4 text-light position-absolute end-0 top-0 pe-2 pt-4 fw-normal opacity-25 select-none" style={{ fontFamily: 'serif', fontSize: '60px', pointerEvents: 'none' }}>”</span>
                            </div>

                            {/* Job Details Meta */}
                            <div className="mb-2">
                              <div className="d-flex align-items-center gap-1 text-dark fw-bold" style={{ fontSize: '11px' }}>
                                <i className="bi bi-briefcase text-danger"></i> {student.role}
                              </div>
                              <div className="d-flex align-items-center gap-1 text-muted fw-semibold mt-1" style={{ fontSize: '10px' }}>
                                <i className="bi bi-building"></i> {student.company}
                              </div>
                            </div>

                            {/* Conditional Placement Salary Badge */}
                            {student.placement && (
                              <div className="badge bg-success-subtle text-success border border-success-subtle rounded-1 py-1 px-2 fw-bold my-2" style={{ fontSize: '10px', backgroundColor: '#d1e7dd' }}>
                                <span className="text-success">●</span> {student.placement}
                              </div>
                            )}

                            {/* Testimonial Quote Text */}
                            <p className="card-text text-secondary mt-3 lh-base text-start italic-quote" style={{ fontSize: '12px', fontStyle: 'italic' }}>
                              “{student.text}”
                            </p>
                          </div>

                          {/* Card Footer Meta: Stars & Country Location */}
                          <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                            <div className="text-danger" style={{ fontSize: '11px' }}>
                              <i className="bi bi-star-fill me-1"></i>
                              <i className="bi bi-star-fill me-1"></i>
                              <i className="bi bi-star-fill me-1"></i>
                              <i className="bi bi-star-fill me-1"></i>
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="text-muted fw-bold d-flex align-items-center gap-1" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>
                              <i className="bi bi-geo-alt-fill text-secondary"></i> {student.location}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* Controls: Left & Right Custom Arrows */}
          <button className="carousel-control-prev custom-arrow-btn left-arrow" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="bi bi-chevron-left text-dark fs-4" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next custom-arrow-btn right-arrow" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="bi bi-chevron-right text-dark fs-4" aria-hidden="true"></span>
          </button>
        </div>

      </div>

      {/* Styled Scoped CSS Elements */}
      <style jsx>{`
        .custom-card {
          border: 1px solid #f3f4f6;
          border-top: 3px solid #dc3545 !important; /* लाल/ऑरेंज कलर का बॉर्डर ऊपरी सिरा */
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }
        .custom-card:hover {
          transform: translateY(-5px);
        }
        .tracking-widest {
          letter-spacing: 2px;
        }
        .italic-quote {
          color: #4b5563 !important;
        }
        
        /* स्क्रीनशॉट की तरह कस्टमाइज्ड नैविगेशन एरो बटन्स */
        .custom-arrow-btn {
          width: 40px;
          height: 45px;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          opacity: 1;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          border: 1px solid #e5e7eb;
          z-index: 5;
          transition: background 0.2s ease;
        }
        .custom-arrow-btn:hover {
          background: #f9fafb;
        }
        .left-arrow { left: 10px; border-radius: 0 4px 4px 0; }
        .right-arrow { right: 10px; border-radius: 4px 0 0 4px; }
        
        @media (max-width: 768px) {
          .custom-arrow-btn { display: none; } /* मोबाइल पर स्वाइप इनेबल्ड रखने के लिए एरो छुपाए */
          #testimonialCarousel .carousel-item { display: block; width: 100%; margin-right: 0; }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;