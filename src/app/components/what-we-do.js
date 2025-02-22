import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="services bg-light">
      <div className="container bg-white shadow" data-aos="fade-up">
        <div className="section-title">
          <h2>What We Do</h2>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="bi bi-broadcast"></i>
            </div>
            <h4 className="title">
              <a href="">Logistics</a>
            </h4>
            <p className="description">
              We provide warehousing, logistics handling and haulage service for
              agro commodities to deliver to processing companies and consumers.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i className="bi bi-brightness-high"></i>
            </div>
            <h4 className="title">
              <a href="">Training</a>
            </h4>
            <p className="description">
              Training of farmers on modern practices and the use of Technology,
              Smart Agriculture in farming business with the aim of developing
              smallholder farmers into commercial farmers.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i className="bi bi-calendar2-week"></i>
            </div>
            <h4 className="title">
              <a href="">Financing</a>
            </h4>
            <p className="description">
              We promote financial inclusion amongst smallholder farmers through
              collaboration with selected insurance and financial institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
