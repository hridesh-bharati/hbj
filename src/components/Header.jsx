// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'COURSES', path: '/courses' },
//     { name: 'ORGANIZATION', path: '/organization' },
//     { name: 'PLACEMENTS', path: '/placements' },
//     { name: 'CAREERS', path: '/careers' },
//     { name: 'FRANCHISE', path: '/franchise' },
//     { name: 'STUDENTS', path: '/students' },
//     { name: 'BLOG', path: '/blog' },
//     { name: 'CONTACT', path: '/contact' },
//   ];

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-dark text-white py-2" style={{ backgroundColor: '#111827' }}>
//         <div className="container-fluid">
//           <div className="d-flex justify-content-between align-items-center flex-wrap">
//             <div className="d-flex align-items-center gap-2">
//               <i className="bi bi-trophy-fill text-warning"></i>
//               <span className="small fw-semibold" style={{ fontSize: '11px' }}>ON AWARD 2021 | ICONIC ACADEMY</span>
//             </div>
//             <div className="d-flex gap-4">
//               <small style={{ fontSize: '11px' }}><i className="bi bi-envelope me-1"></i> info@jifsa.com</small>
//               <small style={{ fontSize: '11px' }}><i className="bi bi-telephone me-1"></i> +91-98765 43210</small>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav 
//         className={`navbar navbar-expand-lg sticky-top custom-navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`} 
//         style={{ 
//           padding: scrolled ? '5px 0' : '8px 0',
//           transition: 'all 0.3s ease'
//         }}
//       >
//         <div className="container-fluid navbar-container">
//           <Link className="navbar-brand fw-bold" to="/">
//             <span className="fs-3" style={{ color: '#e65c1e' }}>JIFSA</span>
//             <span className="d-block" style={{ fontSize: '9px', lineHeight: 1.2, color: '#333', letterSpacing: '0.3px' }}>
//               St Joseph's International<br />Fire & Safety Academy
//             </span>
//           </Link>

//           <button 
//             className="navbar-toggler border-0" 
//             type="button" 
//             onClick={() => setIsNavOpen(!isNavOpen)}
//           >
//             <i className="bi bi-list" style={{ fontSize: '28px' }}></i>
//           </button>

//           <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
//             <ul className="navbar-nav ms-auto align-items-center gap-lg-1 gap-2">
//               {navLinks.map((link) => (
//                 <li className="nav-item" key={link.name}>
//                   <Link 
//                     className="nav-link fw-semibold" 
//                     to={link.path}
//                     style={{ fontSize: '12px', letterSpacing: '0.3px', padding: '6px 12px' }}
//                     onClick={() => setIsNavOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//               <li className="nav-item">
//                 <Link 
//                   className="btn px-4 py-2 fw-bold rounded-pill text-white"
//                   to="/apply"
//                   style={{ backgroundColor: '#e65c1e', fontSize: '12px' }}
//                   onClick={() => setIsNavOpen(false)}
//                 >
//                   APPLY NOW <i className="bi bi-arrow-right ms-1"></i>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* CSS Styles */}
//       <style jsx>{`
//         /* --- मोबाइल और डिफ़ॉल्ट सेटिंग्स --- */
//         .navbar-default {
//           background-color: #ffffff !important;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.03);
//         }

//         /* मोबाइल पर भी स्क्रॉल करने पर थोड़ा ट्रांसपेरेंट और ब्लर रखना चाहें तो यहाँ बदल सकते हैं, 
//            अभी मोबाइल पर इसे सिंपल व्हाइट रखा है */
//         .custom-navbar.navbar-scrolled {
//           background-color: #ffffff;
//           box-shadow: 0 8px 30px rgba(0,0,0,0.12);
//         }

//         /* --- केवल डेस्कटॉप व्यू के लिए (992px से ऊपर) --- */
//         @media (min-width: 992px) {
//           .nav-link {
//             font-size: 12px !important;
//           }
          
//           /* स्क्रॉल होने पर फ्लोटिंग, ट्रांसपेरेंट और ब्लर इफेक्ट */
//           .custom-navbar.navbar-scrolled {
//             background-color: rgba(255, 255, 255, 0.85) !important; /* 85% ट्रांसपेरेंट व्हाइट */
//             backdrop-filter: blur(10px) !important; /* धुंधला (Blur) इफेक्ट */
//             -webkit-backdrop-filter: blur(10px) !important; /* Safari ब्राउज़र के लिए */
            
//             margin: 20px 50px 0 50px !important; /* टॉप और साइड्स से मार्जिन */
//             border-radius: 15px !important; /* गोल कोने */
//             top: 20px !important; /* sticky-top की पोजीशन एडजस्ट करने के लिए */
//             box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.08); /* प्रीमियम हल्की शैडो */
//             border: 1px solid rgba(255, 255, 255, 0.4); /* हल्का बॉर्डर ग्लास लुक को बढ़ाने के लिए */
//           }

