import React from 'react';

function About() {
    return (
        
    <section id="about" className="about">
      <div className="container">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
            <div className="content">
              <h3>Company Overview</h3>
              <p className="show-read-more">
                Incorporated in 2001, NASUS Integration Limited is a multidisciplinary service provider in engineering, logistics,
          procurement, and HSE-compliant project execution. We are driven by excellence and a commitment to national development.</p>
              <p>Our team includes seasoned professionals with decades of experience in executing critical infrastructure, oilfield support, and community development projects across Nigeria.</p>
              <p>NASUS is not just a service provider—we are an extension of your organization. We work side-by-side with your team, leveraging your vision, goals, and context to implement solutions that make a measurable difference.
              </p>
              <a href="/nasus-integration/about" className="about-btn" style={{ backgroundColor: "#F38428"}}>Learn More <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-like"></i>
                  <h4>Our Mission</h4>
                  <p>To deliver high-quality, ethical, and responsive services while fostering client satisfaction and employee growth.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-group"></i>
                  <h4>Our Vision</h4>
                  <p>To be a trusted leader in engineering and logistics, driving innovation across Nigeria.</p>
                </div>
                {/* <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-paper-plane"></i>
                  <h4>Our Competitive Edge</h4>
                  <p>TROIKA is registered with most joint venture operators in Nigeria as well as the subsidiaries of Nigerian National Petroleum Corporation (NNPC) and is armed with the necessary statutory requirements from DPR to NIPEX and FEPA.…</p>
                </div> */}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default About;