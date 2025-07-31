
import React from 'react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)',
        minHeight: '40vh',
        paddingTop: '140px' // Space for breadcrumbs
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff7a1a" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
        }}></div>
        
        <div className="container position-relative">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8">
              <div className="text-white">
                <h1 className="display-3 fw-bold mb-4 lh-1">
                  About <span style={{color: '#ff7a1a'}}>NASUS</span>
                  <br />
                  <span className="fs-2 fw-normal text-light">Integration Limited</span>
                </h1>
                <p className="lead mb-4 text-light">
                  Delivering excellence in Engineering, Logistics, and Procurement since 2001
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="badge px-3 py-2 fs-6 rounded-pill" style={{backgroundColor: 'rgba(255, 122, 26, 0.2)', color: '#ff7a1a'}}>
                    23+ Years Experience
                  </div>
                  <div className="badge px-3 py-2 fs-6 rounded-pill" style={{backgroundColor: 'rgba(255, 154, 74, 0.2)', color: '#ff9a4a'}}>
                    Multi-Industry Expertise
                  </div>
                  <div className="badge px-3 py-2 fs-6 rounded-pill" style={{backgroundColor: 'rgba(255, 186, 122, 0.2)', color: '#ffba7a'}}>
                    Port Harcourt Based
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="position-relative">
                <div className="rounded-4 p-4 backdrop-blur" style={{backgroundColor: 'rgba(255, 122, 26, 0.1)'}}>
                  <blockquote className="blockquote text-white mb-0">
                    <p className="fs-5 fst-italic mb-3">
                      "Deliver value through innovation, integrity, and excellence."
                    </p>
                    <footer className="blockquote-footer text-light">
                      <cite title="Source Title">Our Company Motto</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">
          {/* Company Overview */}
          <section className="mb-5">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle p-2 me-3" style={{backgroundColor: '#ff7a1a'}}>
                      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h2 className="h3 mb-0 fw-bold">Who We Are</h2>
                  </div>
                  <p className="text-muted fs-5 lh-relaxed">
                    Founded in 2001, NASUS Integration Limited is a multidisciplinary business solutions provider offering comprehensive services across industries including oil & gas, construction, and infrastructure.
                  </p>
                  <p className="text-muted fs-5 lh-relaxed">
                    Based in Port Harcourt, we deliver tailored solutions that align with our clients' operational goals, driven by seasoned professionals with decades of combined experience.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="row gy-3 h-100">
                  <div className="col-12">
                    <div className="card border-0 shadow-sm h-100" style={{backgroundColor: 'rgba(255, 122, 26, 0.05)'}}>
                      <div className="card-body">
                        <h5 className="card-title mb-3" style={{color: '#ff7a1a'}}>Our Vision</h5>
                        <p className="card-text">
                          To be the preferred name in engineering, procurement, and logistics through 
                          <strong> efficiency, innovation,</strong> and <strong>value delivery</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card border-0 shadow-sm h-100" style={{backgroundColor: 'rgba(255, 154, 74, 0.05)'}}>
                      <div className="card-body">
                        <h5 className="card-title mb-3" style={{color: '#ff9a4a'}}>Our Mission</h5>
                        <p className="card-text fst-italic">
                          "To become a company—within God's available time—through hard work, efficiency, and innovation."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-5">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3">What We Do</h2>
              <p className="text-muted fs-5">Comprehensive solutions across three core service areas</p>
            </div>
            
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 position-relative overflow-hidden">
                  <div className="position-absolute top-0 start-0 w-100 h-2" style={{backgroundColor: '#ff7a1a'}}></div>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle p-3 me-3" style={{backgroundColor: 'rgba(255, 122, 26, 0.1)'}}>
                        <svg width="32" height="32" fill="currentColor" style={{color: '#ff7a1a'}} viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h4 className="mb-0 fw-bold">Engineering</h4>
                    </div>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff7a1a'}}>•</span>
                        Feasibility Studies
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff7a1a'}}>•</span>
                        Front-End & Detailed Design
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff7a1a'}}>•</span>
                        Project Management
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff7a1a'}}>•</span>
                        Construction & Maintenance
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff7a1a'}}>•</span>
                        Boreholes & Electrification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 position-relative overflow-hidden">
                  <div className="position-absolute top-0 start-0 w-100 h-2" style={{backgroundColor: '#ff9a4a'}}></div>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle p-3 me-3" style={{backgroundColor: 'rgba(255, 154, 74, 0.1)'}}>
                        <svg width="32" height="32" fill="currentColor" style={{color: '#ff9a4a'}} viewBox="0 0 24 24">
                          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                        </svg>
                      </div>
                      <h4 className="mb-0 fw-bold">Logistics</h4>
                    </div>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff9a4a'}}>•</span>
                        Light & Heavy Duty Haulage
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff9a4a'}}>•</span>
                        Equipment Leasing
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff9a4a'}}>•</span>
                        Tugboats, Barges, Marine
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ff9a4a'}}>•</span>
                        Shore Protection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 position-relative overflow-hidden">
                  <div className="position-absolute top-0 start-0 w-100 h-2" style={{backgroundColor: '#ffba7a'}}></div>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle p-3 me-3" style={{backgroundColor: 'rgba(255, 186, 122, 0.1)'}}>
                        <svg width="32" height="32" fill="currentColor" style={{color: '#ffba7a'}} viewBox="0 0 24 24">
                          <path d="M7 4V2C7 1.45 7.45 1 8 1s1 .45 1 1v2h6V2c0-.55.45-1 1-1s1 .45 1 1v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1zm11 16V8H6v12h12z"/>
                        </svg>
                      </div>
                      <h4 className="mb-0 fw-bold">Procurement</h4>
                    </div>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ffba7a'}}>•</span>
                        PPE & Spare Parts
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ffba7a'}}>•</span>
                        Oil Tools & Valves
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ffba7a'}}>•</span>
                        Construction Materials
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{color: '#ffba7a'}}>•</span>
                        Global Equipment Sourcing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement Detailed */}
          <section className="mb-5">
            <div className="card border-0 shadow-lg bg-gradient" style={{
              background: 'linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%)'
            }}>
              <div className="card-body p-5">
                <h3 className="text-center mb-4">Our Commitment</h3>
                <div className="row gy-3">
                  <div className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <div className="rounded-circle p-3 d-inline-flex mb-3" style={{backgroundColor: 'rgba(255, 122, 26, 0.1)'}}>
                        <svg width="24" height="24" fill="currentColor" style={{color: '#ff7a1a'}} viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold">Clients</h6>
                      <p className="text-muted small mb-0">A dependable partner</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <div className="rounded-circle p-3 d-inline-flex mb-3" style={{backgroundColor: 'rgba(255, 154, 74, 0.1)'}}>
                        <svg width="24" height="24" fill="currentColor" style={{color: '#ff9a4a'}} viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.98 2.98 0 0 0 17.09 7c-.8 0-1.54.37-2.01.97l-.96 1.45c-.33.49-.9.58-1.43.25-.53-.33-.62-.9-.29-1.43l.96-1.45C14.08 5.64 15.51 5 17.09 5c1.76 0 3.25.86 4.16 2.15L24 14.5V22h-4z"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold">Employees</h6>
                      <p className="text-muted small mb-0">Platform for dreams</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <div className="rounded-circle p-3 d-inline-flex mb-3" style={{backgroundColor: 'rgba(255, 186, 122, 0.1)'}}>
                        <svg width="24" height="24" fill="currentColor" style={{color: '#ffba7a'}} viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold">Directors</h6>
                      <p className="text-muted small mb-0">A brand to be proud of</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <div className="rounded-circle p-3 d-inline-flex mb-3" style={{backgroundColor: 'rgba(255, 122, 26, 0.15)'}}>
                        <svg width="24" height="24" fill="currentColor" style={{color: '#e6691a'}} viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold">Government</h6>
                      <p className="text-muted small mb-0">Responsible citizen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-5">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3">Core Values</h2>
              <p className="text-muted fs-5">The principles that guide everything we do</p>
            </div>
            
            <div className="row gy-4">
              {[
                {
                  title: "Professionalism",
                  description: "Excellence in service delivery",
                  color: "#ff7a1a",
                  icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                },
                {
                  title: "Integrity",
                  description: "Trustworthy and consistent",
                  color: "#ff9a4a",
                  icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                },
                {
                  title: "Efficiency",
                  description: "Results with optimal resource use",
                  color: "#ffba7a",
                  icon: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"
                },
                {
                  title: "Innovation",
                  description: "Modern solutions to complex challenges",
                  color: "#e6691a",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Safety & Compliance",
                  description: "Aligned with global HSE standards",
                  color: "#d65a00",
                  icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
                }
              ].map((value, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-lift">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div className="rounded-circle p-2 me-3 flex-shrink-0" style={{backgroundColor: `${value.color}20`}}>
                          <svg width="20" height="20" fill="currentColor" style={{color: value.color}} viewBox="0 0 24 24">
                            <path d={value.icon}/>
                          </svg>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-2">{value.title}</h6>
                          <p className="text-muted small mb-0">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Info */}
          <div className="row gy-4 mb-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Quality & HSE Commitment</h5>
                  <p className="card-text text-muted">
                    NASUS maintains an internationally recognized QA/QC framework with robust health, safety, and environmental policies. We commit to safe and sustainable project delivery across all engagements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Our People</h5>
                  <p className="card-text text-muted">
                    Under the leadership of <strong>Jasper Izzi</strong> (CEO), our multidisciplinary team includes certified engineers, HSE professionals, logistics experts, and finance specialists. Together, we deliver scalable solutions to clients across Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clients */}
          <section className="mb-5">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h4 className="text-center mb-4">Trusted by Industry Leaders</h4>
                <p className="text-center text-muted mb-4">We have successfully delivered for:</p>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-3">
                  {[
                    "Texaco Petroleum",
                    "Julius Berger", 
                    "FAAN",
                    "Nigerian Ports Authority",
                    "Daewoo Nigeria Ltd",
                    "NDDC",
                    "Planet Project Ltd"
                  ].map((client, index) => (
                    <div key={index} className="col">
                      <div className="text-center p-3 bg-light rounded-3">
                        <span className="fw-medium text-dark">{client}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="card border-0 shadow-lg text-white" style={{backgroundColor: '#2d2d2d'}}>
              <div className="card-body p-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h4 className="mb-3">Get In Touch</h4>
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle p-2 me-3 flex-shrink-0" style={{backgroundColor: 'rgba(255, 122, 26, 0.2)'}}>
                            <svg width="16" height="16" fill="currentColor" style={{color: '#ff7a1a'}} viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1">Office Address</h6>
                            <p className="text-light small mb-0">No. 14 Farm Road, Off Ada George Road, Port Harcourt, Rivers State</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle p-2 me-3 flex-shrink-0" style={{backgroundColor: 'rgba(255, 154, 74, 0.2)'}}>
                            <svg width="16" height="16" fill="currentColor" style={{color: '#ff9a4a'}} viewBox="0 0 24 24">
                              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1">Phone</h6>
                            <p className="text-light small mb-0">0805 506 8582</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle p-2 me-3 flex-shrink-0" style={{backgroundColor: 'rgba(255, 154, 74, 0.2)'}}>
                            <svg width="16" height="16" fill="currentColor" style={{color: '#ff9a4a'}} viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1">Email</h6>
                            <a href="mailto:nasus582002@yahoo.com" className="text-warning text-decoration-none small">
                              nasus582002@yahoo.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <div className="bg-opacity-10 rounded-4 p-4 d-inline-block" style={{backgroundColor: '#ff9a4a'}}>
                      <h6 className="text-dark mb-2">Ready to Partner?</h6>
                      <p className="small text-dark mb-3">Let's discuss your next project</p>
                      <a href="mailto:nasus582002@yahoo.com" className="btn btn-dark btn-sm">
                        Contact Us Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}