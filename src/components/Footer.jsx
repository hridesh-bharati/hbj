import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h4 className="fw-bold mb-3" style={{ color: '#e65c1e' }}>JIFSA</h4>
            <p className="text-white-50 small">St Joseph's International Fire and Safety Academy — India's No.1 Institute for Fire & Industrial Safety since 1996.</p>
          </div>
          <div className="col-lg-2 col-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Courses</Link></li>
              <li><Link to="/placements" className="text-white-50 text-decoration-none">Placements</Link></li>
              <li><Link to="/careers" className="text-white-50 text-decoration-none">Careers</Link></li>
              <li><Link to="/franchise" className="text-white-50 text-decoration-none">Franchise</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="text-white-50 small mb-1"><i className="bi bi-telephone me-2"></i> +91-8955776603</p>
            <p className="text-white-50 small"><i className="bi bi-envelope me-2"></i> info@jifsa.com</p>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-white bg-opacity-10" />
        <div className="text-center">
          <p className="text-white-50 small mb-0">© 2026 JIFSA. All rights reserved. | Designed for Fire & Safety Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;