//           .navbar-scrolled .navbar-container {
//             max-width: 92% !important;
//             transition: max-width 0.3s ease;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // सेंट्रल लूप के लिए नोटिस/अनाउंसमेंट लिस्ट
  const announcements = [
    "NEW BATCH STARTING JULY 2026 - LIMITED SEATS AVAILABLE",
    "100% PLACEMENT ASSISTANCE FOR ALL COURSES",
    "ON AWARD 2021 | ICONIC ACADEMY",
    "ADMISSIONS OPEN FOR FIRE & SAFETY DIPLOMA"
  ];

  useEffect(() => {
    // हर 3 सेकंड में टेक्स्ट को ऊपर बदलने (Slide Up) के लिए टाइमर
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

  const navLinks = [
    { name: 'COURSES', path: '/courses' },
    { name: 'ORGANIZATION', path: '/organization' },
    { name: 'PLACEMENTS', path: '/placements' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'FRANCHISE', path: '/franchise' },
    { name: 'STUDENTS', path: '/students' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar — ब्लैक थीम, 3 हिस्से और वर्टिकल टेक्स्ट लूप के साथ */}
      <div className="text-white py-2" style={{ backgroundColor: '#000000', borderBottom: '1px solid #111827' }}>
        <div className="container-fluid px-4">
          <div className="row align-items-center g-2 text-center text-md-start">
            
            {/* Left Column: Helpline */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              <i className="bi bi-telephone-fill text-secondary" style={{ fontSize: '11px' }}></i>
              <span className="fw-bold" style={{ fontSize: '11px', color: '#ffffff', letterSpacing: '0.5px' }}>
                HELPLINE: <span style={{ color: '#ffffff' }}>+91 8955776603</span>
              </span>
            </div>

            {/* Center Column: Upward Text Slider Loop */}
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <div style={{ height: '20px', overflow: 'hidden', position: 'relative' }}>
                <div 
                  className="fw-bolder text-center" 
                  key={currentIndex} /* key बदलने से CSS ऐनिमेशन दोबारा ट्रिगर होता है */
                  style={{ 
                    fontSize: '11px', 
                    color: '#e65c1e', 
                    letterSpacing: '0.5px',
                    animation: 'slideUpText 0.5s ease-in-out forwards'
                  }}
                >
                  <span className="me-2" style={{ color: '#ef4444' }}>■</span> {announcements[currentIndex]}
                </div>
              </div>
            </div>

            {/* Right Column: Faculty Login */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <Link 
                to="/faculty-login" 
                className="text-white fw-bold text-decoration-none faculty-link"
                style={{ fontSize: '11px', letterSpacing: '0.5px' }}
              >
                FACULTY LOGIN
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar — स्क्रॉल करने पर ब्लर और ट्रांसपेरेंट इफ़ेक्ट (सिर्फ डेस्कटॉप पर) */}
      <nav 
        className={`navbar navbar-expand-lg sticky-top custom-navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`} 
        style={{ 
          padding: scrolled ? '5px 0' : '8px 0',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container-fluid navbar-container">
          <Link className="navbar-brand fw-bold" to="/">
            <span className="fs-3" style={{ color: '#e65c1e' }}>JIFSA</span>
            <span className="d-block" style={{ fontSize: '9px', lineHeight: 1.2, color: '#333', letterSpacing: '0.3px' }}>
              St Joseph's International<br />Fire & Safety Academy
            </span>
          </Link>

          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className="bi bi-list" style={{ fontSize: '28px' }}></i>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-center gap-lg-1 gap-2">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link 
                    className="nav-link fw-semibold" 
                    to={link.path}
                    style={{ fontSize: '12px', letterSpacing: '0.3px', padding: '6px 12px' }}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link 
                  className="btn px-4 py-2 fw-bold rounded-pill text-white"
                  to="/apply"
                  style={{ backgroundColor: '#e65c1e', fontSize: '12px' }}
                  onClick={() => setIsNavOpen(false)}
                >
                  APPLY NOW <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS Styles */}
      <style jsx>{`
        /* टेक्स्ट स्लाइडर के लिए एनिमेशन */
        @keyframes slideUpText {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .faculty-link:hover {
          color: #e65c1e !important;
          transition: color 0.2s ease;
        }

        /* --- मोबाइल और डिफ़ॉल्ट सेटिंग्स --- */
        .navbar-default {
          background-color: #ffffff !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }

        /* मोबाइल पर स्क्रॉल होने पर नॉर्मल सफेद बैकग्राउंड रहेगा (कोई एक्स्ट्रा इफेक्ट नहीं) */
        .custom-navbar.navbar-scrolled {
          background-color: #ffffff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        /* --- केवल डेस्कटॉप व्यू के लिए (992px से ऊपर) --- */
        @media (min-width: 992px) {
          .nav-link {
            font-size: 12px !important;
          }
          
          /* डेस्कटॉप पर स्क्रॉल होने पर फ्लोटिंग, ट्रांसपेरेंट और ब्लर इफेक्ट */
          .custom-navbar.navbar-scrolled {
            background-color: rgba(255, 255, 255, 0.85) !important; /* 85% ट्रांसपेरेंट व्हाइट */
            backdrop-filter: blur(10px) !important; /* धुंधला (Blur) इफेक्ट */
            -webkit-backdrop-filter: blur(10px) !important; /* Safari ब्राउज़र सपोर्ट */
            
            margin: 20px 50px 0 50px !important; /* टॉप से 20px, साइड्स से 50px मार्जिन */
            border-radius: 15px !important; /* गोल कोने */
            top: 20px !important; /* sticky-top की पोजीशन को एडजस्ट करने के लिए */
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.08); /* प्रीमियम शैडो */
            border: 1px solid rgba(255, 255, 255, 0.4); /* हल्का ग्लास बॉर्डर */
          }

          .navbar-scrolled .navbar-container {
            max-width: 92% !important;
            transition: max-width 0.3s ease;
          }
        }
      `}</style>
    </>
  );
};

export default Header;