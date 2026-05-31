import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="modern-footer text-white pt-5 pb-4 mt-5">
      <div className="container">

        {/* TOP ROW: Premium Branding & Newsletter Grid */}
        <div className="row align-items-center mb-5 pb-4 border-bottom border-secondary border-opacity-10 g-4">

          {/* Logo & Intro */}
          <div className="col-lg-5 text-start" data-aos="fade-up" data-aos-duration="800">
            <h3 className="fw-black text-uppercase tracking-tight text-danger mb-2" style={{ fontWeight: 900 }}>
              JIFSA<span className="text-danger">.</span>
            </h3>
            <p className="text-light small mb-0 lh-base" style={{ maxWidth: '360px' }}>
              St. Joseph's International Fire and Safety Academy — India's premier national network for professional fire engineering & industrial safety tech careers since 1996.
            </p>
          </div>

          {/* Newsletter Form Box */}
          <div className="col-lg-7 text-start" data-aos="fade-up" data-aos-duration="1000">
            <div className="p-4 rounded-3" style={{ backgroundColor: '#121824' }}>
              <div className="row align-items-center g-3">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-1 tracking-wide text-danger small text-uppercase">Stay In The Safety Loop</h6>
                  <p className="text-light small mb-0">Get live job alerts & campus drive updates.</p>
                </div>
                <div className="col-md-6">
                  <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      className="form-control footer-input bg-transparent text-white border-secondary border-opacity-20 rounded-1 small py-2 text-light"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit" className="btn btn-danger px-3 fw-bold btn-sm rounded-1 d-flex align-items-center gap-2 text-uppercase">
                      Join <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: 4 Column Clean Grid */}
        <div className="row text-start g-4">

          {/* Column 1: Explore Links */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-uppercase fw-bold text-danger mb-3 tracking-wider" style={{ fontSize: '11px' }}>Explore Careers</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0">
              <li><Link to="/courses" className="footer-link small text-light text-decoration-none">Safety Courses</Link></li>
              <li><Link to="/placements" className="footer-link small text-light text-decoration-none">Placement Tracker</Link></li>
              <li><Link to="/careers" className="footer-link small text-light text-decoration-none">Join Our Faculty</Link></li>
              <li><Link to="/franchise" className="footer-link small text-light text-decoration-none">Franchise Model</Link></li>
            </ul>
          </div>

          {/* Column 2: Resource Links */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
            <h6 className="text-uppercase fw-bold text-danger mb-3 tracking-wider" style={{ fontSize: '11px' }}>Resources</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0">
              <li><a href="#about" className="footer-link small text-light text-decoration-none">About JIFSA Legacy</a></li>
              <li><a href="#alumni" className="footer-link small text-light text-decoration-none">Alumni Stories</a></li>
              <li><a href="#verify" className="footer-link small text-light text-decoration-none">Verification Portal</a></li>
              <li><a href="#privacy" className="footer-link small text-light text-decoration-none">Privacy & Terms</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Micro Blocks */}
          <div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="300">
            <h6 className="text-uppercase fw-bold text-danger mb-3 tracking-wider" style={{ fontSize: '11px' }}>HQ Support</h6>
            <div className="d-flex flex-column gap-3">
              <a href="tel:+91XXXXXXXXXX" className="d-flex align-items-center gap-3 text-decoration-none group text-light">
                <div className="rounded bg-secondary bg-opacity-10 text-danger p-2 d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px' }}>
                  <i className="bi bi-telephone-fill small"></i>
                </div>
                <div>
                  <span className="d-block text-light opacity-50 fw-bold" style={{ fontSize: '8px', letterSpacing: '0.5px' }}>TOLL FREE</span>
                  <span className="small fw-semibold text-white-50">+91-XXXXXXXXXX</span>
                </div>
              </a>
              <a href="mailto:info@jifsa.com" className="d-flex align-items-center gap-3 text-decoration-none group text-light">
                <div className="rounded bg-secondary bg-opacity-10 text-danger p-2 d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px' }}>
                  <i className="bi bi-envelope-open-fill small"></i>
                </div>
                <div>
                  <span className="d-block text-light opacity-50 fw-bold" style={{ fontSize: '8px', letterSpacing: '0.5px' }}>EMAIL US</span>
                  <span className="small fw-semibold text-white-50">info@jifsa.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Digital Social Badges */}
          <div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">
            <h6 className="text-uppercase fw-bold text-danger mb-3 tracking-wider" style={{ fontSize: '11px' }}>Digital Presence</h6>
            <p className="text-light small mb-3">Connect with our active global network panels.</p>
            <div className="d-flex gap-2">
              <a href="#" className="social-badge-icon rounded bg-secondary bg-opacity-10 text-light d-flex align-items-center justify-content-center text-decoration-none" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-badge-icon rounded bg-secondary bg-opacity-10 text-light d-flex align-items-center justify-content-center text-decoration-none" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-badge-icon rounded bg-secondary bg-opacity-10 text-light d-flex align-items-center justify-content-center text-decoration-none" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-badge-icon rounded bg-secondary bg-opacity-10 text-light d-flex align-items-center justify-content-center text-decoration-none" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Dynamic Fineprint Clean Meta */}
        <div className="mt-5 pt-4 border-top border-secondary border-opacity-10" data-aos="fade-in" data-aos-duration="1200">
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-start">
              <p className="text-light small mb-0">
                © 2026 JIFSA Inc. All rights reserved. | <span className="text-secondary opacity-75">Designed for Educational Excellence</span>
              </p>
            </div>
            <div className="col-md-6 text-md-end text-start">
              <div className="d-flex justify-content-md-end justify-content-start gap-3 opacity-50" style={{ fontSize: '8px', fontWeight: '700', letterSpacing: '0.5px' }}>
                <span className="text-white"><i className="bi bi-shield-fill-check text-success me-1 fs-6 align-middle"></i> ISO 9001:2015 CERTIFIED</span>
                <span className="text-white"><i className="bi bi-award-fill text-danger me-1 fs-6 align-middle"></i> GOVT RECOGNIZED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;