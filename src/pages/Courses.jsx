import React from 'react';
import CourseCatalogFilters from "./CourseCatalogFilters";

export default function Courses() {
    return (
        <>
            <section className="text-white text-center py-5 position-relative" style={{ backgroundColor: '#020a16' }}>
                <div className="container-fluid py-4">

                    <div className="d-inline-flex align-items-center justify-content-center border border-danger rounded px-3 py-1 mb-4" style={{ backgroundColor: 'rgba(220, 53, 69, 0.05)' }}>
                        <small className="text-danger fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                            COURSES CATALOG 2026-27
                        </small>
                    </div>

                    <h1 className="display-4 fw-bolder text-uppercase text-white mb-3" style={{ fontSize: 'calc(1.8rem + 1.5vw)', letterSpacing: '-0.5px' }}>
                        SHAPE YOUR FUTURE WITH <span className="text-danger">OUR COURSES</span>
                    </h1>

                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 col-md-10">
                            <p className="text-light fs-6 lh-base opacity-75">
                                Explore our comprehensive range of UGC-recognized degrees, international certifications,
                                and specialized industrial safety diplomas designed for the global workforce.
                            </p>
                        </div>
                    </div>

                    <div className="row g-3 justify-content-center mx-auto" style={{ maxWidth: '900px' }}>

                        <div className="col-6 col-sm-3">
                            <div className="border border-secondary border-opacity-25 rounded p-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                                <h2 className="fw-bold m-0 text-white fs-3">13+</h2>
                                <small className="text-light text-uppercase d-block mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Programmes</small>
                            </div>
                        </div>

                        <div className="col-6 col-sm-3">
                            <div className="border border-secondary border-opacity-25 rounded p-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                                <h2 className="fw-bold m-0 text-white fs-3">35,000+</h2>
                                <small className="text-light text-uppercase d-block mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Global Alumni</small>
                            </div>
                        </div>

                        <div className="col-6 col-sm-3">
                            <div className="border border-secondary border-opacity-25 rounded p-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                                <h2 className="fw-bold m-0 text-white fs-3">800+</h2>
                                <small className="text-light text-uppercase d-block mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Hiring Partners</small>
                            </div>
                        </div>

                        <div className="col-6 col-sm-3">
                            <div className="border border-secondary border-opacity-25 rounded p-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                                <h2 className="fw-bold m-0 text-white fs-3">₹35k/mo</h2>
                                <small className="text-light text-uppercase d-block mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Avg Placement</small>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
          
          <CourseCatalogFilters />
        </>
    );
}