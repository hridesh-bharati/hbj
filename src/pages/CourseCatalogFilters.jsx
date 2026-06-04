import React, { useState } from 'react';

export default function CompleteCatalogPage() {
    // ==================== MASTER COURSE DATA (from screenshots) ====================
    const allCourses = [
        { id: 1, title: "B.Voc Bachelor of Vocation in Industrial Safety", type: "DEGREE", duration: "3 YEARS", eligibility: "12TH PASS (ANY STREAM) / DIPLOMA", mode: "OFFLINE", provider: "JIFSA", budget: "> 55K" },
        { id: 2, title: "Diploma in Industrial Safety", type: "DIPLOMA", duration: "1 YEAR", eligibility: "12TH PASS OR DIPLOMA HOLDER", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 3, title: "Advance Diploma In Industrial Safety (ADIS)", type: "ADVANCED DIPLOMA", duration: "2 YEARS", eligibility: "GRADUATE / DIPLOMA", mode: "OFFLINE", provider: "JIFSA", budget: "> 55K" },
        { id: 4, title: "TÜV SÜD - Firefighter", type: "CERTIFICATION", duration: "6 MONTHS", eligibility: "10TH OR 12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 5, title: "Safety Supervisor Steel Plant (HSSSC)", type: "CERTIFICATION", duration: "5 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 6, title: "TÜV SÜD - Certified Safety Officer", type: "CERTIFICATION", duration: "4 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 7, title: "TÜV SÜD - Certified Safety Associate", type: "CERTIFICATION", duration: "2 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "10K - 25K" },
        { id: 8, title: "TÜV SÜD CFSS - IISSSSC Safety Supervisor Steel Plant", type: "CERTIFICATION", duration: "5 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 9, title: "TÜV SÜD CFSS - Certified Safety Specialist", type: "CERTIFICATION", duration: "4 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 10, title: "TÜV SÜD Certificate in Fire & Safety", type: "CERTIFICATION", duration: "8 MONTHS", eligibility: "12TH/GRAD", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 11, title: "Diploma in Industrial Safety (DIS) + TÜV SÜD CSO (RUNGTA)", type: "DIPLOMA", duration: "1 YEAR", eligibility: "12TH/GRAD", mode: "OFFLINE", provider: "JIFSA", budget: "> 55K" },
        { id: 12, title: "International Certificate in Fire Safety (NEBOSH)", type: "INTERNATIONAL", duration: "6 MONTHS", eligibility: "10TH PASS", mode: "ONLINE", provider: "JIFSA", budget: "> 55K" },
        { id: 13, title: "OSHA 30-Hour General Industry", type: "INTERNATIONAL", duration: "4 DAYS", eligibility: "ALL WORKERS", mode: "ONLINE", provider: "JIFSA", budget: "10K - 25K" },
        { id: 14, title: "IOSH Managing Safely", type: "INTERNATIONAL", duration: "4 DAYS", eligibility: "ALL WORKERS", mode: "ONLINE", provider: "JIFSA", budget: "10K - 25K" },
        { id: 15, title: "Certified Industrial Hygienist", type: "CERTIFICATION", duration: "6 MONTHS", eligibility: "GRADUATE / DIPLOMA", mode: "OFFLINE", provider: "JIFSA", budget: "> 55K" },
        { id: 16, title: "Safety Officer Course (Offline)", type: "CERTIFICATION", duration: "4 MONTHS", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 17, title: "Construction Safety Management", type: "ADVANCED DIPLOMA", duration: "1 YEAR", eligibility: "12TH PASS", mode: "OFFLINE", provider: "JIFSA", budget: "25K - 55K" },
        { id: 18, title: "Fire & Industrial Safety Management", type: "DEGREE", duration: "3 YEARS", eligibility: "12TH PASS (ANY STREAM) / DIPLOMA", mode: "OFFLINE", provider: "JIFSA", budget: "> 55K" },
    ];

    // ==================== FILTER STATES ====================
    const [searchQuery, setSearchQuery] = useState("");
    const [activeType, setActiveType] = useState("ALL");
    const [activeProvider, setActiveProvider] = useState("ALL");
    const [activeMode, setActiveMode] = useState("ALL");
    const [activeDuration, setActiveDuration] = useState("ALL");
    const [activeEligibility, setActiveEligibility] = useState("ALL");
    const [activeBudget, setActiveBudget] = useState("ALL");

    // ==================== FILTER LOGIC ====================
    const filteredCourses = allCourses.filter(course => {
        // SEARCH filter
        if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;

        // TYPE filter
        if (activeType !== "ALL" && course.type !== activeType) return false;

        // PROVIDER filter
        if (activeProvider !== "ALL" && course.provider !== activeProvider) return false;

        // MODE filter
        if (activeMode !== "ALL" && course.mode !== activeMode) return false;

        // DURATION filter
        if (activeDuration !== "ALL" && course.duration !== activeDuration) return false;

        // ELIGIBILITY filter
        if (activeEligibility !== "ALL" && course.eligibility !== activeEligibility) return false;

        // BUDGET filter
        if (activeBudget !== "ALL" && course.budget !== activeBudget) return false;

        return true;
    });

    // Check if ANY filter is active (not "ALL")
    const isAnyFilterActive = () => {
        return activeType !== "ALL" ||
            activeProvider !== "ALL" ||
            activeMode !== "ALL" ||
            activeDuration !== "ALL" ||
            activeEligibility !== "ALL" ||
            activeBudget !== "ALL" ||
            searchQuery !== "";
    };

    // Show "No courses found" when filters are active AND no courses match
    const showNoCourses = isAnyFilterActive() && filteredCourses.length === 0;
    // Show courses only when ALL filters are "ALL" (or when there are results from "ALL" state)
    const showCourseGrid = !showNoCourses && filteredCourses.length > 0;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery("");
        setActiveType("ALL");
        setActiveProvider("ALL");
        setActiveMode("ALL");
        setActiveDuration("ALL");
        setActiveEligibility("ALL");
        setActiveBudget("ALL");
    };

    // Filter button helper
    const FilterButton = ({ label, value, current, setter, options, isTypeBtn = false }) => {
        const isActive = current === value;
        return (
            <button
                onClick={() => setter(value)}
                className={`btn btn-sm text-uppercase fw-bold rounded px-3 py-1 transition-all ${isActive ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                style={{ fontSize: '10px', letterSpacing: '0.3px' }}
            >
                {label}
            </button>
        );
    };

    // Duration options list
    const durationOptions = ["ALL", "3 YEARS", "2 YEARS", "1 YEAR", "6 MONTHS", "5 MONTHS", "4 MONTHS", "2 MONTHS", "4 DAYS", "1 DAY"];
    const typeOptions = ["ALL", "DEGREE", "ADVANCED DIPLOMA", "DIPLOMA", "CERTIFICATION", "INTERNATIONAL"];
    const providerOptions = ["ALL", "JIFSA"];
    const modeOptions = ["ALL", "OFFLINE", "ONLINE"];
    const eligibilityOptions = ["ALL", "12TH PASS (ANY STREAM) / DIPLOMA", "12TH PASS OR DIPLOMA HOLDER", "10TH OR 12TH PASS", "10TH PASS", "10TH/12TH PASS", "GRADUATE / DIPLOMA", "12TH PASS", "ALL WORKERS", "12TH/GRAD"];
    const budgetOptions = ["ALL", "< 10K", "10K - 25K", "25K - 55K", "> 55K"];

    return (
        <div className='my-3' style={{ backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>

            {/* EXPLORE HUB ROW */}
            <div className="container pt-5">
                <div className="row g-4 mb-4">
                    <div className="col-lg-3 col-md-12">
                        <h6 className="text-danger fw-bold text-uppercase mb-2" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
                            CONTINUE EXPLORING
                        </h6>
                        <p className="text-muted small lh-base m-0">
                            Use these canonical hub links to move between courses, placements, admissions, and student support.
                        </p>
                    </div>
                    <div className="col-lg-9">
                        <div className="row g-3">
                            <div className="col-md-3 col-6">
                                <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderTop: '4px solid #dc3545' }}>
                                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>BROWSE FULL CATALOG</h6>
                                    <p className="text-muted m-0" style={{ fontSize: '0.7rem' }}>Jump to complete course directory.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderTop: '4px solid #dc3545' }}>
                                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>PLACEMENT OUTCOMES</h6>
                                    <p className="text-muted m-0" style={{ fontSize: '0.7rem' }}>See live openings & success stories.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderTop: '4px solid #dc3545' }}>
                                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>ADMISSIONS HELP</h6>
                                    <p className="text-muted m-0" style={{ fontSize: '0.7rem' }}>Speak with admissions team.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderTop: '4px solid #dc3545' }}>
                                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>STUDENT FAQS</h6>
                                    <p className="text-muted m-0" style={{ fontSize: '0.7rem' }}>Review common questions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FILTER SECTION - STICKY */}
            <section className="sticky-top bg-white border-bottom py-3" style={{ zIndex: 1020, boxShadow: '0 0.5rem 1.5rem rgba(0,0,0,.02)' }}>
                <div className="container">
                    <div className="d-flex flex-column gap-3">
                        {/* Search + Category Tabs */}
                        <div className="d-flex flex-column flex-md-row gap-3 align-items-stretch align-items-md-center">
                            <div className="position-relative flex-grow-1">
                                <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control bg-white border-2"
                                    placeholder="Search by course name or role..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{ paddingLeft: '2.5rem', fontSize: '14px', fontWeight: 'bold', borderColor: '#f1f3f5' }}
                                />
                            </div>
                            <div className="d-none d-md-flex align-items-center flex-grow-1 justify-content-end">
                                <div className="d-flex bg-light p-1 rounded border w-100" style={{ borderColor: '#f1f3f5' }}>
                                    {typeOptions.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setActiveType(opt)}
                                            className={`btn btn-sm flex-fill fw-bold text-uppercase rounded ${activeType === opt ? 'bg-white text-danger shadow-sm border' : 'text-muted border-0 bg-transparent'}`}
                                            style={{ fontSize: '10px' }}
                                        >
                                            {opt === "ALL" ? "ALL" : opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Filter rows */}
                        <div className="row g-2 align-items-center justify-content-start pt-2 border-top" style={{ borderColor: '#f1f3f5' }}>
                            {/* PROVIDER */}
                            <div className="col-6 col-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-2">
                                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '9px' }}>Provider:</span>
                                <div className="d-flex gap-1">
                                    {providerOptions.map(prov => (
                                        <button
                                            key={prov}
                                            onClick={() => setActiveProvider(prov)}
                                            className={`btn btn-sm text-uppercase fw-bold rounded px-2 py-0.5 ${activeProvider === prov ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                                            style={{ fontSize: '9px' }}
                                        >
                                            {prov}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* MODE */}
                            <div className="col-6 col-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-2">
                                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '9px' }}>Mode:</span>
                                <div className="d-flex gap-1">
                                    {modeOptions.map(mode => (
                                        <button
                                            key={mode}
                                            onClick={() => setActiveMode(mode)}
                                            className={`btn btn-sm text-uppercase fw-bold rounded px-2 py-0.5 ${activeMode === mode ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                                            style={{ fontSize: '9px' }}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* DURATION */}
                            <div className="col-12 col-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-2">
                                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '9px' }}>Duration:</span>
                                <div className="d-flex gap-1 flex-wrap">
                                    {durationOptions.map(dur => (
                                        <button
                                            key={dur}
                                            onClick={() => setActiveDuration(dur)}
                                            className={`btn btn-sm text-uppercase fw-bold rounded px-2 py-0.5 ${activeDuration === dur ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                                            style={{ fontSize: '9px' }}
                                        >
                                            {dur}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Second filter row: Eligibility + Budget + Clear */}
                        <div className="row g-2 align-items-center justify-content-start">
                            <div className="col-12 col-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-2 flex-wrap">
                                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '9px' }}>Eligibility:</span>
                                <div className="d-flex gap-1 flex-wrap">
                                    {eligibilityOptions.map(elig => (
                                        <button
                                            key={elig}
                                            onClick={() => setActiveEligibility(elig)}
                                            className={`btn btn-sm text-uppercase fw-bold rounded px-2 py-0.5 ${activeEligibility === elig ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                                            style={{ fontSize: '9px' }}
                                        >
                                            {elig.length > 20 ? elig.slice(0, 18) + '..' : elig}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-12 col-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-2">
                                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '9px' }}>Budget:</span>
                                <div className="d-flex gap-1 flex-wrap">
                                    {budgetOptions.map(bgt => (
                                        <button
                                            key={bgt}
                                            onClick={() => setActiveBudget(bgt)}
                                            className={`btn btn-sm text-uppercase fw-bold rounded px-2 py-0.5 ${activeBudget === bgt ? 'btn-danger text-white' : 'btn-light text-secondary border'}`}
                                            style={{ fontSize: '9px' }}
                                        >
                                            {bgt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-12 col-md-auto ms-md-auto">
                                <button
                                    onClick={clearAllFilters}
                                    className="btn btn-sm d-flex align-items-center justify-content-center gap-2 text-uppercase fw-bold border-0"
                                    style={{ fontSize: '9px', padding: '6px 12px', backgroundColor: 'rgba(230, 57, 70, 0.08)', color: '#E63946' }}
                                >
                                    <i className="fas fa-times-circle"></i> CLEAR FILTERS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COURSE GRID OR NO COURSES MESSAGE */}
            <section className="py-5" style={{ backgroundColor: '#fcfdfe' }}>
                <div className="container">
                    {showNoCourses && (
                        <div className="text-center py-5 my-5">
                            <div className="bg-white p-5 rounded-4 shadow-sm" style={{ maxWidth: '550px', margin: '0 auto', border: '1px solid #f0f0f0' }}>
                                <i className="fas fa-search-slash text-danger mb-3" style={{ fontSize: '3rem', opacity: 0.6 }}></i>
                                <h3 className="fw-bold mb-2">No courses found</h3>
                                <p className="text-muted mb-4">Try adjusting your search or filters to see more results.</p>
                                <button onClick={clearAllFilters} className="btn btn-danger px-4 py-2 text-uppercase fw-bold" style={{ fontSize: '12px', borderRadius: 0 }}>
                                    CLEAR ALL FILTERS
                                </button>
                            </div>
                        </div>
                    )}

                    {showCourseGrid && (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {filteredCourses.map(course => (
                                <div className="col" key={course.id}>
                                    <div className="card h-100 border p-4 bg-white position-relative shadow-sm course-card d-flex flex-column justify-content-between" style={{ borderColor: '#f1f3f5', borderRadius: '0' }}>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="d-flex flex-column">
                                                    <span className="text-uppercase fw-bold text-danger mb-1" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>JIFSA</span>
                                                    <span className="px-2 py-0.5 bg-light text-muted text-uppercase fw-bold align-self-start" style={{ fontSize: '9px' }}>{course.type}</span>
                                                </div>
                                                <i className="fas fa-certificate text-secondary opacity-50"></i>
                                            </div>
                                            <h3 className="h6 fw-bold text-dark mb-4" style={{ fontSize: '16px', minHeight: '45px', lineHeight: '1.3' }}>
                                                {course.title}
                                            </h3>
                                            <div className="row g-2 mb-3">
                                                <div className="col-6">
                                                    <div className="p-2 bg-light border-0">
                                                        <small className="text-uppercase text-muted d-block" style={{ fontSize: '8px' }}>Duration</small>
                                                        <span className="fw-bold text-dark small">{course.duration}</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="p-2 bg-light border-0">
                                                        <small className="text-uppercase text-muted d-block" style={{ fontSize: '8px' }}>Eligibility</small>
                                                        <span className="fw-bold text-dark small text-truncate d-block" title={course.eligibility}>{course.eligibility.length > 22 ? course.eligibility.slice(0, 20) + '..' : course.eligibility}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn redHover btn-dark w-100 py-2.5 text-uppercase fw-bold" style={{ fontSize: '11px', borderRadius: '0', backgroundColor: '#0f172a' }}>
                                            VIEW SYLLABUS & CAREER MAP
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-5 text-white text-center" style={{ backgroundColor: '#0a0f1d' }}>
                <div className="container py-3">
                    <h2 className="fw-bold mb-2" style={{ fontSize: '24px' }}>Unsure which program is right for you?</h2>
                    <p className="text-light opacity-75 small mb-4 mx-auto" style={{ maxWidth: '500px' }}>Let our experts guide you to find the ideal structural pathway according to your skillset.</p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <button className="btn btn-danger text-uppercase fw-bold px-4 py-2" style={{ fontSize: '11px', borderRadius: '0' }}>Talk to an Advisor</button>
                        <button className="btn btn-outline-secondary text-white text-uppercase fw-bold px-4 py-2" style={{ fontSize: '11px', borderRadius: '0' }}>Download Prospectus</button>
                    </div>
                </div>
            </section>

            {/* FOOTER INFO */}
            <section className="py-5" style={{ backgroundColor: '#fff5f5' }}>
                <div className="container-fluid">
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <span className="text-danger uppercase fw-bold d-block mb-1" style={{ fontSize: '10px' }}>REGISTRATION OPEN FOR 2026</span>
                            <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '22px' }}>STAY AHEAD IN SAFETY</h3>
                            <p className="text-muted small m-0">Gain standard certifications acknowledged worldwide across multi-industrial ecosystems.</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="d-inline-flex gap-4">
                                <div className="text-center">
                                    <h4 className="fw-bold text-danger m-0">20 Years</h4>
                                    <small className="text-muted" style={{ fontSize: '10px' }}>Legacy</small>
                                </div>
                                <div className="text-center">
                                    <h4 className="fw-bold text-danger m-0">10k+</h4>
                                    <small className="text-muted" style={{ fontSize: '10px' }}>Placements</small>
                                </div>
                                <div className="text-center">
                                    <h4 className="fw-bold text-danger m-0">400+</h4>
                                    <small className="text-muted" style={{ fontSize: '10px' }}>Corporate Ties</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}