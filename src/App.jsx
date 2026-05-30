import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

// Placeholder pages
const Courses = () => <div className="container py-5"><h2 className="text-center">Courses Page</h2></div>;
const Organization = () => <div className="container py-5"><h2 className="text-center">Organization Page</h2></div>;
const Placements = () => <div className="container py-5"><h2 className="text-center">Placements Page</h2></div>;
const Careers = () => <div className="container py-5"><h2 className="text-center">Careers Page</h2></div>;
const Franchise = () => <div className="container py-5"><h2 className="text-center">Franchise Page</h2></div>;
const Students = () => <div className="container py-5"><h2 className="text-center">Students Page</h2></div>;
const Blog = () => <div className="container py-5"><h2 className="text-center">Blog Page</h2></div>;
const Contact = () => <div className="container py-5"><h2 className="text-center">Contact Page</h2></div>;
const Apply = () => <div className="container py-5"><h2 className="text-center">Apply Now Page</h2></div>;

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/students" element={<Students />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;